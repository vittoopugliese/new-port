import * as THREE from "three";

/** Soft, bright surfaces with restrained color and a broad highlight. */
export function createPlanetSurfaceMaterial(map) {
  map.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshStandardMaterial({
    map,
    roughness: 0.78,
    metalness: 0.14,
  });
  // Grade only the surface in linear space, without a fullscreen post-process.
  material.onBeforeCompile = shader => {
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <map_fragment>",
      `#include <map_fragment>
       float luminance = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
       diffuseColor.rgb = mix(vec3(luminance), diffuseColor.rgb, 0.78);`,
    );
  };
  return material;
}
