export function rotateRight(cubies) {
  return cubies.map((cubie) => {
    const [x, y, z] = cubie.position;

    if (x !== 1) return cubie;

    return {
      ...cubie,
      position: [x, -z, y],
      rotation: [
        cubie.rotation[0] + Math.PI / 2,
        cubie.rotation[1],
        cubie.rotation[2],
      ],
    };
  });
}
