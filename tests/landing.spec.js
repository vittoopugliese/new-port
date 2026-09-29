import {test, expect} from "@playwright/test";

async function monitorGPU(page) {
  await page.addInitScript(() => {
    window.gpu = {contexts: 0, draws: 0, frameDraws: 0, lastFrameDraws: 0};
    const getContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (kind, ...args) {
      if (kind === "webgl2") window.gpu.contexts++;
      return getContext.call(this, kind, ...args);
    };
    for (const method of ["drawElements", "drawArrays"]) {
      const original = WebGL2RenderingContext.prototype[method];
      WebGL2RenderingContext.prototype[method] = function (...args) {
        window.gpu.draws++;
        window.gpu.frameDraws++;
        return original.apply(this, args);
      };
    }
    const clear = WebGL2RenderingContext.prototype.clear;
    WebGL2RenderingContext.prototype.clear = function (...args) {
      window.gpu.lastFrameDraws = window.gpu.frameDraws;
      window.gpu.frameDraws = 0;
      return clear.apply(this, args);
    };
  });
}

const sceneReady = page => expect(page.locator(".three-container")).toHaveAttribute("data-scene-status", "ready");

test("navigation and profile interactions do not crash React", async ({page}) => {
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => {
    if (message.type() === "error" && /Warning:|React|Error/.test(message.text())) errors.push(message.text());
  });
  await page.goto("/");
  await page.getByRole("button", {name: "Minimize profile card"}).click();
  await expect(page.locator(".profile-expanded")).toHaveAttribute("inert", "");
  await page.locator(".nav-item").filter({hasText: "/about"}).click();
  await expect(page.locator(".about-section-container")).toBeVisible();
  await page.locator(".nav-item").filter({hasText: "/home"}).click();
  await expect(page.locator("canvas")).toBeVisible();
  await page.goBack();
  await expect(page.locator(".about-section-container")).toBeVisible();
  expect(errors).toEqual([]);
});

test("planet changes reuse the renderer, preserve effects and close with Escape", async ({page}) => {
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await monitorGPU(page);
  await page.goto("/");
  await sceneReady(page);
  const contexts = await page.evaluate(() => window.gpu.contexts);
  await expect.poll(() => page.evaluate(() => window.gpu.lastFrameDraws)).toBeGreaterThan(0);
  const originalDraws = await page.evaluate(() => window.gpu.lastFrameDraws);
  await page.getByRole("button", {name: "Planets", exact: true}).click();
  const sun = page.getByRole("group", {name: "Space effects"}).getByRole("button").nth(1);
  await sun.click();
  for (const name of ["saturn", "neptune", "uranus", "mars", "pluto", "jupiter"]) {
    await page.getByRole("button", {name: `Select ${name} planetary system`}).click();
    await sceneReady(page);
    await expect(page.getByRole("button", {name: `Select ${name} planetary system`})).toHaveAttribute("aria-pressed", "true");
  }
  await expect(sun).toHaveAttribute("aria-pressed", "true");
  // The effect must still contribute to the rendered scene, not just its toggle.
  await expect.poll(() => page.evaluate(() => window.gpu.lastFrameDraws)).toBeGreaterThan(originalDraws);
  expect(await page.evaluate(() => window.gpu.contexts)).toBe(contexts);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("region", {name: "Planet selector"})).toHaveCount(0);
  await expect(page.getByRole("button", {name: "Planets", exact: true})).toBeFocused();
  expect(errors).toEqual([]);
});

test("lost WebGL context can be retried", async ({page}) => {
  await page.goto("/");
  await sceneReady(page);
  await page.locator("canvas").evaluate(canvas => canvas.getContext("webgl2").getExtension("WEBGL_lose_context").loseContext());
  await expect(page.locator(".three-container")).toHaveAttribute("data-scene-status", "unavailable");
  await page.getByRole("button", {name: "Retry 3D"}).click();
  await sceneReady(page);
});

test("renderer pauses outside the hero and with reduced motion", async ({page}) => {
  await monitorGPU(page);
  await page.goto("/");
  await sceneReady(page);
  await page.evaluate(() => window.scrollTo({top: 1500, behavior: "instant"}));
  await page.waitForTimeout(300);
  const paused = await page.evaluate(() => window.gpu.draws);
  await page.waitForTimeout(250);
  expect(await page.evaluate(() => window.gpu.draws)).toBe(paused);
  await page.emulateMedia({reducedMotion: "reduce"});
  await page.evaluate(() => window.scrollTo({top: 0, behavior: "instant"}));
  await page.waitForTimeout(300);
  const still = await page.evaluate(() => window.gpu.draws);
  await page.waitForTimeout(250);
  expect(await page.evaluate(() => window.gpu.draws)).toBe(still);
  await page.emulateMedia({reducedMotion: "no-preference"});
  await expect.poll(() => page.evaluate(() => window.gpu.draws)).toBeGreaterThan(still);
});

test("mobile navigation and full selector fit the viewport", async ({page}) => {
  await page.setViewportSize({width: 390, height: 844});
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/");
  await sceneReady(page);
  await expect(page.locator("#mobile-navigation")).toHaveAttribute("inert", "");
  await page.getByRole("button", {name: "Open navigation menu"}).click();
  await page.getByRole("link", {name: /about/}).click();
  await expect(page.locator(".about-section-container")).toBeVisible();
  await page.getByRole("button", {name: "Open navigation menu"}).click();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", {name: "Open navigation menu"})).toBeFocused();
  await page.goBack();
  await sceneReady(page);
  await page.getByRole("button", {name: "Full", exact: true}).click();
  await sceneReady(page);
  await page.getByRole("button", {name: "Planets", exact: true}).click();
  const box = await page.locator("#planet-selector").boundingBox();
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual(390);
  await page.getByRole("button", {name: "Select saturn planetary system"}).click();
  await sceneReady(page);
  await page.getByRole("button", {name: "Close planet selector", exact: true}).click();
  await page.getByRole("button", {name: "Load Less", exact: true}).click();
  await sceneReady(page);
  expect(errors).toEqual([]);
});

test("scene controls guide has its own header layout", async ({page}) => {
  await page.goto("/");
  await page.getByRole("button", {name: "Open scene controls guide"}).click();
  await expect(page.getByRole("dialog", {name: "Scene controls"})).toBeVisible();
  await expect(page.locator(".map-controls-header")).not.toHaveCSS("position", "fixed");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("unavailable WebGL does not break the portfolio", async ({page}) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (kind, ...args) {
      return kind === "webgl2" ? null : original.call(this, kind, ...args);
    };
  });
  await page.goto("/");
  await expect(page.getByText("3D is unavailable.", {exact: false})).toBeVisible();
  await page.getByRole("link", {name: "/about", exact: true}).click();
  await expect(page.locator(".about-section-container")).toBeVisible();
});

test("failed textures stop loading and can be retried", async ({page}) => {
  await page.route("**/gas.png", route => route.abort());
  await page.goto("/");
  await expect(page.locator(".three-container")).toHaveAttribute("data-scene-status", "texture-error");
  await page.unroute("**/gas.png");
  await page.getByRole("button", {name: "Retry 3D"}).click();
  await sceneReady(page);
});
