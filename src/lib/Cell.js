import { Shape } from "./Shape";

export class Cell {
  constructor(shapesList) {
    this.shapesList = shapesList || [];
    this.shapes = [];

    if (this.shapesList.length > 0) {
      for (let item of this.shapesList) {
        this.shapes.push({
          instance: new Shape(item[0], item[1] || 0),
          action: item[2] || "+",
        });
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
      // MOVE FOR ROTATION
      p5.translate(w * 0.5, h * 0.5);
      // SHAPE ROTATION
      p5.rotate(3.1416 * Number(shape.instance.rotation));
      // RESET POSITION
      p5.translate(-w * 0.5, -h * 0.5);

      shape.instance.print(p5, y, x, w, h, shape.action);

      // if (shape.action == "-") p5.beginClip({ invert: false });
      // shape.instance.print(p5, y, x, w, h);
      // if (shape.action == "-") p5.endClip();

      // if (shape.action == "-") p5.clip(shape.instance.print(p5, y, x, w, h));
      // else shape.instance.print(p5, y, x, w, h);

      // if (shape.action == "-") p5.erase();
      // shape.instance.print(p5, y, x, w, h);
      // if (shape.action == "-") p5.noErase();

      p5.translate(w * 0.5, h * 0.5);
      // SHAPE ROTATION
      p5.rotate(3.1416 * Number(shape.instance.rotation) * -1);
      // RESET POSITION
      p5.translate(-w * 0.5, -h * 0.5);

      // DEBUG CELLS
      // this.debug(p5, x, y, w, h);
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
