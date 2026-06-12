import * as THREE from "three";

/** Matte surface with Phong lighting — bright response, zero specular highlights. */
export function createPlanetSurfaceMaterial(map) {
  return new THREE.MeshPhongMaterial({
    map,
    specular: 0x000000,
    shininess: 0,
    transparent: false,
  });
}
