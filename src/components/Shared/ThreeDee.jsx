import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";

export const ThreeDee = () => {
  const canvasRef = useRef(null);
  const [currentTexture, setCurrentTexture] = useState("/gas.png");
  const [currentSystem, setCurrentSystem] = useState("jupiter");

  useEffect(() => {
    let animationFrameId;

    const scene = new THREE.Scene();

    const planetGeometry = new THREE.SphereGeometry(2.54, 74, 74);
    const textureLoader = new THREE.TextureLoader();
    const planetTexture = textureLoader.load(currentTexture);
    
    const planetMaterial = new THREE.MeshStandardMaterial({
      map: planetTexture,
      roughness: 0.54,
      metalness: 0.154,
    });

    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);

    let moon;

    switch (currentSystem) {
      case "jupiter":{
        const europaGeometry = new THREE.SphereGeometry(0.4, 32, 32);
        const europaTexture = textureLoader.load("/europa.webp");
        const europaMaterial = new THREE.MeshStandardMaterial({ map: europaTexture });
        moon = new THREE.Mesh(europaGeometry, europaMaterial);
        moon.position.set(4, 0, 0);
      }
        break;
      case "saturn":{
        const titanGeometry = new THREE.SphereGeometry(0.5, 32, 32);
        const titanTexture = textureLoader.load("/titan.webp");
        const titanMaterial = new THREE.MeshStandardMaterial({ map: titanTexture });
        moon = new THREE.Mesh(titanGeometry, titanMaterial);
        moon.position.set(5, 0, 0);
      }
        break;
      case "neptune":{
        const tritonGeometry = new THREE.SphereGeometry(0.4, 32, 32);
        const tritonTexture = textureLoader.load("/triton.webp");
        const tritonMaterial = new THREE.MeshStandardMaterial({ map: tritonTexture });
        moon = new THREE.Mesh(tritonGeometry, tritonMaterial);
        moon.position.set(5, 0, 0);
      }
        break;
      case "uranus":{
        const umbrielGeometry = new THREE.SphereGeometry(0.4, 32, 32);
        const umbrielTexture = textureLoader.load("/umbriel.webp");
        const umbrielMaterial = new THREE.MeshStandardMaterial({ map: umbrielTexture });
        moon = new THREE.Mesh(umbrielGeometry, umbrielMaterial);
        moon.position.set(5, 0, 0);
      }
      break
      case "earth": {
        const earthGeometry = new THREE.SphereGeometry(0.4, 32, 32);
        const earthTexture = textureLoader.load("/moon.webp");
        const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
        moon = new THREE.Mesh(earthGeometry, earthMaterial);
        moon.position.set(5, 0, 0);
      }
    }

    scene.add(moon);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.94);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    const sizes = {
      width: canvasRef.current.parentElement.clientWidth,
      height: canvasRef.current.parentElement.clientHeight,
    };
    
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 8;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor("#000000", 0);
    renderer.setPixelRatio(window.devicePixelRatio);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      planet.rotation.y = elapsedTime * 0.1;

      switch (currentSystem){
        case "jupiter":
          moon.position.x = Math.cos(elapsedTime * 0.5) * 4;
          moon.position.z = Math.sin(elapsedTime * 0.5) * 4;
          break;
        case "saturn":
          moon.position.x = Math.cos(elapsedTime * 0.2) * 5;
          moon.position.z = Math.sin(elapsedTime * 0.2) * 5;
          break;
        case "neptune":
          moon.position.x = Math.cos(elapsedTime * 0.2) * 5;
          moon.position.z = Math.sin(elapsedTime * 0.2) * 5;
          break;
        case "uranus":
          moon.position.x = Math.cos(elapsedTime * 0.2) * 5;
          moon.position.z = Math.sin(elapsedTime * 0.2) * 5;
          break;
        case "earth":
          moon.position.x = Math.cos(elapsedTime * 0.2) * 5;
          moon.position.z = Math.sin(elapsedTime * 0.2) * 5;
          break;
      }

      controls.update();
      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    const timeline = gsap.timeline({ defaults: { duration: 1 } });
    timeline.fromTo(planet.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });

    if (moon) {
      timeline.fromTo(moon.scale,
        { z: 0, x: 0, y: 0 },
        { z: 1, x: 1, y: 1 },
        "-=0.5"
      );
    }

    animate();

    const handleResize = () => {
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [currentTexture, currentSystem]);

  const handleTextureChange = (texturePath, system) => {
    setCurrentTexture(texturePath);
    setCurrentSystem(system);
  };

  return (
    <div className="three-container">
      <canvas ref={canvasRef} className="webgl" />
      <div className="texture-selector">

        <button
          onClick={() => handleTextureChange("/gas.png", "jupiter")}
          className={currentSystem === "jupiter" ? "active" : ""}
        >
          <img src="/gas.png" alt="Juno" className="texture-thumb" />
          <span>Júpiter + Europa</span>
        </button>

        <button
          onClick={() => handleTextureChange("/saturn.webp", "saturn")}
          className={currentSystem === "saturn" ? "active" : ""}
        >
          <img src="/saturn.webp" alt="Saturn" className="texture-thumb" />
          <span>Saturno + Titán</span>
        </button>

        <button
          onClick={() => handleTextureChange("/neptune.webp", "neptune")}
          className={currentSystem === "neptune" ? "active" : ""}
        >
          <img src="/neptune.webp" alt="Neptune" className="texture-thumb" />
          <span>Neptune + Triton</span>
        </button>

        <button
          onClick={() => handleTextureChange("/uranus.webp", "uranus")}
          className={currentSystem === "uranus" ? "active" : ""}
        >
          <img src="/uranus.webp" alt="Uranus" className="texture-thumb" />
          <span>Uranus + Umbriel</span>
        </button>

        <button
          onClick={() => handleTextureChange("/earth.webp", "earth")}
          className={currentSystem === "earth" ? "active" : ""}
        >
          <img src="/earth.webp" alt="Earth" className="texture-thumb" />
          <span>Earth + Moon</span>
        </button>
      </div>
    </div>
  );
};