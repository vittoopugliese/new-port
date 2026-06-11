import { useCallback, useEffect, useRef, useState } from "react";
import { getPlanetData, planets } from "../../utils/constants";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";
import "./planets.css";
import PlanetButton from "./PlanetButton";
import EffectsPanel from "./EffectsPanel";
import { LoadingSpinner } from "./../Shared/LoadingSpinner";
import { EFFECT_CREATORS, setupExtraMoons, createPlanetRings } from "./spaceEffects";

const INITIAL_EFFECTS = {
  meteors: false,
  blackHole: false,
  neutronStar: false,
  distantStar: false,
  ship: false,
  galaxy: false,
};

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
    if (!canvasRef.current) return;

    let animationFrameId;
    let extraMoonsApi = null;
    const config = getPlanetData(currentPlanetarySystem.system);
    const scene = new THREE.Scene();

    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const starVertices = [];
    for (let i = 0; i < 5000; i++) {
      starVertices.push(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
      );
    }
    starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const loadingManager = new THREE.LoadingManager();
    loadingManager.onLoad = () => setIsLoading(false);

    const planetGeometry = new THREE.SphereGeometry(config.geometrySize, 74, 74);
    const textureLoader = new THREE.TextureLoader(loadingManager);
    const planetTexture = textureLoader.load(currentPlanetarySystem.texture);
    const planetMaterial = new THREE.MeshStandardMaterial({
      map: planetTexture,
      roughness: 0.54,
      metalness: 0.154,
    });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);

    let moon = null;
    if (config.moonTexturePath) {
      const moonGeometry = new THREE.SphereGeometry(config.moonGeometrySize, 32, 32);
      const moonTexture = textureLoader.load(config.moonTexturePath);
      const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
      moon = new THREE.Mesh(moonGeometry, moonMaterial);
      moon.position.set(...config.initialPosition);
      scene.add(moon);
    }

    let rings = null;
    if (config.ringConfig) {
      rings = createPlanetRings(config);
      scene.add(rings.mesh);
    }

    const ambientLight = new THREE.AmbientLight(0x404040, 0.94);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    const container = containerRef.current;
    const sizes = { width: container.clientWidth, height: container.clientHeight };

    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000);
    camera.position.z = 8;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor("#000000", 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = true;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.1;

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

    sceneApiRef.current = { scene, camera, renderer, clock, planetConfig: config, textureLoader };
    effectInstancesRef.current = {};
    syncEffects();

    const animate = () => {
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

    animate();

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
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrameId);
      if (rings) {
        scene.remove(rings.mesh);
        rings.dispose();
      }
      extraMoonsApi?.dispose();
      disposeAllEffects();
      renderer.dispose();
      sceneApiRef.current = null;
    };
  }, [currentPlanetarySystem, syncEffects, disposeAllEffects]);

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

      <canvas ref={canvasRef} className={`webgl ${isLoading ? "canvas-loading" : ""}`} />

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
              moonName={planet.moonName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
