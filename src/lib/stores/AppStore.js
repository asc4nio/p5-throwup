import { writable } from "svelte/store";

const STRING = writable("abcdefghijklmnopqrstuvwxyz");
const THICKNESS = writable(2);
const MARGIN = writable(40);
const CELL_SIZE = writable({
  x: 30,
  y: 30,
});
const GAP = writable({
  x: 10,
  y: 10,
});

export { STRING, THICKNESS, MARGIN, CELL_SIZE, GAP };
