import { createCubie } from "./createCubie";

export function createCube() {
  const cube = [];

  let id = 0;

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        cube.push(createCubie(x, y, z, id++));
      }
    }
  }

  return cube;
}
