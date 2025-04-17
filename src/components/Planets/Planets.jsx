import { useEffect, useRef, useState } from "react";
import { getMoonData } from "../../utils/constants";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";
import "./planets.css";

export const Planets = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [currentPlanetarySystem, setCurrentPlanetarySystem] = useState({texture: "/gas.png", system: "jupiter"});

  useEffect(() => {
    if (!canvasRef.current) return;
    
    let animationFrameId;
    const scene = new THREE.Scene();
    
    // STARS
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({color: 0xffffff, size: 0.1});
    
    const starVertices = [];
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }
    
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // PLANET (getting config from constant) 
    const planetGeometry = new THREE.SphereGeometry(2.54, 74, 74);
    const textureLoader = new THREE.TextureLoader();
    const planetTexture = textureLoader.load(currentPlanetarySystem.texture);
    
    const planetMaterial = new THREE.MeshStandardMaterial({map: planetTexture, roughness: 0.54, metalness: 0.154});

    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);

    // MOON (getting config from constant)
    let moon;
    const moonConfig = getMoonData(currentPlanetarySystem.system);

    const moonGeometry = new THREE.SphereGeometry(moonConfig.geometrySize, 32, 32);
    const moonTexture = textureLoader.load(moonConfig.texturePath);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });

    moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(...moonConfig.initialPosition);

    scene.add(moon);

    // LIGHTS (ambient for the planet and directional for the scene)
    const ambientLight = new THREE.AmbientLight(0x404040, 0.94);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // SIZES
    const container = containerRef.current;
    const sizes = {width: container.clientWidth, height: container.clientHeight};
    
    // CAMERA
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000);
    camera.position.z = 8;
    scene.add(camera);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({canvas: canvasRef.current, alpha: true, antialias: true});
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor("#000000", 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    const clock = new THREE.Clock();

    // ANIMATION function, using requestAnimationFrame for smooth animation
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      planet.rotation.y = elapsedTime * 0.1;
      
      stars.rotation.y = elapsedTime * 0.02;
      stars.rotation.x = elapsedTime * 0.01;

      moon.position.x = Math.cos(elapsedTime * moonConfig.orbitSpeed * moonConfig.orbitDirection) * moonConfig.orbitRadius;
      moon.position.z = Math.sin(elapsedTime * moonConfig.orbitSpeed * moonConfig.orbitDirection) * moonConfig.orbitRadius;

      controls.update();
      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    const timeline = gsap.timeline({ defaults: { duration: 1 } });
    timeline.fromTo(planet.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });

    if (moon) timeline.fromTo(moon.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 }, "-=0.5");

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      // Actualizar tamaños basados en el contenedor
      sizes.width = containerRef.current.clientWidth;
      sizes.height = containerRef.current.clientHeight;
      // Actualizar cámara
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      // Actualizar renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [currentPlanetarySystem]);

  const handleTextureChange = (texture, system) => setCurrentPlanetarySystem({texture, system});

  return (
    <div className="three-container" ref={containerRef}>
      <canvas ref={canvasRef} className="webgl" />

      <div className="texture-selector">
        <button onClick={() => handleTextureChange("/gas.png", "jupiter")} className={currentPlanetarySystem.system === "jupiter" ? "active" : ""}>
          <img src="/gas.png" alt="Juno" className="texture-thumb" />
          <span>Júpiter + Europa</span>
        </button>

        <button onClick={() => handleTextureChange("/saturn.webp", "saturn")} className={currentPlanetarySystem.system === "saturn" ? "active" : ""}>
          <img src="/saturn.webp" alt="Saturn" className="texture-thumb" />
          <span>Saturno + Titán</span>
        </button>

        <button onClick={() => handleTextureChange("/neptune.webp", "neptune")} className={currentPlanetarySystem.system === "neptune" ? "active" : ""}>
          <img src="/neptune.webp" alt="Neptune" className="texture-thumb" />
          <span>Neptune + Triton</span>
        </button>

        <button onClick={() => handleTextureChange("/uranus.webp", "uranus")} className={currentPlanetarySystem.system === "uranus" ? "active" : ""}>
          <img src="/uranus.webp" alt="Uranus" className="texture-thumb" />
          <span>Uranus + Umbriel</span>
        </button>

        <button onClick={() => handleTextureChange("/earth.webp", "earth")} className={currentPlanetarySystem.system === "earth" ? "active" : ""}>
          <img src="/earth.webp" alt="Earth" className="texture-thumb" />
          <span>Earth + Moon</span>
        </button>
      </div>
      
    </div>
  );
};