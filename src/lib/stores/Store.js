import { writable } from "svelte/store";

export const STATE = writable({
  text: "asca",
  position: { x: 0, y: 0 },
  rotation: 0,
  gap: 0,
  charConfig: {
    cellSize: 50,
    style: {
      shadow: {
        enable: true,
        // color: [0, 0, 0],
        position: {
          x: -10,
          y: 20,
        },
      },
      fill: {
        fill: [255, 255, 255],
        stroke: [0],
        strokeWeight: 0,
      },
      outline: {
        fill: [0, 0],
        stroke: [0, 0, 0],
        strokeWeight: 4,
      },
    },
    transform: {
      translate: {
        x: 0,
        y: 0,
      },
      rotate: 0,
      scale: {
        x: 1,
        y: 1,
      },
      shear: {
        x: 0,
        y: 0,
      },
    },
  },
});
