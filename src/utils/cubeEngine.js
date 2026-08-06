import { createCube } from "../utils/createCube";

export default class CubeEngine {
  constructor() {
    this.reset();
  }
  addMove(move) {
    this.history.push(move);

    this.moveCount++;
  }

  reset() {
    this.cubies = createCube();

    this.history = [];

    this.moveCount = 0;

    this.animating = false;
  }

  getCube() {
    return this.cubies;
  }

  getHistory() {
    return this.history;
  }

  getMoveCount() {
    return this.moveCount;
  }
}
