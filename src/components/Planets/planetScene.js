import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import {gsap} from "gsap";
import {getPlanetData, PLANET_AMBIENT_LIGHT_COLOR, PLANET_AMBIENT_LIGHT_INTENSITY, PLANET_DIRECTIONAL_LIGHT_INTENSITY, PLANET_LIGHT_POSITION} from "../../utils/constants";
import {createPlanetSurfaceMaterial} from "./planetMaterial";
import {EFFECT_CREATORS, createPlanetRings, setupExtraMoons} from "./spaceEffects";

function disposeTree(root) {
  const resources = new Set();
  root.traverse(object => {
    if (object.geometry) resources.add(object.geometry);
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    materials.filter(Boolean).forEach(material => {
      resources.add(material);
      if (material.map) resources.add(material.map);
    });
  });
  resources.forEach(resource => resource.dispose());
  root.removeFromParent();
}

// The scene owns GPU resources and scheduling. React only selects content.
export function createPlanetScene({canvas, container, compact, onStatus}) {
  const mobile = window.matchMedia("(max-width: 888px)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const renderer = new THREE.WebGLRenderer({canvas, alpha: false, antialias: !mobile, powerPreference: "low-power"});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1 : 1.5));
  renderer.setClearColor(compact ? "#171717" : "#000000", 1);
  renderer.toneMapping = THREE.NoToneMapping;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2500);
  camera.position.z = 8;
  const controls = new OrbitControls(camera, canvas);
  controls.enablePan = !compact;
  controls.enableZoom = !compact;
  controls.minDistance = 3.5;
  controls.maxDistance = 80;
  controls.autoRotateSpeed = 0.1;
  if (compact) canvas.style.touchAction = "pan-y";
  scene.add(new THREE.AmbientLight(PLANET_AMBIENT_LIGHT_COLOR, PLANET_AMBIENT_LIGHT_INTENSITY));
  const light = new THREE.DirectionalLight(0xffffff, PLANET_DIRECTIONAL_LIGHT_INTENSITY);
  const lightDirection = new THREE.Vector3(PLANET_LIGHT_POSITION.x, PLANET_LIGHT_POSITION.y, PLANET_LIGHT_POSITION.z).normalize();
  light.position.copy(lightDirection).multiplyScalar(20);
  scene.add(light);

  let stars;
  if (!compact) {
    const vertices = [];
    while (vertices.length < (mobile ? 1500 : 3000) * 3) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      if (x * x + y * y + z * z < 150 * 150) continue;
      vertices.push(x, y, z);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    stars = new THREE.Points(geometry, new THREE.PointsMaterial({color: 0xffffff, size: 0.1, depthWrite: false}));
    scene.add(stars);
  }

  let disposed = false;
  let visible = true;
  let contextLost = false;
  let frame = null;
  let previousTime = null;
  let elapsed = 0;
  let system = null;
  const effects = new Map();
  const frameInterval = 1000 / (mobile ? 30 : 60);

  function requestFrame() {
    if (!disposed && !contextLost && visible && !document.hidden && frame === null) frame = requestAnimationFrame(draw);
  }

  function draw(time) {
    frame = null;
    if (disposed || contextLost || !visible || document.hidden) return;
    if (!reducedMotion.matches && previousTime !== null && time - previousTime < frameInterval - 1) {
      requestFrame();
      return;
    }
    const delta = previousTime === null ? 0 : Math.min((time - previousTime) / 1000, 0.05);
    previousTime = time;
    if (!reducedMotion.matches) elapsed += delta;
    if (system) {
      system.planet.rotation.y = elapsed * 0.1;
      const {moon, config} = system;
      if (moon) {
        const angle = elapsed * config.orbitSpeed * config.orbitDirection;
        moon.position.set(Math.cos(angle) * config.orbitRadius, 0, Math.sin(angle) * config.orbitRadius);
      }
      system.extraMoons?.update(elapsed);
    }
    if (stars) {
      stars.rotation.y = elapsed * 0.02;
      stars.rotation.x = elapsed * 0.01;
    }
    effects.forEach(effect => effect.update(elapsed, reducedMotion.matches ? 0 : delta));
    controls.update(delta);
    renderer.render(scene, camera);
    if (!reducedMotion.matches) requestFrame();
  }

  function pause() {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    previousTime = null;
  }

  function updateVisibility() {
    if (visible && !document.hidden) {
      if (!reducedMotion.matches) system?.timeline.resume();
      if (!reducedMotion.matches) effects.forEach(effect => effect.animations.forEach(animation => animation.resume()));
      requestFrame();
    } else {
      pause();
      system?.timeline.pause();
      effects.forEach(effect => effect.animations.forEach(animation => animation.pause()));
    }
  }

  function updateMotion() {
    controls.autoRotate = !reducedMotion.matches;
    controls.enableDamping = !reducedMotion.matches;
    if (reducedMotion.matches) system?.timeline.progress(1).pause();
    if (reducedMotion.matches) effects.forEach(effect => effect.animations.forEach(animation => animation.progress(1).pause()));
    pause();
    requestFrame();
  }

  function resize() {
    const width = Math.max(1, container.clientWidth);
    const height = Math.max(1, container.clientHeight);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    requestFrame();
  }

  function disposeSystem() {
    if (!system) return;
    system.disposed = true;
    system.timeline.kill();
    disposeTree(system.group);
    system = null;
  }

  function setPlanet({texture, system: name}) {
    if (disposed || system?.name === name) return;
    disposeSystem();
    onStatus("loading");
    const config = getPlanetData(name);
    const group = new THREE.Group();
    const timeline = gsap.timeline();
    const next = {name, group, timeline, config, disposed: false};
    system = next;
    scene.add(group);
    let failed = false;
    const manager = new THREE.LoadingManager();
    manager.onError = () => { failed = true; };
    manager.onLoad = () => {
      if (!disposed && system === next && !contextLost) {
        onStatus(failed ? "texture-error" : "ready");
        requestFrame();
      }
    };
    const loader = new THREE.TextureLoader(manager);
    // Late completions must not resurrect resources after selection or unmount.
    const textureLoader = {load(path) {
      const map = loader.load(path, loaded => {
        if (disposed || next.disposed) loaded.dispose();
      });
      map.colorSpace = THREE.SRGBColorSpace;
      return map;
    }};
    const segments = mobile ? 32 : 48;
    next.planet = new THREE.Mesh(new THREE.SphereGeometry(config.geometrySize, segments, segments), createPlanetSurfaceMaterial(textureLoader.load(texture)));
    group.add(next.planet);
    controls.minDistance = config.geometrySize * 1.35;
    const offset = camera.position.clone().sub(controls.target);
    if (offset.length() < controls.minDistance) camera.position.copy(controls.target).add(offset.setLength(controls.minDistance));
    if (!compact) {
      if (config.moonTexturePath) {
        next.moon = new THREE.Mesh(new THREE.SphereGeometry(config.moonGeometrySize, 20, 20), createPlanetSurfaceMaterial(textureLoader.load(config.moonTexturePath)));
        next.moon.position.set(...config.initialPosition);
        group.add(next.moon);
      }
      if (config.ringConfig) group.add(createPlanetRings(config).mesh);
      next.extraMoons = setupExtraMoons(config, textureLoader, group, timeline);
    }
    if (reducedMotion.matches) timeline.progress(1).pause();
    else timeline.fromTo(next.planet.scale, {x: 0.85, y: 0.85, z: 0.85}, {x: 1, y: 1, z: 1, duration: 0.5}, 0);
    updateVisibility();
    requestFrame();
  }

  function setEffects(active) {
    if (disposed || compact) return;
    Object.entries(EFFECT_CREATORS).forEach(([id, create]) => {
      if (active[id] && !effects.has(id)) {
        let effect;
        const context = gsap.context(() => { effect = create({scene, camera, renderer, lightDirection}); });
        effect.animations = context.getTweens();
        if (reducedMotion.matches) effect.animations.forEach(animation => animation.progress(1).pause());
        effects.set(id, effect);
        scene.add(effect.object);
      } else if (!active[id] && effects.has(id)) {
        const effect = effects.get(id);
        scene.remove(effect.object);
        effect.dispose();
        effects.delete(id);
      }
    });
    updateVisibility();
    requestFrame();
  }

  const onMove = () => window.dispatchEvent(new CustomEvent("portfolio-scene-move"));
  const onContextLost = event => {
    event.preventDefault();
    contextLost = true;
    pause();
    system?.timeline.pause();
    onStatus("unavailable");
  };
  controls.addEventListener("start", onMove);
  controls.addEventListener("change", requestFrame);
  canvas.addEventListener("webglcontextlost", onContextLost);
  document.addEventListener("visibilitychange", updateVisibility);
  reducedMotion.addEventListener("change", updateMotion);
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    updateVisibility();
  });
  visibilityObserver.observe(container);
  updateMotion();
  resize();

  return {
    setPlanet,
    setEffects,
    dispose() {
      if (disposed) return;
      disposed = true;
      pause();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
      reducedMotion.removeEventListener("change", updateMotion);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      controls.removeEventListener("start", onMove);
      controls.removeEventListener("change", requestFrame);
      controls.dispose();
      disposeSystem();
      effects.forEach(effect => { scene.remove(effect.object); effect.dispose(); });
      effects.clear();
      disposeTree(scene);
      renderer.dispose();
    },
  };
}
