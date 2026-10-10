import * as THREE from "three";

// A small, reusable glow texture keeps the sky and comet in a handful of draws.
function glowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 64;
  const ctx = canvas.getContext("2d");
  const glow = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  glow.addColorStop(0, "rgba(255,255,255,1)");
  glow.addColorStop(0.12, "rgba(255,255,255,0.8)");
  glow.addColorStop(0.4, "rgba(255,255,255,0.15)");
  glow.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(canvas);
}

export function createStarfield(mobile) {
  const group = new THREE.Group();
  const texture = glowTexture();
  const palette = ["#e0eaff", "#fff5de", "#8aaeff", "#f5cab1"];
  const resources = [texture];
  for (let layer = 0; layer < 3; layer++) {
    const count = (mobile ? 350 : 700) * (layer === 0 ? 2 : 1);
    const positions = [], colors = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const y = Math.random() * 2 - 1;
      const radius = 160 + Math.random() * 700;
      const ring = Math.sqrt(1 - y * y);
      positions.push(Math.cos(theta) * ring * radius, y * radius, Math.sin(theta) * ring * radius);
      const color = new THREE.Color(palette[i % palette.length]);
      colors.push(color.r, color.g, color.b);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({map: texture, size: [0.7, 1.5, 2.6][layer], vertexColors: true, transparent: true, opacity: [0.5, 0.65, 0.8][layer], blending: THREE.AdditiveBlending, depthWrite: false});
    group.add(new THREE.Points(geometry, material));
    resources.push(geometry, material);
  }
  return {object: group, update(time) { group.rotation.y = time * 0.001; }, dispose() { resources.forEach(resource => resource.dispose()); }};
}

export function createAtmosphere(radius, color) {
  return new THREE.Mesh(
    new THREE.SphereGeometry(radius * 1.035, 40, 32),
    new THREE.ShaderMaterial({
      uniforms: {tint: {value: new THREE.Color(color)}},
      vertexShader: `varying vec3 vNormal; varying vec3 vView;
        void main() {
          vec4 positionView = modelViewMatrix * vec4(position, 1.0);
          vNormal = normalize(normalMatrix * normal);
          vView = -positionView.xyz;
          gl_Position = projectionMatrix * positionView;
        }`,
      fragmentShader: `uniform vec3 tint; varying vec3 vNormal; varying vec3 vView;
        void main() {
          float rim = pow(1.0 - abs(dot(normalize(vNormal), normalize(vView))), 3.5);
          gl_FragColor = vec4(tint, rim * 0.35);
        }`,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    }),
  );
}

export function createOrbit(radius, color) {
  const points = Array.from({length: 160}, (_, i) => {
    const angle = i / 160 * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
  });
  return new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({color, transparent: true, opacity: 0.18, depthWrite: false}));
}

export function createComet() {
  const group = new THREE.Group();
  const texture = glowTexture();
  const headMaterial = new THREE.SpriteMaterial({map: texture, color: 0xd6f6ff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false});
  const head = new THREE.Sprite(headMaterial);
  head.scale.setScalar(1.6);
  group.add(head);
  const positions = [], colors = [];
  for (let i = 0; i < 220; i++) {
    const t = i / 220;
    positions.push(-t * 16, t * 4 + (Math.random() - 0.5) * t * 1.1, (Math.random() - 0.5) * t);
    const fade = (1 - t) ** 2;
    colors.push(0.3 * fade, 0.65 * fade, fade);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({map: texture, size: 0.8, vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false});
  group.add(new THREE.Points(geometry, material));
  return {
    object: group,
    update(time) {
      const phase = (time + 5) % 48;
      group.visible = phase < 18;
      group.position.set(-55 + phase * 6, 25 - phase * 1.1, -55);
      const opacity = Math.min(1, phase / 2, (18 - phase) / 2);
      headMaterial.opacity = material.opacity = Math.max(0, opacity);
    },
    dispose() {texture.dispose(); geometry.dispose(); material.dispose(); headMaterial.dispose();},
  };
}
