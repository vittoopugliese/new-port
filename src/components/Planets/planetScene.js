import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import {gsap} from "gsap";
import {getPlanetData, PLANET_AMBIENT_LIGHT_COLOR, PLANET_AMBIENT_LIGHT_INTENSITY, PLANET_DIRECTIONAL_LIGHT_INTENSITY, PLANET_LIGHT_POSITION} from "../../utils/constants";
import {createPlanetSurfaceMaterial} from "./planetMaterial";
import {EFFECT_CREATORS, createPlanetRings, setupExtraMoons} from "./spaceEffects";
import {createStarfield, createAtmosphere, createOrbit} from "./observatoryEffects";
import {destinations} from "./observatoryData";

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
export function createPlanetScene({canvas, container, compact, onStatus, onFocus, markers}) {
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

  const stars = compact ? null : createStarfield(mobile);
  if (stars) scene.add(stars.object);

  let disposed = false;
  let visible = true;
  let contextLost = false;
  let frame = null;
  let previousTime = null;
  let elapsed = 0;
  let system = null;
  let paused = false;
  let showOrbits = false;
  let focused = null;
  let flight = null;
  const projected = new THREE.Vector3();
  const followDelta = new THREE.Vector3();
  const moonPosition = new THREE.Vector3();
  const markerRay = new THREE.Ray();
  const planetBounds = new THREE.Sphere();
  const occlusionHit = new THREE.Vector3();
  let viewportWidth = 1;
  let viewportHeight = 1;
  const effects = new Map();
  const frameInterval = 1000 / (mobile || compact ? 30 : 60);
  const moving = () => !paused && !reducedMotion.matches;

  function updateMarkers() {
    if (!system || !markers?.size) return;
    // Matrices must include this frame's orbit and entrance animation.
    system.group.updateMatrixWorld(true);
    planetBounds.copy(system.planet.geometry.boundingSphere).applyMatrix4(system.planet.matrixWorld);
    markerRay.origin.copy(camera.position);
    for (const moon of system.moons) {
      const element = markers.get(moon.name);
      if (!element) continue;
      moonPosition.setFromMatrixPosition(moon.mesh.matrixWorld);
      projected.copy(moonPosition).project(camera);
      let visible = projected.z > -1 && projected.z < 1 && Math.abs(projected.x) < 0.92 && Math.abs(projected.y) < 0.8;
      if (visible) {
        // A sphere intersection replaces a scan through every surface triangle.
        markerRay.direction.copy(moonPosition).sub(camera.position).normalize();
        const blocked = markerRay.intersectSphere(planetBounds, occlusionHit);
        visible = !blocked || camera.position.distanceToSquared(occlusionHit) > camera.position.distanceToSquared(moonPosition);
      }
      const visibility = visible ? "visible" : "hidden";
      if (element.style.visibility !== visibility) element.style.visibility = visibility;
      if (visible) element.style.transform = `translate(${(projected.x + 1) * viewportWidth / 2}px, ${(1 - projected.y) * viewportHeight / 2}px)`;
    }
  }

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
    if (moving()) elapsed += delta;
    if (system) {
      system.planet.rotation.y = elapsed * 0.1;
      const {moon, config} = system;
      if (moon) {
        const angle = elapsed * config.orbitSpeed * config.orbitDirection;
        moon.position.set(Math.cos(angle) * config.orbitRadius, 0, Math.sin(angle) * config.orbitRadius);
      }
      system.extraMoons?.update(elapsed);
      if (focused && !flight?.isActive()) {
        followDelta.copy(focused.mesh.position).sub(controls.target);
        camera.position.add(followDelta);
        controls.target.copy(focused.mesh.position);
      }
    }
    stars?.update(elapsed);
    effects.forEach(effect => effect.update(elapsed, moving() ? delta : 0));
    controls.update(delta);
    camera.updateMatrixWorld();
    updateMarkers();
    renderer.render(scene, camera);
    if (moving()) requestFrame();
  }

  function pause() {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    previousTime = null;
  }

  function updateVisibility() {
    if (visible && !document.hidden && !contextLost) {
      if (moving()) system?.timeline.resume();
      if (moving()) effects.forEach(effect => effect.animations.forEach(animation => animation.resume()));
      flight?.resume();
      requestFrame();
    } else {
      pause();
      system?.timeline.pause();
      effects.forEach(effect => effect.animations.forEach(animation => animation.pause()));
      flight?.pause();
    }
  }

  function updateMotion() {
    controls.autoRotate = moving() && !focused && !flight?.isActive();
    controls.enableDamping = moving();
    if (!moving()) system?.timeline.progress(1).pause();
    if (!moving()) effects.forEach(effect => effect.animations.forEach(animation => animation.progress(1).pause()));
    if (reducedMotion.matches) flight?.progress(1);
    pause();
    updateVisibility();
  }

  function resize() {
    viewportWidth = Math.max(1, container.clientWidth);
    viewportHeight = Math.max(1, container.clientHeight);
    camera.aspect = viewportWidth / viewportHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(viewportWidth, viewportHeight, false);
    requestFrame();
  }

  function disposeSystem() {
    if (!system) return;
    system.disposed = true;
    system.timeline.kill();
    system.extraMoons?.dispose();
    disposeTree(system.group);
    system = null;
  }

  function flyTo(target, position) {
    flight?.kill();
    controls.autoRotate = false;
    const startPosition = camera.position.clone();
    const startTarget = controls.target.clone();
    const offset = position.clone().sub(target);
    const endpoint = new THREE.Vector3();
    const progress = {value: 0};
    flight = gsap.timeline({onUpdate: () => {
      endpoint.copy(target).add(offset);
      camera.position.lerpVectors(startPosition, endpoint, progress.value);
      controls.target.lerpVectors(startTarget, target, progress.value);
      requestFrame();
    }, onComplete: () => { controls.autoRotate = moving() && !focused; requestFrame(); }});
    const duration = reducedMotion.matches ? 0 : 1.6;
    flight.to(progress, {value: 1, duration, ease: "power3.inOut"});
    updateVisibility();
  }

  function resetView() {
    if (!system || compact) return;
    focused = null;
    onFocus?.(null);
    controls.minDistance = system.config.geometrySize * 1.35;
    const radius = system.config.geometrySize;
    const distance = Math.max(radius * (system.config.ringConfig ? 7 : 5.4), 5) * (mobile ? 1.25 : 1);
    flyTo(new THREE.Vector3(), new THREE.Vector3(distance * 0.18, distance * 0.25, distance));
  }

  function focusMoon(name) {
    const moon = system?.moons.find(item => item.name === name);
    if (!moon || disposed) return;
    focused = moon;
    onFocus?.(name);
    controls.minDistance = moon.size * 2;
    const direction = moon.mesh.position.clone().normalize();
    if (direction.lengthSq() === 0) direction.set(0, 0, 1);
    direction.y += 0.6;
    direction.normalize().multiplyScalar(Math.max(moon.size * 9, 0.6));
    flyTo(moon.mesh.position, moon.mesh.position.clone().add(direction));
  }

  function setPlanet({texture, system: name, moonName}) {
    if (disposed || system?.name === name) return;
    flight?.kill();
    focused = null;
    onFocus?.(null);
    disposeSystem();
    onStatus("loading");
    const config = getPlanetData(name);
    const group = new THREE.Group();
    const timeline = gsap.timeline();
    const next = {name, group, timeline, config, disposed: false, moons: [], orbits: new THREE.Group()};
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
    next.planet.geometry.computeBoundingSphere();
    group.add(next.planet);
    controls.minDistance = config.geometrySize * 1.35;
    const offset = camera.position.clone().sub(controls.target);
    if (offset.length() < controls.minDistance) camera.position.copy(controls.target).add(offset.setLength(controls.minDistance));
    if (!compact) {
      if (config.moonTexturePath) {
        next.moon = new THREE.Mesh(new THREE.SphereGeometry(config.moonGeometrySize, 20, 20), createPlanetSurfaceMaterial(textureLoader.load(config.moonTexturePath)));
        next.moon.position.set(...config.initialPosition);
        group.add(next.moon);
        next.moons.push({name: moonName, mesh: next.moon, size: config.moonGeometrySize});
      }
      if (config.ringConfig) group.add(createPlanetRings(config).mesh);
      next.extraMoons = setupExtraMoons(config, textureLoader, group, timeline);
      next.moons.push(...next.extraMoons.moonMeshes);
      const color = destinations[name].color;
      if (name !== "pluto") group.add(createAtmosphere(config.geometrySize, color));
      if (config.moonTexturePath) next.orbits.add(createOrbit(config.orbitRadius, color));
      config.extraMoons?.forEach(moon => next.orbits.add(createOrbit(moon.orbitRadius, color)));
      next.orbits.visible = showOrbits;
      group.add(next.orbits);
      resetView();
    }
    if (!moving()) timeline.progress(1).pause();
    else timeline.fromTo(next.planet.scale, {x: 0.85, y: 0.85, z: 0.85}, {x: 1, y: 1, z: 1, duration: 0.5}, 0);
    updateVisibility();
    requestFrame();
  }

  function setEffects(active) {
    if (disposed || compact) return;
    Object.entries(EFFECT_CREATORS).forEach(([id, create]) => {
      if (active[id] && !effects.has(id)) {
        let effect;
        const context = gsap.context(() => { effect = create({scene, camera, renderer, lightDirection, mobile}); });
        effect.animations = context.getTweens();
        if (!moving()) effect.animations.forEach(animation => animation.progress(1).pause());
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

  const onMove = () => {
    flight?.kill();
    controls.autoRotate = moving() && !focused;
    window.dispatchEvent(new CustomEvent("portfolio-scene-move"));
  };
  const onContextLost = event => {
    event.preventDefault();
    contextLost = true;
    pause();
    system?.timeline.pause();
    flight?.pause();
    effects.forEach(effect => effect.animations.forEach(animation => animation.pause()));
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
    focusMoon,
    resetView,
    setPaused(value) { paused = value; updateMotion(); },
    setOrbits(value) { showOrbits = value; if (system) system.orbits.visible = value; requestFrame(); },
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
      flight?.kill();
      disposeSystem();
      if (stars) { scene.remove(stars.object); stars.dispose(); }
      effects.forEach(effect => { scene.remove(effect.object); effect.dispose(); });
      effects.clear();
      disposeTree(scene);
      renderer.dispose();
    },
  };
}
