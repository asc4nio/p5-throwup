import { writable } from "svelte/store";

export const STATE = writable({
  string: "abcde",
  position: { x: 0, y: 0 },
  config: {
    cellSize: 30,
    gap: -10,
    transform: {
      translate: {
        x: 0,
        y: 0,
      },
      scale: {
        x: 1,
        y: 1,
      },
      rotate: 0,
      shear: {
        x: 0,
        y: 0.0,
      },
    },
    fillStyle: {
      fill: [255, 255, 0, 255],
      stroke: [0],
      strokeWeight: 0,
    },
    outlineStyle: {
      fill: [0, 0, 0, 0],
      stroke: [0, 0, 0, 255],
      strokeWeight: 6,
    },
    backgroundColor: [50, 50, 50, 255],
  },
});
