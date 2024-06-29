import { writable } from "svelte/store";

export const STATE = writable({
  size: { x: 540, y: 540 },
  text: "asca",
  gap: 0,
  tupTransform: {
    translate: { x: 0, y: 0 },
    scale: { x: 1, y: 1 },
    rotation: 0,
    shear: { x: 0, y: 0 },
  },
  charTransform: {
    translate: { x: 0, y: 0 },
    scale: { x: 1, y: 1 },
    rotation: 0,
    shear: { x: 0, y: 0 },
  },
  style: {
    fill: {
      fill: "#FFFF00FF",
      stroke: "#00000000",
      strokeWeight: 0,
    },
    outline: {
      fill: "#00000000",
      stroke: "#000000FF",
      strokeWeight: 2,
    },
    shadow: {
      enabled: true,
      position: { x: -10, y: 10 },
      style: {
        fill: "#000000FF",
        stroke: "#00000000",
        strokeWeight: 2,
      },
    },
  },
  background: {
    color: "#4f4f4fff",
    type: "wall",
  },
});
