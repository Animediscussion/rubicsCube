import { create } from "zustand";
import { createCube } from "../utils/createCube";

export const useCubeStore = create((set) => ({
  cubies: createCube(),

  isAnimating: false,

  moveQueue: [],

  moveCount: 0,

  setCubies: (cubies) => set({ cubies }),

  setAnimating: (value) => set({ isAnimating: value }),

  addMove: (move) =>
    set((state) => ({
      moveQueue: [...state.moveQueue, move],
    })),

  popMove: () =>
    set((state) => ({
      moveQueue: state.moveQueue.slice(1),
    })),

  clearQueue: () =>
    set({
      moveQueue: [],
    }),

  increaseMoveCount: () =>
    set((state) => ({
      moveCount: state.moveCount + 1,
    })),
}));
