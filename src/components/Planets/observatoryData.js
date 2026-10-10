import {getPlanetData} from "../../utils/constants";

export const destinations = {
  jupiter: {eyebrow: "The gas giant", description: "Cloud bands, quiet moons, and a little room to wander.", color: "#e8ba8b"},
  saturn: {eyebrow: "A world with rings", description: "Take the scenic route around the rings.", color: "#ead1a2"},
  neptune: {eyebrow: "Into the blue", description: "A blue world at the edge of the familiar.", color: "#7ba7ff"},
  uranus: {eyebrow: "A different perspective", description: "Pale blue light. Delicate rings. A slower orbit.", color: "#9bdee1"},
  mars: {eyebrow: "The red planet", description: "Rust-colored terrain and two small companions.", color: "#ed9c7d"},
  pluto: {eyebrow: "Beyond the giants", description: "A small world with a whole system to explore.", color: "#d5c5b7"},
};

export function getMoons(planet) {
  const config = getPlanetData(planet.system);
  return [
    ...(config.moonTexturePath ? [{name: planet.moonName, size: config.moonGeometrySize, orbitRadius: config.orbitRadius}] : []),
    ...(config.extraMoons ?? []),
  ];
}
