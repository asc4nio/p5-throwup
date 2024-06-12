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

    // a = new Character("o", {
    //   x: 100,
    //   y: 100,
    // });
    // a.print(tupLayer, "fill");
    // a.print(tupLayer, "outline");

    b = new ThrowUp(p5, "abc", {
      x: 200,
      y: 200,
    });
    b.print(tupLayer);

    p5.image(tupLayer, 0, 0);
  };

  p5.draw = () => {
    // fillLayer.clear();
    // outlineLayer.clear();
    // outlineLayer.strokeWeight(get(THICKNESS));
    // printString(
    //   p5,
    //   fillLayer,
    //   outlineLayer,
    //   get(STRING),
    //   get(CELL_SIZE),
    //   get(GAP),
    //   get(MARGIN)
    // );
    // p5.image(fillLayer, 0, 0);
    // p5.image(outlineLayer, 0, 0);
  };

  p5.windowResized = () => {
    // p5.resizeCanvas(800, 800);
  };
};
