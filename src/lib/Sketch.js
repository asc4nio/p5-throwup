import { ThrowUp } from "./ThrowUp";
import { STATE } from "./stores/Store";
import { get } from "svelte/store";

export const mySketch = (p5) => {
  const size = {
    x: 800,
    y: 800,
  };
  let tup, tupLayer;
  // let string = get(STATE).string;

  let state = get(STATE);

  p5.setup = () => {
    p5.createCanvas(size.x, size.y);
    // p5.background(220);

    tupLayer = p5.createGraphics(size.x, size.y);

    // CENTER LAYER
    tupLayer.translate(size.x / 2, size.y / 2);
    // DEBUG CENTER LINES
    // tupLayer.line(0, -size.y, 0, size.y);
    // tupLayer.line(-size.x, 0, size.x, 0);

    tup = new ThrowUp(state.string, state.position, state.config);

    // p5.image(tupLayer, 0, 0);
  };

  p5.draw = () => {
    // if (get(STATE) !== state) {
    state = get(STATE);
    tup = new ThrowUp(state.string, state.position, state.config);
    // }

    // reset buffers
    p5.clear();
    tupLayer.clear();
    p5.background(220);

    tup.print(tupLayer);

    p5.image(tupLayer, 0, 0);
  };

  p5.windowResized = () => {};
};
