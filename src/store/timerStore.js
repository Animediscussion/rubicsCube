import { create } from "zustand";

export const useTimerStore = create((set) => ({
  seconds: 0,

  running: false,

  start() {
    set({ running: true });
  },

  stop() {
    set({ running: false });
  },

  reset() {
    set({
      seconds: 0,
      running: false,
    });
  },

  tick() {
    set((state) => ({
      seconds: state.seconds + 0.01,
    }));
  },
}));
