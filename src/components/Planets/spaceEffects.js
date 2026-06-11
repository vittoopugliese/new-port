import * as THREE from "three";
import { gsap } from "gsap";

function createRadialTexture(stops, size = 256) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  stops.forEach(([offset, color]) => gradient.addColorStop(offset, color));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createAccretionTexture(size = 512) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(size / 2, size / 2, size * 0.15, size / 2, size / 2, size * 0.48);
  gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
  gradient.addColorStop(0.35, "rgba(255, 180, 80, 0.9)");
  gradient.addColorStop(0.55, "rgba(255, 120, 40, 0.6)");
  gradient.addColorStop(0.75, "rgba(180, 60, 200, 0.35)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function disposeObject3D(object) {
  object.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      if (Array.isArray(child.material)) child.material.forEach((m) => m.dispose());
      else child.material.dispose();
    }
  });
}

export function createMeteorShower(sceneApi) {
  const group = new THREE.Group();
  const meteors = [];
  const meteorCount = 18;

  const spawnMeteor = () => {
    const geometry = new THREE.ConeGeometry(0.04, 0.25, 4);
    const material = new THREE.MeshBasicMaterial({ color: 0xcccccc });
    const mesh = new THREE.Mesh(geometry, material);

    const trailGeometry = new THREE.BufferGeometry();
    const trailPositions = new Float32Array(6);
    trailGeometry.setAttribute("position", new THREE.BufferAttribute(trailPositions, 3));
    const trailMaterial = new THREE.LineBasicMaterial({
      color: 0xffaa66,
      transparent: true,
      opacity: 0.7,
    });
    const trail = new THREE.Line(trailGeometry, trailMaterial);

    const angle = Math.random() * Math.PI * 2;
    const elevation = (Math.random() - 0.5) * 40;
    const speed = 12 + Math.random() * 18;
    const dir = new THREE.Vector3(
      Math.cos(angle) * 0.6 + (Math.random() - 0.5) * 0.3,
      (Math.random() - 0.5) * 0.4,
      Math.sin(angle) * 0.6 + (Math.random() - 0.5) * 0.3,
    ).normalize();

    mesh.position.set(
      (Math.random() - 0.5) * 80,
      elevation + 20,
      (Math.random() - 0.5) * 80 - 40,
    );
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().negate());
    trail.position.copy(mesh.position);

    group.add(mesh);
    group.add(trail);

    meteors.push({ mesh, trail, dir, speed, life: 0 });
  };

  for (let i = 0; i < meteorCount; i++) spawnMeteor();

  return {
    object: group,
    update(_elapsed, delta) {
      const toRespawn = [];
      for (let i = 0; i < meteors.length; i++) {
        const meteor = meteors[i];
        meteor.life += delta;
        meteor.mesh.position.addScaledVector(meteor.dir, meteor.speed * delta);
        meteor.trail.position.copy(meteor.mesh.position);

        const trailPos = meteor.trail.geometry.attributes.position.array;
        trailPos[0] = meteor.mesh.position.x;
        trailPos[1] = meteor.mesh.position.y;
        trailPos[2] = meteor.mesh.position.z;
        trailPos[3] = meteor.mesh.position.x - meteor.dir.x * 1.2;
        trailPos[4] = meteor.mesh.position.y - meteor.dir.y * 1.2;
        trailPos[5] = meteor.mesh.position.z - meteor.dir.z * 1.2;
        meteor.trail.geometry.attributes.position.needsUpdate = true;

        if (meteor.life > 4 || meteor.mesh.position.y < -30) {
          group.remove(meteor.mesh);
          group.remove(meteor.trail);
          meteor.mesh.geometry.dispose();
          meteor.mesh.material.dispose();
          meteor.trail.geometry.dispose();
          meteor.trail.material.dispose();
          toRespawn.push(i);
        }
      }
      for (let i = toRespawn.length - 1; i >= 0; i--) {
        meteors.splice(toRespawn[i], 1);
        spawnMeteor();
      }
    },
    dispose() {
      meteors.forEach((m) => {
        m.mesh.geometry.dispose();
        m.mesh.material.dispose();
        m.trail.geometry.dispose();
        m.trail.material.dispose();
      });
      disposeObject3D(group);
    },
  };
}

export function createBlackHole(sceneApi) {
  const group = new THREE.Group();
  // Lejos pero dentro del encuadre, ligeramente arriba a la izquierda.
  group.position.set(-16, 9, -42);

  const coreGeometry = new THREE.SphereGeometry(5, 32, 32);
  const coreMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  group.add(core);

  // Halo / anillo de fotones detrás del núcleo para que resalte sobre el fondo negro.
  const haloMaterial = new THREE.SpriteMaterial({
    map: createRadialTexture([
      [0, "rgba(255, 220, 160, 0)"],
      [0.42, "rgba(255, 200, 120, 0)"],
      [0.5, "rgba(255, 210, 140, 0.95)"],
      [0.6, "rgba(255, 140, 70, 0.25)"],
      [1, "rgba(120, 60, 180, 0)"],
    ], 512),
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const halo = new THREE.Sprite(haloMaterial);
  halo.scale.set(24, 24, 1);
  group.add(halo);

  const diskGeometry = new THREE.RingGeometry(6, 13, 80);
  const diskMaterial = new THREE.MeshBasicMaterial({
    map: createAccretionTexture(),
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const disk = new THREE.Mesh(diskGeometry, diskMaterial);
  // Inclinado hacia la cámara para ver el disco de acreción, no de canto.
  disk.rotation.x = 1.15;
  group.add(disk);

  const particleCount = 120;
  const particleGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const angles = new Float32Array(particleCount);
  const radii = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    angles[i] = Math.random() * Math.PI * 2;
    radii[i] = 8 + Math.random() * 8;
    positions[i * 3] = Math.cos(angles[i]) * radii[i];
    positions[i * 3 + 1] = (Math.random() - 0.5) * 0.8;
    positions[i * 3 + 2] = Math.sin(angles[i]) * radii[i];
  }

  particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const particleMaterial = new THREE.PointsMaterial({
    color: 0xff9944,
    size: 0.15,
    transparent: true,
    opacity: 0.8,
  });
  const particles = new THREE.Points(particleGeometry, particleMaterial);
  particles.rotation.x = 1.15;
  group.add(particles);

  group.scale.set(0, 0, 0);
  gsap.to(group.scale, { x: 1, y: 1, z: 1, duration: 2, ease: "power2.out" });

  return {
    object: group,
    update(elapsed) {
      disk.rotation.z = elapsed * 0.4;
      particles.rotation.z = elapsed * 0.25;

      const pos = particleGeometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        angles[i] += 0.008 + (14 - radii[i]) * 0.002;
        radii[i] -= 0.012;
        if (radii[i] < 6.5) {
          radii[i] = 14 + Math.random() * 2;
          angles[i] = Math.random() * Math.PI * 2;
        }
        pos[i * 3] = Math.cos(angles[i]) * radii[i];
        pos[i * 3 + 2] = Math.sin(angles[i]) * radii[i];
      }
      particleGeometry.attributes.position.needsUpdate = true;
    },
    dispose() {
      coreGeometry.dispose();
      coreMaterial.dispose();
      haloMaterial.map?.dispose();
      haloMaterial.dispose();
      diskGeometry.dispose();
      diskMaterial.dispose();
      diskMaterial.map?.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    },
  };
}

export function createDistantStar(sceneApi) {
  const group = new THREE.Group();
  group.position.set(120, 60, -180);

  const glowTexture = createRadialTexture([
    [0, "rgba(255, 240, 200, 1)"],
    [0.35, "rgba(255, 220, 150, 0.5)"],
    [1, "rgba(255, 200, 100, 0)"],
  ]);
  const spriteMaterial = new THREE.SpriteMaterial({
    map: glowTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.set(25, 25, 1);
  group.add(sprite);

  const coreMaterial = new THREE.SpriteMaterial({
    map: createRadialTexture([
      [0, "rgba(255, 255, 255, 1)"],
      [0.5, "rgba(255, 255, 255, 0.3)"],
      [1, "rgba(255, 255, 255, 0)"],
    ]),
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const core = new THREE.Sprite(coreMaterial);
  core.scale.set(4, 4, 1);
  group.add(core);

  group.scale.set(0, 0, 0);
  gsap.to(group.scale, { x: 1, y: 1, z: 1, duration: 1.5, ease: "power2.out" });

  return {
    object: group,
    update(elapsed) {
      const pulse = 0.85 + Math.sin(elapsed * 1.2) * 0.15;
      sprite.material.opacity = pulse;
      core.material.opacity = 0.9 + Math.sin(elapsed * 2) * 0.1;
      sprite.scale.set(25 * pulse, 25 * pulse, 1);
    },
    dispose() {
      glowTexture.dispose();
      coreMaterial.map?.dispose();
      spriteMaterial.dispose();
      coreMaterial.dispose();
    },
  };
}

export function createOrbitingShip(sceneApi) {
  const { planetConfig } = sceneApi;
  const group = new THREE.Group();

  const bodyGeometry = new THREE.ConeGeometry(0.12, 0.5, 6);
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xccccdd, metalness: 0.6, roughness: 0.3 });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.rotation.x = Math.PI / 2;
  group.add(body);

  const wingGeometry = new THREE.BoxGeometry(0.5, 0.02, 0.15);
  const wingMaterial = new THREE.MeshStandardMaterial({ color: 0x888899, metalness: 0.5, roughness: 0.4 });
  const wings = new THREE.Mesh(wingGeometry, wingMaterial);
  wings.position.z = 0.1;
  group.add(wings);

  const cockpitGeometry = new THREE.SphereGeometry(0.08, 8, 8);
  const cockpitMaterial = new THREE.MeshStandardMaterial({
    color: 0x44aaff,
    emissive: 0x114466,
    metalness: 0.8,
    roughness: 0.2,
  });
  const cockpit = new THREE.Mesh(cockpitGeometry, cockpitMaterial);
  cockpit.position.z = -0.15;
  group.add(cockpit);

  const engineLight = new THREE.PointLight(0xff6622, 1.5, 3);
  engineLight.position.z = 0.35;
  group.add(engineLight);

  const orbitRadius = planetConfig.geometrySize + 2.8;
  const orbitSpeed = 0.35;
  const inclination = 0.55;

  group.scale.set(0, 0, 0);
  gsap.to(group.scale, { x: 1, y: 1, z: 1, duration: 0.8, ease: "back.out(1.4)" });

  return {
    object: group,
    update(elapsed) {
      const angle = elapsed * orbitSpeed;
      group.position.x = Math.cos(angle) * orbitRadius;
      group.position.z = Math.sin(angle) * orbitRadius;
      group.position.y = Math.sin(angle * 0.7) * orbitRadius * Math.sin(inclination) * 0.4;

      const tangent = new THREE.Vector3(-Math.sin(angle), 0, Math.cos(angle)).normalize();
      group.lookAt(
        group.position.x + tangent.x,
        group.position.y,
        group.position.z + tangent.z,
      );
    },
    dispose() {
      bodyGeometry.dispose();
      bodyMaterial.dispose();
      wingGeometry.dispose();
      wingMaterial.dispose();
      cockpitGeometry.dispose();
      cockpitMaterial.dispose();
    },
  };
}

export function createExtraMoons(sceneApi) {
  const { planetConfig, textureLoader } = sceneApi;
  const extraMoons = planetConfig.extraMoons ?? [];
  const group = new THREE.Group();
  const moonMeshes = [];

  extraMoons.forEach((moonData, index) => {
    const geometry = new THREE.SphereGeometry(moonData.size, 24, 24);
    const texture = textureLoader.load("/moon.webp");
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      color: moonData.color,
    });
    const mesh = new THREE.Mesh(geometry, material);
    group.add(mesh);
    moonMeshes.push({ mesh, ...moonData, index });

    mesh.scale.set(0, 0, 0);
    gsap.to(mesh.scale, { x: 1, y: 1, z: 1, duration: 0.8, delay: index * 0.15, ease: "back.out(1.4)" });
  });

  return {
    object: group,
    update(elapsed) {
      moonMeshes.forEach((moon) => {
        const angle =
          elapsed * moon.orbitSpeed * moon.orbitDirection + (moon.phase ?? 0);
        moon.mesh.position.x = Math.cos(angle) * moon.orbitRadius;
        moon.mesh.position.z = Math.sin(angle) * moon.orbitRadius;
        moon.mesh.position.y = Math.sin(angle * 0.5 + moon.index) * 0.15;
      });
    },
    dispose() {
      moonMeshes.forEach((moon) => {
        moon.mesh.geometry.dispose();
        moon.mesh.material.dispose();
        moon.mesh.material.map?.dispose();
      });
    },
  };
}

export const EFFECT_CREATORS = {
  meteors: createMeteorShower,
  blackHole: createBlackHole,
  distantStar: createDistantStar,
  ship: createOrbitingShip,
  extraMoons: createExtraMoons,
};
