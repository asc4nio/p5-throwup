import { STRING, CELL_SIZE, GAP, THICKNESS, MARGIN } from "./stores/AppStore";
import { get } from "svelte/store";

import { Character, ThrowUp } from "./ThrowUp";

export const mySketch = (p5) => {
  const size = {
    x: 800,
    y: 800,
  };
  let tupLayer;
  let a, b;

  p5.setup = () => {
    p5.createCanvas(size.x, size.y);
    p5.background(220);

    tupLayer = p5.createGraphics(size.x, size.y);
    tupLayer.translate(size.x / 2, size.y / 2);

    tupLayer.line(0, -size.y, 0, size.y);
    tupLayer.line(-size.x, 0, size.x, 0);

    // a = new Character("a", {
    //   x: -50,
    //   y: 50,
    // });
    // a.print(tupLayer, "fill");
    // a.print(tupLayer, "outline");

    b = new ThrowUp(p5, "rates", {
      x: 0,
      y: 0,
    });
    b.print(tupLayer);

    p5.image(tupLayer, 0, 0);
  };

  p5.draw = () => {};

  p5.windowResized = () => {
    // p5.resizeCanvas(800, 800);
  };
};
