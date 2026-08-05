export function rotateStickersX(stickers) {
  return {
    right: stickers.right,
    left: stickers.left,

    up: stickers.front,

    back: stickers.up,

    down: stickers.back,

    front: stickers.down,
  };
}
