export function createCubie(x, y, z, id) {
  return {
    id,

    position: [x, y, z],

    stickers: {
      right: x === 1 ? "R" : null,
      left: x === -1 ? "L" : null,

      up: y === 1 ? "U" : null,
      down: y === -1 ? "D" : null,

      front: z === 1 ? "F" : null,
      back: z === -1 ? "B" : null,
    },
  };
}
