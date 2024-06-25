import { Shape } from "./Shape";

export class Cell {
  #shapesList = [];
  constructor(shapesList) {
    this.#shapesList = shapesList;
    this.shapes = [];

    if (this.#shapesList.length > 0) {
      for (let item of this.#shapesList) {
        this.shapes.push(new Shape(item[0], item[1] || 0));
      }
    }
  }

  print(p5, x, y, w, h, style) {
    p5.push();

    p5.strokeJoin(p5.ROUND);

    p5.fill(...style.fill);
    p5.stroke(...style.stroke);
    p5.strokeWeight(style.strokeWeight);

    for (let shape of this.shapes) {
      p5.push();

      // SET ROTATION PIVOT
      p5.translate(w * 0.5, h * 0.5);
      p5.rotate(3.1416 * Number(shape.rotation));
      // RESET POSITION BEFORE PRINTING
      p5.translate(-w * 0.5, -h * 0.5);
      shape.print(p5, y, x, w, h);

      p5.pop();
    }

    p5.pop();
  }
  debug(p5, x, y, w, h) {
    p5.push();
    p5.stroke(255, 0, 0);
    p5.strokeWeight(1);
    p5.rect(x, y, w, h);
    p5.pop();
  }
}
