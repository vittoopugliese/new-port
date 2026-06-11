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

function createRingTexture(style) {
  const width = 1024;
  const height = 64;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, width, height);

  // Ruido suave determinista para variaciones finas entre bandas.
  const noise = (t, seed) =>
    0.5 +
    0.5 *
      (Math.sin(t * 187 + seed) * 0.45 +
        Math.sin(t * 91 + seed * 2.7) * 0.35 +
        Math.sin(t * 401 + seed * 1.3) * 0.2);

  if (style === "saturn") {
    // Bandas reales: anillo C tenue, B brillante, división de Cassini,
    // anillo A con la división de Encke y un F exterior difuso.
    const bands = [
      { from: 0.0, to: 0.09, color: [168, 148, 120], alpha: [0.04, 0.16] },
      { from: 0.09, to: 0.47, color: [216, 192, 158], alpha: [0.55, 0.95] },
      { from: 0.47, to: 0.53, color: [90, 80, 68], alpha: [0.0, 0.07] },
      { from: 0.53, to: 0.82, color: [198, 174, 140], alpha: [0.34, 0.68] },
      { from: 0.82, to: 0.845, color: [70, 62, 54], alpha: [0.0, 0.05] },
      { from: 0.845, to: 0.95, color: [192, 168, 134], alpha: [0.28, 0.52] },
      { from: 0.95, to: 1.0, color: [160, 142, 116], alpha: [0.0, 0.15] },
    ];

    for (let x = 0; x < width; x++) {
      const t = x / width;
      const band = bands.find((b) => t >= b.from && t < b.to) ?? bands[bands.length - 1];
      const local = (t - band.from) / (band.to - band.from);
      // Suavizar bordes de cada banda
      const edgeFade = Math.min(1, local * 8, (1 - local) * 8);
      const n = noise(t, 7);
      const alpha = (band.alpha[0] + (band.alpha[1] - band.alpha[0]) * n) * edgeFade;
      const [r, g, b] = band.color;
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
      ctx.fillRect(x, 0, 1, height);
    }
  } else {
    // Urano: ~11 anillos finos, oscuros y discretos; epsilon (el exterior) es el más notorio.
    const thinRings = [
      { t: 0.08, w: 2, alpha: 0.3 },
      { t: 0.16, w: 1, alpha: 0.22 },
      { t: 0.24, w: 1, alpha: 0.25 },
      { t: 0.33, w: 2, alpha: 0.3 },
      { t: 0.42, w: 1, alpha: 0.2 },
      { t: 0.5, w: 2, alpha: 0.32 },
      { t: 0.58, w: 1, alpha: 0.22 },
      { t: 0.68, w: 2, alpha: 0.35 },
      { t: 0.78, w: 2, alpha: 0.3 },
      { t: 0.88, w: 2, alpha: 0.35 },
      { t: 0.96, w: 5, alpha: 0.75 }, // anillo epsilon
    ];
    thinRings.forEach(({ t, w, alpha }) => {
      ctx.fillStyle = `rgba(170, 180, 195, ${alpha})`;
      ctx.fillRect(Math.floor(t * width) - Math.floor(w / 2), 0, w, height);
    });
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;
  return texture;
}

/** Realistic planetary rings (Saturn/Uranus), always visible when configured. */
export function createPlanetRings(planetConfig) {
  const { ringConfig, geometrySize } = planetConfig;
  const inner = geometrySize * ringConfig.innerFactor;
  const outer = geometrySize * ringConfig.outerFactor;

  const geometry = new THREE.RingGeometry(inner, outer, 160, 1);
  // RingGeometry mapea UVs en plano; las remapeamos radialmente para que
  // la textura de bandas se dibuje como anillos concéntricos.
  const posAttr = geometry.attributes.position;
  const uvAttr = geometry.attributes.uv;
  for (let i = 0; i < posAttr.count; i++) {
    const x = posAttr.getX(i);
    const y = posAttr.getY(i);
    const r = Math.sqrt(x * x + y * y);
    uvAttr.setXY(i, (r - inner) / (outer - inner), 0.5);
  }
  uvAttr.needsUpdate = true;

  const texture = createRingTexture(ringConfig.style);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    opacity: ringConfig.opacity,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = Math.PI / 2 - ringConfig.tiltX;
  mesh.rotation.z = ringConfig.tiltZ ?? 0;

  return {
    mesh,
    dispose() {
      geometry.dispose();
      material.dispose();
      texture.dispose();
    },
  };
}

/** Extra moons always visible per planet — not a toggle effect. */
export function setupExtraMoons(planetConfig, textureLoader, scene, timeline) {
  const extraMoons = planetConfig.extraMoons ?? [];
  const moonMeshes = [];
  const disposables = [];

  extraMoons.forEach((moonData, index) => {
    const geometry = new THREE.SphereGeometry(moonData.size, 24, 24);
    const texture = textureLoader.load("/moon.webp");
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      color: moonData.color,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    moonMeshes.push({ mesh, ...moonData, index });
    disposables.push({ geometry, material, texture });

    mesh.scale.set(0, 0, 0);
    timeline.fromTo(
      mesh.scale,
      { x: 0, y: 0, z: 0 },
      { x: 1, y: 1, z: 1, duration: 0.8, ease: "back.out(1.4)" },
      index * 0.12,
    );
  });

  return {
    moonMeshes,
    update(elapsed) {
      moonMeshes.forEach((moon) => {
        const angle = elapsed * moon.orbitSpeed * moon.orbitDirection + (moon.phase ?? 0);
        moon.mesh.position.x = Math.cos(angle) * moon.orbitRadius;
        moon.mesh.position.z = Math.sin(angle) * moon.orbitRadius;
        moon.mesh.position.y = Math.sin(angle * 0.5 + moon.index) * 0.15;
      });
    },
    dispose() {
      moonMeshes.forEach((moon) => scene.remove(moon.mesh));
      disposables.forEach(({ geometry, material }) => {
        geometry.dispose();
        material.dispose();
      });
    },
  };
}

export function createMeteorShower() {
  const group = new THREE.Group();
  const meteors = [];
  const meteorCount = 32;
  const rockColors = [0xcccccc, 0xaa9988, 0x887766, 0xbbaa99, 0x999988];

  const glowTexture = createRadialTexture([
    [0, "rgba(255, 220, 180, 0.9)"],
    [0.4, "rgba(255, 160, 80, 0.4)"],
    [1, "rgba(255, 100, 40, 0)"],
  ]);

  const spawnMeteor = () => {
    const sizeScale = 0.7 + Math.random() * 0.8;
    const radius = 0.09 * sizeScale;
    const height = 0.5 * sizeScale;
    const geometry = new THREE.ConeGeometry(radius, height, 5);
    const material = new THREE.MeshBasicMaterial({
      color: rockColors[Math.floor(Math.random() * rockColors.length)],
    });
    const mesh = new THREE.Mesh(geometry, material);

    const trailLength = 1.8 + Math.random() * 1.2;
    const trailGeometry = new THREE.BufferGeometry();
    const trailPositions = new Float32Array(6);
    trailGeometry.setAttribute("position", new THREE.BufferAttribute(trailPositions, 3));
    const trailMaterial = new THREE.LineBasicMaterial({
      color: 0xff8833,
      transparent: true,
      opacity: 0.75,
    });
    const trail = new THREE.Line(trailGeometry, trailMaterial);

    let glow = null;
    if (sizeScale > 1.1) {
      const glowMaterial = new THREE.SpriteMaterial({
        map: glowTexture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        opacity: 0.6,
      });
      glow = new THREE.Sprite(glowMaterial);
      glow.scale.set(0.5 * sizeScale, 0.5 * sizeScale, 1);
      group.add(glow);
    }

    const angle = Math.random() * Math.PI * 2;
    const elevation = (Math.random() - 0.5) * 40;
    const speed = 14 + Math.random() * 20;
    const dir = new THREE.Vector3(
      Math.cos(angle) * 0.6 + (Math.random() - 0.5) * 0.3,
      (Math.random() - 0.5) * 0.4,
      Math.sin(angle) * 0.6 + (Math.random() - 0.5) * 0.3,
    ).normalize();

    mesh.position.set(
      (Math.random() - 0.5) * 90,
      elevation + 25,
      (Math.random() - 0.5) * 90 - 40,
    );
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().negate());
    trail.position.copy(mesh.position);
    if (glow) glow.position.copy(mesh.position);

    group.add(mesh);
    group.add(trail);

    meteors.push({ mesh, trail, glow, dir, speed, life: 0, trailLength });
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
        if (meteor.glow) meteor.glow.position.copy(meteor.mesh.position);

        const trailPos = meteor.trail.geometry.attributes.position.array;
        trailPos[0] = meteor.mesh.position.x;
        trailPos[1] = meteor.mesh.position.y;
        trailPos[2] = meteor.mesh.position.z;
        trailPos[3] = meteor.mesh.position.x - meteor.dir.x * meteor.trailLength;
        trailPos[4] = meteor.mesh.position.y - meteor.dir.y * meteor.trailLength;
        trailPos[5] = meteor.mesh.position.z - meteor.dir.z * meteor.trailLength;
        meteor.trail.geometry.attributes.position.needsUpdate = true;

        if (meteor.life > 5 || meteor.mesh.position.y < -35) {
          group.remove(meteor.mesh);
          group.remove(meteor.trail);
          if (meteor.glow) {
            group.remove(meteor.glow);
            meteor.glow.material.dispose();
          }
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
        if (m.glow) m.glow.material.dispose();
      });
      glowTexture.dispose();
      disposeObject3D(group);
    },
  };
}

function createPolarJet(particleCount, direction) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const speeds = new Float32Array(particleCount);
  const offsets = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 0.4;
    positions[i * 3 + 1] = direction * (2 + Math.random() * 2);
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
    speeds[i] = 0.8 + Math.random() * 1.2;
    offsets[i] = Math.random() * Math.PI * 2;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color: 0x88ccff,
    size: 0.22,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const points = new THREE.Points(geometry, material);

  return { points, geometry, material, speeds, offsets, direction, particleCount };
}

export function createBlackHole() {
  const group = new THREE.Group();
  const sizeScale = 10;
  group.position.set(-160, 90, -420);

  const coreGeometry = new THREE.SphereGeometry(5, 32, 32);
  const coreMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  group.add(core);

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
    size: 0.22,
    transparent: true,
    opacity: 0.8,
  });
  const particles = new THREE.Points(particleGeometry, particleMaterial);
  particles.rotation.x = 1.15;
  group.add(particles);

  const jetCount = 80;
  const jetUp = createPolarJet(jetCount, 1);
  const jetDown = createPolarJet(jetCount, -1);
  group.add(jetUp.points);
  group.add(jetDown.points);

  group.scale.set(0, 0, 0);
  gsap.to(group.scale, {
    x: sizeScale,
    y: sizeScale,
    z: sizeScale,
    duration: 2.4,
    ease: "power2.out",
  });

  const updateJet = (jet, elapsed, delta, pulse) => {
    const pos = jet.geometry.attributes.position.array;
    for (let i = 0; i < jet.particleCount; i++) {
      const spread = 0.15 + Math.abs(pos[i * 3 + 1]) * 0.04;
      pos[i * 3] += Math.sin(elapsed * 3 + jet.offsets[i]) * spread * delta;
      pos[i * 3 + 2] += Math.cos(elapsed * 2.5 + jet.offsets[i]) * spread * delta;
      pos[i * 3 + 1] += jet.direction * jet.speeds[i] * delta * 18;

      const dist = Math.abs(pos[i * 3 + 1]);
      if (dist > 22 * sizeScale) {
        pos[i * 3] = (Math.random() - 0.5) * 0.4;
        pos[i * 3 + 1] = jet.direction * (2 + Math.random() * 1.5);
        pos[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
      }
    }
    jet.geometry.attributes.position.needsUpdate = true;
    jet.material.opacity = 0.65 + pulse * 0.25;
  };

  return {
    object: group,
    update(elapsed, delta) {
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

      const pulse = 0.5 + Math.sin(elapsed * 2.2) * 0.5;
      updateJet(jetUp, elapsed, delta, pulse);
      updateJet(jetDown, elapsed, delta, pulse);
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
      jetUp.geometry.dispose();
      jetUp.material.dispose();
      jetDown.geometry.dispose();
      jetDown.material.dispose();
    },
  };
}

function createNeutronDiskTexture(size = 512) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(size / 2, size / 2, size * 0.12, size / 2, size / 2, size * 0.48);
  gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
  gradient.addColorStop(0.28, "rgba(180, 240, 255, 0.95)");
  gradient.addColorStop(0.48, "rgba(120, 160, 255, 0.65)");
  gradient.addColorStop(0.68, "rgba(170, 90, 255, 0.4)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createNeutronJet(particleCount, direction) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const speeds = new Float32Array(particleCount);
  const offsets = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 0.18;
    positions[i * 3 + 1] = direction * (1.2 + Math.random() * 1.8);
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.18;
    speeds[i] = 1.4 + Math.random() * 1.6;
    offsets[i] = Math.random() * Math.PI * 2;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color: 0xd8f4ff,
    size: 0.2,
    transparent: true,
    opacity: 0.92,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const points = new THREE.Points(geometry, material);

  return { points, geometry, material, speeds, offsets, direction, particleCount };
}

function createMagneticLoop(radius, tube, arc, rotationY) {
  const geometry = new THREE.TorusGeometry(radius, tube, 8, 56, arc);
  const material = new THREE.MeshBasicMaterial({
    color: 0x7eb8ff,
    transparent: true,
    opacity: 0.42,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = Math.PI * 0.52;
  mesh.rotation.y = rotationY;
  return { mesh, geometry, material };
}

export function createNeutronStar() {
  const group = new THREE.Group();
  const sizeScale = 9.6;
  group.position.set(324, 132, -684);
  group.rotation.z = 0.28;

  const coreGeometry = new THREE.SphereGeometry(0.75, 24, 24);
  const coreMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  group.add(core);

  const coronaTexture = createRadialTexture([
    [0, "rgba(255, 255, 255, 1)"],
    [0.18, "rgba(210, 245, 255, 0.95)"],
    [0.42, "rgba(120, 200, 255, 0.35)"],
    [1, "rgba(80, 120, 255, 0)"],
  ], 512);
  const coronaMaterial = new THREE.SpriteMaterial({
    map: coronaTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const corona = new THREE.Sprite(coronaMaterial);
  corona.scale.set(8, 8, 1);
  group.add(corona);

  const haloMaterial = new THREE.SpriteMaterial({
    map: createRadialTexture([
      [0, "rgba(160, 220, 255, 0)"],
      [0.35, "rgba(120, 180, 255, 0.12)"],
      [0.55, "rgba(170, 120, 255, 0.28)"],
      [1, "rgba(90, 60, 180, 0)"],
    ], 512),
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const halo = new THREE.Sprite(haloMaterial);
  halo.scale.set(18, 18, 1);
  group.add(halo);

  const diskTexture = createNeutronDiskTexture();
  const diskGeometry = new THREE.RingGeometry(2.1, 4.8, 72);
  const diskMaterial = new THREE.MeshBasicMaterial({
    map: diskTexture,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const disk = new THREE.Mesh(diskGeometry, diskMaterial);
  disk.rotation.x = 1.08;
  group.add(disk);

  const magneticLoops = [
    createMagneticLoop(3.2, 0.035, Math.PI * 1.35, 0),
    createMagneticLoop(3.55, 0.03, Math.PI * 1.15, Math.PI * 0.45),
    createMagneticLoop(3.85, 0.028, Math.PI * 0.95, Math.PI * 0.9),
    createMagneticLoop(4.15, 0.024, Math.PI * 0.8, Math.PI * 1.35),
  ];
  magneticLoops.forEach(({ mesh }) => group.add(mesh));

  const jetCount = 90;
  const jetUp = createNeutronJet(jetCount, 1);
  const jetDown = createNeutronJet(jetCount, -1);
  group.add(jetUp.points);
  group.add(jetDown.points);

  const sparkCount = 70;
  const sparkGeometry = new THREE.BufferGeometry();
  const sparkPositions = new Float32Array(sparkCount * 3);
  const sparkAngles = new Float32Array(sparkCount);
  const sparkRadii = new Float32Array(sparkCount);

  for (let i = 0; i < sparkCount; i++) {
    sparkAngles[i] = Math.random() * Math.PI * 2;
    sparkRadii[i] = 1.4 + Math.random() * 2.2;
    sparkPositions[i * 3] = Math.cos(sparkAngles[i]) * sparkRadii[i];
    sparkPositions[i * 3 + 1] = (Math.random() - 0.5) * 0.35;
    sparkPositions[i * 3 + 2] = Math.sin(sparkAngles[i]) * sparkRadii[i];
  }

  sparkGeometry.setAttribute("position", new THREE.BufferAttribute(sparkPositions, 3));
  const sparkMaterial = new THREE.PointsMaterial({
    color: 0xbfe8ff,
    size: 0.12,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const sparks = new THREE.Points(sparkGeometry, sparkMaterial);
  sparks.rotation.x = 1.08;
  group.add(sparks);

  group.scale.set(0, 0, 0);
  gsap.to(group.scale, {
    x: sizeScale,
    y: sizeScale,
    z: sizeScale,
    duration: 2,
    ease: "power2.out",
  });

  const updateJet = (jet, elapsed, delta, pulse) => {
    const pos = jet.geometry.attributes.position.array;
    for (let i = 0; i < jet.particleCount; i++) {
      const spread = 0.08 + Math.abs(pos[i * 3 + 1]) * 0.025;
      pos[i * 3] += Math.sin(elapsed * 4 + jet.offsets[i]) * spread * delta;
      pos[i * 3 + 2] += Math.cos(elapsed * 3.2 + jet.offsets[i]) * spread * delta;
      pos[i * 3 + 1] += jet.direction * jet.speeds[i] * delta * 28;

      if (Math.abs(pos[i * 3 + 1]) > 28 * sizeScale) {
        pos[i * 3] = (Math.random() - 0.5) * 0.18;
        pos[i * 3 + 1] = jet.direction * (1.2 + Math.random() * 1.2);
        pos[i * 3 + 2] = (Math.random() - 0.5) * 0.18;
      }
    }
    jet.geometry.attributes.position.needsUpdate = true;
    jet.material.opacity = 0.72 + pulse * 0.28;
  };

  return {
    object: group,
    update(elapsed, delta) {
      const pulse = 0.5 + Math.sin(elapsed * 3.4) * 0.5;
      const spin = elapsed * 0.55;

      group.rotation.y = spin * 0.08;
      disk.rotation.z = spin * 0.9;
      sparks.rotation.z = spin * 0.65;

      corona.material.opacity = 0.88 + pulse * 0.12;
      halo.material.opacity = 0.55 + pulse * 0.25;
      corona.scale.set(8 + pulse * 1.2, 8 + pulse * 1.2, 1);

      magneticLoops.forEach(({ mesh, material }, index) => {
        mesh.rotation.y += delta * (0.12 + index * 0.03);
        material.opacity = 0.28 + pulse * 0.22;
      });

      const sparkPos = sparkGeometry.attributes.position.array;
      for (let i = 0; i < sparkCount; i++) {
        sparkAngles[i] += 0.014 + (3.6 - sparkRadii[i]) * 0.004;
        sparkRadii[i] += Math.sin(elapsed * 2 + i) * 0.002;
        sparkPos[i * 3] = Math.cos(sparkAngles[i]) * sparkRadii[i];
        sparkPos[i * 3 + 2] = Math.sin(sparkAngles[i]) * sparkRadii[i];
      }
      sparkGeometry.attributes.position.needsUpdate = true;
      sparkMaterial.opacity = 0.55 + pulse * 0.35;

      updateJet(jetUp, elapsed, delta, pulse);
      updateJet(jetDown, elapsed, delta, pulse);
    },
    dispose() {
      coreGeometry.dispose();
      coreMaterial.dispose();
      coronaTexture.dispose();
      coronaMaterial.dispose();
      haloMaterial.map?.dispose();
      haloMaterial.dispose();
      diskGeometry.dispose();
      diskMaterial.dispose();
      diskTexture.dispose();
      magneticLoops.forEach(({ geometry, material }) => {
        geometry.dispose();
        material.dispose();
      });
      sparkGeometry.dispose();
      sparkMaterial.dispose();
      jetUp.geometry.dispose();
      jetUp.material.dispose();
      jetDown.geometry.dispose();
      jetDown.material.dispose();
    },
  };
}

export function createDistantStar() {
  const group = new THREE.Group();
  // Abajo-centro, opuesto al agujero negro (arriba-izq) y la neutron star (arriba-der).
  group.position.set(-50, -105, -360);

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

// Gaussiana estándar (Box-Muller) para distribuir estrellas alrededor del plano galáctico.
function gaussianRandom() {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

export function createGalaxyArm() {
  const group = new THREE.Group();
  // Banda horizontal cruzando el cielo de fondo, como la Vía Láctea vista desde adentro.
  group.position.set(0, 28, -300);
  group.rotation.z = -0.14;

  const disposables = [];

  // ESTRELLAS de la banda: densidad gaussiana alrededor del plano galáctico,
  // con bulbo central más ancho y cálido.
  const particleCount = 9000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const starPalette = [
    { color: new THREE.Color(0xcfd8ff), weight: 0.45 }, // azul-blanco
    { color: new THREE.Color(0xffffff), weight: 0.25 }, // blanco
    { color: new THREE.Color(0xffe9c4), weight: 0.2 },  // amarillento
    { color: new THREE.Color(0xffb88a), weight: 0.1 },  // rojizo
  ];
  const pickStarColor = () => {
    let r = Math.random();
    for (const entry of starPalette) {
      if (r < entry.weight) return entry.color;
      r -= entry.weight;
    }
    return starPalette[0].color;
  };
  const warmCore = new THREE.Color(0xffe2b0);

  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 800;
    // Bulbo central: la banda se engrosa y abrilanta cerca del centro.
    const bulge = Math.exp(-(x * x) / (2 * 130 * 130));
    const sigmaY = 11 + bulge * 30;
    const y = gaussianRandom() * sigmaY;
    const z = (Math.random() - 0.5) * 60;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    // Cerca del bulbo las estrellas tienden a ser más cálidas.
    const base = pickStarColor().clone();
    if (bulge > 0.4 && Math.random() < bulge) base.lerp(warmCore, 0.6);
    colors[i * 3] = base.r;
    colors[i * 3 + 1] = base.g;
    colors[i * 3 + 2] = base.b;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const starMaterial = new THREE.PointsMaterial({
    size: 0.55,
    vertexColors: true,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  });
  const points = new THREE.Points(geometry, starMaterial);
  group.add(points);
  disposables.push(geometry, starMaterial);

  const glowTexture = createRadialTexture([
    [0, "rgba(255, 250, 235, 0.9)"],
    [0.4, "rgba(255, 240, 215, 0.35)"],
    [1, "rgba(255, 230, 190, 0)"],
  ], 256);
  disposables.push(glowTexture);

  // Resplandor difuso central alargado (luz integrada de millones de estrellas).
  const coreGlowMaterial = new THREE.SpriteMaterial({
    map: glowTexture,
    color: 0xffe8c2,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const coreGlow = new THREE.Sprite(coreGlowMaterial);
  coreGlow.scale.set(420, 95, 1);
  group.add(coreGlow);
  disposables.push(coreGlowMaterial);

  // Nebulosas tenues repartidas a lo largo de la banda.
  const nebulaTints = [0xffd9a8, 0xa8c2ff, 0xe8b8d8, 0xbcd8ff];
  const nebulaMaterials = [];
  for (let i = 0; i < 9; i++) {
    const material = new THREE.SpriteMaterial({
      map: glowTexture,
      color: nebulaTints[i % nebulaTints.length],
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sprite = new THREE.Sprite(material);
    const x = (Math.random() - 0.5) * 620;
    sprite.position.set(x, gaussianRandom() * 10, (Math.random() - 0.5) * 30);
    const s = 35 + Math.random() * 55;
    sprite.scale.set(s * (1.2 + Math.random()), s * 0.6, 1);
    group.add(sprite);
    nebulaMaterials.push({ material, target: 0.05 + Math.random() * 0.09 });
    disposables.push(material);
  }

  // Vetas de polvo oscuro sobre el plano (el "rift" que parte la banda en dos).
  const dustMaterials = [];
  for (let i = 0; i < 8; i++) {
    const material = new THREE.SpriteMaterial({
      map: glowTexture,
      color: 0x0a0703,
      transparent: true,
      opacity: 0,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });
    const sprite = new THREE.Sprite(material);
    const x = (Math.random() - 0.5) * 500;
    sprite.position.set(x, gaussianRandom() * 5 - 2, 25 + Math.random() * 10);
    sprite.scale.set(60 + Math.random() * 90, 12 + Math.random() * 12, 1);
    group.add(sprite);
    dustMaterials.push({ material, target: 0.3 + Math.random() * 0.25 });
    disposables.push(material);
  }

  // Fade-in de todo el conjunto. El glow central usa un proxy porque su
  // opacidad también se modula por frame en update().
  const fade = { value: 0 };
  gsap.to(fade, { value: 1, duration: 3, ease: "power2.out" });
  gsap.to(starMaterial, { opacity: 0.85, duration: 2.5, ease: "power2.out" });
  nebulaMaterials.forEach(({ material, target }) =>
    gsap.to(material, { opacity: target, duration: 3, ease: "power2.out" }),
  );
  dustMaterials.forEach(({ material, target }) =>
    gsap.to(material, { opacity: target, duration: 3, ease: "power2.out" }),
  );

  return {
    object: group,
    update(elapsed) {
      // Deriva apenas perceptible, como rotación del cielo.
      group.rotation.y = Math.sin(elapsed * 0.008) * 0.05;
      coreGlowMaterial.opacity = (0.14 + Math.sin(elapsed * 0.35) * 0.025) * fade.value;
    },
    dispose() {
      disposables.forEach((item) => item.dispose());
    },
  };
}

export const EFFECT_CREATORS = {
  meteors: createMeteorShower,
  blackHole: createBlackHole,
  neutronStar: createNeutronStar,
  distantStar: createDistantStar,
  galaxy: createGalaxyArm,
};
