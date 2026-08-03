import { create } from "zustand";
import { createCube } from "../utils/createCube";

export const useCubeStore = create((set) => ({
  cubies: createCube(),
  rotating: false,

  setCubies: (cubies) => set({ cubies }),

  setRotating: (value) => set({ rotating: value }),
}));
