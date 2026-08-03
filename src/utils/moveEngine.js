import { rotateRight } from "./moves";

const moveEngine = {
  R: rotateRight,
  L: rotateLeft,
  U: rotateUp,
  D: rotateDown,
  F: rotateFront,
  B: rotateBack,
};

export default moveEngine;
