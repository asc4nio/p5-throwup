import { writable } from "svelte/store";

export const STATE = writable({
  tupConfig: {
    string: "giorgia",
    position: { x: 0, y: 0 },
    rotation: 0,
    gap: -10,
  },
  charConfig: {
    cellSize: 30,
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
    style: {
      fill: {
        fill: [255, 0, 255],
        stroke: [255, 0, 255],
        strokeWeight: 1,
      },
      outline: {
        fill: [0, 0],
        stroke: [0, 0, 0],
        strokeWeight: 2,
      },
    },
  },
  bgConfig: {
    color: [50, 50, 50, 255],
  },
});
