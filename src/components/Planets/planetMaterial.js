import * as THREE from "three";

/** PBR surface with a subtle metallic sheen on the lit side. */
export function createPlanetSurfaceMaterial(map) {
  map.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshStandardMaterial({
    map,
    roughness: 0.64,
    metalness: 0.54,
  });
}
