import { useEffect, useRef, useState } from "react";
import { getPlanetData, planets, PLANET_LIGHT_POSITION } from "../../utils/constants";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import "./planets.css";
import { LoadingSpinner } from "../Shared/LoadingSpinner";

const PAGE_BACKGROUND = "#171717";
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

export const PlanetsMobile = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    let animationFrameId = null;
    let alive = true;

    const jupiterConfig = getPlanetData("jupiter");
    const initialTexture = planets[0].texture;
    const scene = new THREE.Scene();

    const loadingManager = new THREE.LoadingManager();
    loadingManager.onLoad = () => {
      if (alive) setIsLoading(false);
    };
    loadingManager.onError = () => {
      if (alive) setIsLoading(false);
    };

    const planetGeometry = new THREE.SphereGeometry(jupiterConfig.geometrySize, 64, 64);
    const textureLoader = new THREE.TextureLoader(loadingManager);
    const planetTexture = textureLoader.load(initialTexture);
    const planetMaterial = new THREE.MeshStandardMaterial({
      map: planetTexture,
      roughness: 1,
      metalness: 0,
      transparent: false,
    });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);

    const ambientLight = new THREE.AmbientLight(0x505050, AMBIENT_LIGHT_INTENSITY);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, DIRECTIONAL_LIGHT_INTENSITY);
    directionalLight.position.set(
      PLANET_LIGHT_POSITION.x,
      PLANET_LIGHT_POSITION.y,
      PLANET_LIGHT_POSITION.z,
    );
    scene.add(directionalLight);

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
    renderer.setClearColor(PAGE_BACKGROUND, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.NoToneMapping;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableRotate = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.1;

    const clock = new THREE.Clock();

    const animate = () => {
      if (!alive) return;

      const elapsedTime = clock.getElapsedTime();
      planet.rotation.y = elapsedTime * 0.1;

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
      controls.dispose();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", handleResize);

      disposeMesh(scene, planet);
      scene.remove(ambientLight);
      scene.remove(directionalLight);
      renderer.dispose();
    };
  }, []);

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
    </div>
  );
};
