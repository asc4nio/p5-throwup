import { ThrowUp } from "./ThrowUp";
import { Bang } from "./Shape";

import { STATE } from "./stores/Store";
import { get } from "svelte/store";

export const mySketch = (p5) => {
  const size = {
    x: 800,
    y: 800,
  };
  let tup, tupLayer;
  let b, bangLayer;
  // let string = get(STATE).string;

  let state = get(STATE);

  p5.setup = () => {
    p5.createCanvas(size.x, size.y);
    tupLayer = p5.createGraphics(size.x, size.y);
    bangLayer = p5.createGraphics(size.x, size.y);

    // CENTER LAYER
    tupLayer.translate(size.x / 2, size.y / 2);
    bangLayer.translate(size.x / 2, size.y / 2);

    // DEBUG CENTER LINES
    // tupLayer.line(0, -size.y, 0, size.y);
    // tupLayer.line(-size.x, 0, size.x, 0);

    b = new Bang(
      12,
      800,
      1,
      {
        x: 1.2,
        y: 0.5,
      },
      0.4
    );
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
    bangLayer.clear();

    p5.background(...state.config.backgroundColor);
    // p5.background(220);

    b.print(bangLayer);
    tup.print(tupLayer);

    p5.image(bangLayer, 0, 0);
    p5.image(tupLayer, 0, 0);
  };

  p5.windowResized = () => {};
};
