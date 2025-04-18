import { useEffect, useRef, useState } from "react";
import { getPlanetData, planets } from "../../utils/constants";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";
import "./planets.css";
import PlanetButton from './PlanetButton';
import { useMedia } from './../../hooks/useMedia';

export const Planets = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const { isMobile } = useMedia();
  const [currentPlanetarySystem, setCurrentPlanetarySystem] = useState({texture: "/gas.png", system: "jupiter"});
  const [planetSelectorOpen, setPlanetSelectorOpen] = useState(isMobile);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    let animationFrameId;
    const planetConfig = getPlanetData(currentPlanetarySystem.system);
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
    const planetGeometry = new THREE.SphereGeometry(planetConfig.geometrySize, 74, 74);
    const textureLoader = new THREE.TextureLoader();
    const planetTexture = textureLoader.load(currentPlanetarySystem.texture);
    
    const planetMaterial = new THREE.MeshStandardMaterial({map: planetTexture, roughness: 0.54, metalness: 0.154});

    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);

    // MOON (getting config from constant)
    let moon = null;

    if (planetConfig.moonTexturePath) {
      // not every planet has a moon so we check if it exists
      const moonGeometry = new THREE.SphereGeometry(planetConfig.moonGeometrySize, 32, 32);
      const moonTexture = textureLoader.load(planetConfig.moonTexturePath);
      const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
      // if it does not have moon then the moon var will be null
      // else it will be a mesh with the moon geometry and material
      moon = new THREE.Mesh(moonGeometry, moonMaterial);
      moon.position.set(...planetConfig.initialPosition);
      scene.add(moon);
    }

    // only uranus and saturn has rings

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
    controls.enablePan = true;  // maybe will be into a switch state ...
    controls.enableZoom = true; // maybe will be into a switch state ...
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.1;

    const clock = new THREE.Clock();

    // ANIMATION function, using requestAnimationFrame for smooth animation
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      planet.rotation.y = elapsedTime * 0.1;
      
      stars.rotation.y = elapsedTime * 0.02;
      stars.rotation.x = elapsedTime * 0.01;

      if (moon){
        moon.position.x = Math.cos(elapsedTime * planetConfig.orbitSpeed * planetConfig.orbitDirection) * planetConfig.orbitRadius;
        moon.position.z = Math.sin(elapsedTime * planetConfig.orbitSpeed * planetConfig.orbitDirection) * planetConfig.orbitRadius;
      }

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

  const handleTextureChange = (texture, system) => {
    if (currentPlanetarySystem.system === system) return;
    setCurrentPlanetarySystem({texture, system});
  }

  const togglePlanetSelector = () => {
    setPlanetSelectorOpen(!planetSelectorOpen);
    // const planetSelector = document.querySelector(".texture-selector");
    // if (planetSelector) {
    //   gsap.to(planetSelector, { duration: 0.5, y: planetSelectorOpen ? 0 : -50 });
    // }
  };

  return (
    <div className="three-container" ref={containerRef}>
      <canvas ref={canvasRef} className="webgl" />

      <div className={"texture-selector" + (planetSelectorOpen ? "open" : "")}>
        <img className={"planet-selector-toggler" + (planetSelectorOpen ? "" : " pst-opened")} onClick={togglePlanetSelector}
          src="https://www.svgrepo.com/show/522044/chevron-up-circle.svg"
          width={24} height={24} draggable={false} />
        
        { planets.map((planet) => (
            <PlanetButton key={planet.system} texture={planet.texture} system={planet.system}
              onClick={() => handleTextureChange(planet.texture, planet.system)}
              isActive={currentPlanetarySystem.system === planet.system} moonName={planet.moonName} />
        ))}
      </div>
    </div>
  );
};