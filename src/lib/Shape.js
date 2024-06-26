export class Shape {
  #source = SHAPES;
  constructor(input, rotation) {
    this.input = input.split("-");
    this.inputShape = this.input[0];
    this.inputVariant = this.input[1] || null;

    this.rotation = rotation || 0;
  }

  print(p5, x, y, w, h) {
    this.inputVariant
      ? this.#source[this.inputShape][this.inputVariant](p5, x, y, w, h)
      : this.#source[this.inputShape](p5, x, y, w, h);
  }
}

const SHAPES = {
  "#": () => {
    return;
  },
  square: (p5, x, y, w, h) => {
    p5.rect(x, y, w, h);
  },
  point: {
    center: (p5, x, y, w, h) => {
      p5.point(x + w * 0.5, y + h * 0.5);
    },
    side: (p5, x, y, w, h) => {
      p5.point(x, y + h * 0.5);
    },
    corner: (p5, x, y, w, h) => {
      p5.point(x, y);
    },
  },
  line: {
    side: (p5, x, y, w, h) => {
      p5.line(x, y, x, y + h);
    },
    center: (p5, x, y, w, h) => {
      p5.line(x + w * 0.5, y, x + w * 0.5, y + h);
    },
  },
  arc: (p5, x, y, w, h) => {
    p5.arc(x + w, y + h, w * 2, h * 2, p5.PI * 1, p5.PI * 1.5);
  },
  arcInv: (p5, x, y, w, h) => {
    p5.beginClip({ invert: true });
    p5.circle(x + w, y + h, w * 2);
    p5.endClip();
    p5.rect(x, y, w, h);
  },
};
