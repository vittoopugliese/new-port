import * as THREE from "three";

/** PBR surface with a subtle metallic sheen on the lit side. */
export function createPlanetSurfaceMaterial(map) {
  return new THREE.MeshStandardMaterial({
    map,
    roughness: 0.64,
    metalness: 0.54,
    transparent: true,
  });
}