const PI = 3.1416;

export const SHAPES = {
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
};
export const LETTERS = {
  a: {
    outline: [
      //0
      [
        [["arc"]],
        [["arc", PI * 0.5]],
        [["line-side"], ["line-side", PI * 0.5], ["line-side", PI * 1]],
      ],
      //1
      [[["line-side"]], [["point-corner", PI]], [["line-side", PI]]],
      //2
      [[["line-side"]], [["#"]], [["line-side", PI]]],
      //3
      [
        [["arc", PI * 1.5]],
        [["arc", PI * 1]],
        [["line-side"], ["line-side", PI * 1.5], ["line-side", PI * 1]],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["arc", PI * 0.5]], [["square"]]], //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["arc", PI * 1.5]], [["arc", PI * 1]], [["square"]]],
    ],
  },

  b: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", PI * 0.5], ["line-side", PI * 1]],
        [["arc"]],
        [["arc", PI * 0.5]],
      ],
      //1
      [[["line-side"]], [["point-side", PI * 2]], [["arc", PI]]],
      //2
      [[["line-side"]], [["point-side", PI * 2]], [["arc", PI * 0.5]]],
      //3
      [
        [["line-side"], ["line-side", PI * 1.5], ["line-side", PI * 1]],
        [["arc", PI * 1.5]],
        [["arc", PI * 1]],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["arc"]], [["arc", PI * 0.5]]],
      //1
      [[["square"]], [["square"]], [["arc", PI * 1]]],
      //2
      [[["square"]], [["square"]], [["arc", PI * 0.5]]],
      //3
      [[["square"]], [["arc", PI * 1.5]], [["arc", PI * 1]]],
    ],
  },

  c: {
    outline: [
      //0
      [
        [["arc"]],
        [["arc", PI * 0.5]],
        [["line-side"], ["line-side", PI * 0.5], ["line-side", PI * 1]],
      ],
      //1
      [[["line-side"]], [["line-side", PI * 1.5]], [["arc", PI]]],
      //2
      [[["line-side"]], [["#"]], [["arc", PI * 0.5]]],
      //3
      [
        [["arc", PI * 1.5]],
        [["arc", PI * 1]],
        [["line-side"], ["line-side", PI * 1.5], ["line-side", PI * 1]],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["arc", PI * 0.5]], [["square"]]], //1
      [[["square"]], [["square"]], [["arc", PI]]],
      //2
      [[["square"]], [["square"]], [["arc", PI * 0.5]]],
      //3
      [[["arc", PI * 1.5]], [["arc", PI * 1]], [["square"]]],
    ],
  },

  d: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", PI * 0.5], ["line-side", PI * 1]],
        [["arc"]],
        [["arc", PI * 0.5]],
      ],
      //1
      [[["line-side"]], [["point-corner", PI * 1.5]], [["line-side", PI]]],
      //2
      [[["line-side"]], [["#"]], [["line-side", PI]]],
      //3
      [
        [["line-side"], ["line-side", PI * 1.5], ["line-side", PI * 1]],
        [["arc", PI * 1.5]],
        [["arc", PI * 1]],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["arc"]], [["arc", PI * 0.5]]],
      //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["square"]], [["arc", PI * 1.5]], [["arc", PI * 1]]],
    ],
  },
};
