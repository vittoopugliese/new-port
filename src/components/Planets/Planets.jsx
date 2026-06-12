import { useCallback, useEffect, useRef, useState } from "react";
import { getPlanetData, planets, PLANET_LIGHT_POSITION } from "../../utils/constants";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { gsap } from "gsap";
import "./planets.css";
import PlanetButton from "./PlanetButton";
import EffectsPanel from "./EffectsPanel";
import { LoadingSpinner } from "./../Shared/LoadingSpinner";
import { EFFECT_CREATORS, setupExtraMoons, createPlanetRings } from "./spaceEffects";

const INITIAL_EFFECTS = {
  meteors: false,
  sun: false,
  blackHole: false,
  neutronStar: false,
  distantStar: false,
  galaxy: false,
};

// Pre-upgrade baseline was ambient 0.94 / directional 1.0 — +20% brightness, soft contrast.
const AMBIENT_LIGHT_INTENSITY = 0.94 * 1.2;
const DIRECTIONAL_LIGHT_INTENSITY = 1 * 1.2;

function disposeMaterial(material) {
  if (!material) return;
  if (Array.isArray(material)) {
    material.forEach(disposeMaterial);
    return;
  }
  material.map?.dispose();
  material.dispose();
}

function disposeMesh(scene, mesh) {
  if (!mesh) return;
  scene.remove(mesh);
  mesh.geometry?.dispose();
  disposeMaterial(mesh.material);
}

export const Planets = ({ selectorOpen = false, closeSelector }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const sceneApiRef = useRef(null);
  const effectInstancesRef = useRef({});
  const activeEffectsRef = useRef(INITIAL_EFFECTS);
  const [currentPlanetarySystem, setCurrentPlanetarySystem] = useState({
    texture: "/gas.png",
    system: "jupiter",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [activeEffects, setActiveEffects] = useState(INITIAL_EFFECTS);

  activeEffectsRef.current = activeEffects;

  const disposeAllEffects = useCallback(() => {
    const sceneApi = sceneApiRef.current;
    if (!sceneApi) return;

    Object.entries(effectInstancesRef.current).forEach(([, effect]) => {
      sceneApi.scene.remove(effect.object);
      effect.dispose();
    });
    effectInstancesRef.current = {};
  }, []);

  const syncEffects = useCallback(() => {
    const sceneApi = sceneApiRef.current;
    if (!sceneApi) return;

    Object.keys(EFFECT_CREATORS).forEach((key) => {
      const shouldBeActive = activeEffectsRef.current[key];
      const current = effectInstancesRef.current[key];

      if (shouldBeActive && !current) {
        const effect = EFFECT_CREATORS[key](sceneApi);
        effectInstancesRef.current[key] = effect;
        sceneApi.scene.add(effect.object);
      } else if (!shouldBeActive && current) {
        sceneApi.scene.remove(current.object);
        current.dispose();
        delete effectInstancesRef.current[key];
      }
    });
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    let animationFrameId = null;
    let alive = true;
    let extraMoonsApi = null;
    const config = getPlanetData(currentPlanetarySystem.system);
    const scene = new THREE.Scene();

    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      depthWrite: false,
    });
    // Keep an empty sphere around the origin so no star can ever sit between
    // the camera and the planet (which made the planet look transparent).
    const STAR_EXCLUSION_RADIUS = 150;
    const starVertices = [];
    while (starVertices.length < 5000 * 3) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      if (Math.sqrt(x * x + y * y + z * z) < STAR_EXCLUSION_RADIUS) continue;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const loadingManager = new THREE.LoadingManager();
    loadingManager.onLoad = () => {
      if (alive) setIsLoading(false);
    };
    loadingManager.onError = () => {
      if (alive) setIsLoading(false);
    };

    const planetGeometry = new THREE.SphereGeometry(config.geometrySize, 74, 74);
    const textureLoader = new THREE.TextureLoader(loadingManager);
    const planetTexture = textureLoader.load(currentPlanetarySystem.texture);
    const planetMaterial = new THREE.MeshStandardMaterial({
      map: planetTexture,
      roughness: 1,
      metalness: 0,
      transparent: false,
    });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);

    let moon = null;
    if (config.moonTexturePath) {
      const moonGeometry = new THREE.SphereGeometry(config.moonGeometrySize, 32, 32);
      const moonTexture = textureLoader.load(config.moonTexturePath);
      const moonMaterial = new THREE.MeshStandardMaterial({
        map: moonTexture,
        roughness: 1,
        metalness: 0,
        transparent: false,
      });
      moon = new THREE.Mesh(moonGeometry, moonMaterial);
      moon.position.set(...config.initialPosition);
      scene.add(moon);
    }

    let rings = null;
    if (config.ringConfig) {
      rings = createPlanetRings(config);
      scene.add(rings.mesh);
    }

    const ambientLight = new THREE.AmbientLight(0x505050, AMBIENT_LIGHT_INTENSITY);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, DIRECTIONAL_LIGHT_INTENSITY);
    directionalLight.position.set(
      PLANET_LIGHT_POSITION.x,
      PLANET_LIGHT_POSITION.y,
      PLANET_LIGHT_POSITION.z,
    );
    scene.add(directionalLight);

    const lightDirection = new THREE.Vector3(
      PLANET_LIGHT_POSITION.x,
      PLANET_LIGHT_POSITION.y,
      PLANET_LIGHT_POSITION.z,
    ).normalize();

    const container = containerRef.current;
    const sizes = { width: container.clientWidth, height: container.clientHeight };

    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor("#000000", 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.NoToneMapping;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = true;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.1;

    const handleSceneMove = () => {
      window.dispatchEvent(new CustomEvent("portfolio-scene-move"));
    };
    controls.addEventListener("start", handleSceneMove);

    const clock = new THREE.Clock();

    const timeline = gsap.timeline({ defaults: { duration: 1 } });
    timeline.fromTo(planet.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
    if (rings) {
      timeline.fromTo(rings.mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1, duration: 1.2 }, "-=0.7");
    }
    if (moon) {
      timeline.fromTo(moon.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 }, "-=0.5");
    }

    extraMoonsApi = setupExtraMoons(config, textureLoader, scene, timeline);

    sceneApiRef.current = {
      scene,
      camera,
      renderer,
      clock,
      planetConfig: config,
      textureLoader,
      lightDirection,
    };
    effectInstancesRef.current = {};

    const animate = () => {
      if (!alive) return;

      const elapsedTime = clock.getElapsedTime();
      const delta = clock.getDelta();

      planet.rotation.y = elapsedTime * 0.1;
      stars.rotation.y = elapsedTime * 0.02;
      stars.rotation.x = elapsedTime * 0.01;

      if (moon) {
        moon.position.x =
          Math.cos(elapsedTime * config.orbitSpeed * config.orbitDirection) * config.orbitRadius;
        moon.position.z =
          Math.sin(elapsedTime * config.orbitSpeed * config.orbitDirection) * config.orbitRadius;
      }

      extraMoonsApi?.update(elapsedTime);

      Object.values(effectInstancesRef.current).forEach((effect) => {
        effect.update(elapsedTime, delta);
      });

      controls.update();
      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (!alive || animationFrameId != null) return;
      animationFrameId = window.requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (animationFrameId != null) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    startAnimation();
    document.addEventListener("visibilitychange", handleVisibility);

    const handleResize = () => {
      if (!containerRef.current) return;
      sizes.width = containerRef.current.clientWidth;
      sizes.height = containerRef.current.clientHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      alive = false;
      stopAnimation();
      timeline.kill();
      controls.removeEventListener("start", handleSceneMove);
      controls.dispose();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", handleResize);

      if (rings) {
        scene.remove(rings.mesh);
        rings.dispose();
      }
      extraMoonsApi?.dispose();
      disposeAllEffects();

      disposeMesh(scene, planet);
      disposeMesh(scene, moon);
      scene.remove(stars);
      starGeometry.dispose();
      starMaterial.dispose();

      scene.remove(ambientLight);
      scene.remove(directionalLight);

      renderer.dispose();
      sceneApiRef.current = null;
    };
  }, [currentPlanetarySystem, disposeAllEffects]);

  useEffect(() => {
    syncEffects();
  }, [activeEffects, syncEffects]);

  const handleTextureChange = (texture, system) => {
    if (currentPlanetarySystem.system === system) return;
    setIsLoading(true);
    setCurrentPlanetarySystem({ texture, system });
    closeSelector?.();
  };

  const handleEffectToggle = (effectId) => {
    setActiveEffects((prev) => ({ ...prev, [effectId]: !prev[effectId] }));
  };

  return (
    <div className="three-container" ref={containerRef}>
      {isLoading && (
        <div className="planet-loader">
          <LoadingSpinner size={4} />
        </div>
      )}

      <canvas
        ref={canvasRef}
        className={`webgl ${isLoading ? "canvas-loading" : ""}`}
        aria-hidden="true"
      />

      <div className="planet-panels">
        <EffectsPanel
          open={selectorOpen}
          activeEffects={activeEffects}
          onToggle={handleEffectToggle}
        />

        <div className={`texture-selector ${selectorOpen ? "open" : ""}`}>
          <div className="glass-distortion" />
          <div className="glass-tint" />
          <div className="glass-shine" />
          {planets.map((planet) => (
            <PlanetButton
              key={planet.system}
              texture={planet.texture}
              system={planet.system}
              onClick={() => handleTextureChange(planet.texture, planet.system)}
              isActive={currentPlanetarySystem.system === planet.system}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
