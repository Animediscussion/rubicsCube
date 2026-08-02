export function createCube() {
  const cubies = [];

  let id = 0;

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        cubies.push({
          id: id++,

          position: [x, y, z],

          rotation: [0, 0, 0],
        });
      }
    }
  }

  return cubies;
}