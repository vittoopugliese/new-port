import * as THREE from "three";

/** PBR surface with a subtle metallic sheen on the lit side. */
export function createPlanetSurfaceMaterial(map) {
  return new THREE.MeshStandardMaterial({
    map,
    roughness: 0.78,
    metalness: 0.14,
    transparent: false,
  });
}
