import { SHAPES } from "./Data";

export class Shape {
  constructor(input, rotation) {
    this.input = input.split("-");
    this.shape = this.input[0];
    this.variant = this.input[1] || null;

    this.rotation = rotation || 0;
  }

  print(p5, x, y, w, h, action) {
    // if (action == "-") p5.beginClip({ invert: true });

    this.variant
      ? SHAPES[this.shape][this.variant](p5, x, y, w, h)
      : SHAPES[this.shape](p5, x, y, w, h);

    // if (this.variant) {
    //   SHAPES[this.shape][this.variant](p5, x, y, w, h);
    // } else {
    //   SHAPES[this.shape](p5, x, y, w, h);
    // }

    // if (action == "-") p5.endClip();
  }
}
