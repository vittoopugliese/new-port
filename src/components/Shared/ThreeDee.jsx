import React, {useEffect, useRef, useState} from "react";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {gsap} from "gsap";

export const ThreeDee = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let divide;
    divide = window.innerWidth < 474 ? 1.14 : 1.84;

    const scene = new THREE.Scene();
    const geometry = new THREE.SphereGeometry(2.54, 74, 74);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/gas.png", (e) => {
      console.log(true)
    });

    const material = new THREE.MeshStandardMaterial({
      map: texture,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const sizes = {
      width: window.innerWidth / divide,
      height: 400,
    };

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 10, 10);
    scene.add(light);

    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 8;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({canvas: canvasRef.current});
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor("#171717");
    renderer.setPixelRatio(window.devicePixelRatio);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      controls.update();
      renderScene();
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    const timeline = gsap.timeline({defaults: {duration: 1}});
    timeline.fromTo(mesh.scale, {z: 0, x: 0, y: 0}, {z: 1, x: 1, y: 1});

    const handleResize = () => {
      divide = window.innerWidth < 474 ? 1.14 : 1.84;
      sizes.width = window.innerWidth / divide;
      sizes.height = 400;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderScene();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="three-container">
      <canvas ref={canvasRef} className="webgl" />
    </div>
  );
};
