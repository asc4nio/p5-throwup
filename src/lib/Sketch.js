import { ThrowUp } from "./ThrowUp";

export const mySketch = (p5) => {
  const size = {
    x: 800,
    y: 800,
  };
  let tupLayer;
  let a;

  p5.setup = () => {
    p5.createCanvas(size.x, size.y);
    p5.background(220);

    tupLayer = p5.createGraphics(size.x, size.y);
    tupLayer.translate(size.x / 2, size.y / 2);

    tupLayer.line(0, -size.y, 0, size.y);
    tupLayer.line(-size.x, 0, size.x, 0);

    // tupLayer.strokeWeight(4);
    // tupLayer.fill(0, 0);

    a = new ThrowUp("abcd", { x: 0, y: 0 });
    a.print(tupLayer);
    console.warn(a);

    p5.image(tupLayer, 0, 0);
  };

  p5.draw = () => {};

  p5.windowResized = () => {};
};
