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

const LETTERS = {
  " ": {
    outline: [
      //0
      [[["#"]]],
      //1
      [[["#"]]],
      //2
      [[["#"]]],
      //3
      [[["#"]]],
    ],
    fill: [
      //0
      [[["#"]]],
      //1
      [[["#"]]],

      //2
      [[["#"]]],
      //3
      [[["#"]]],
    ],
  },
  a: {
    outline: [
      //0
      [
        [["arc"]],
        [["arc", 0.5]],
        [["line-side"], ["line-side", 0.5], ["line-side", 1]],
      ],
      //1
      [[["line-side"]], [["point-corner", 1]], [["line-side", 1]]],
      //2
      [[["line-side"]], [["#"]], [["line-side", 1]]],
      //3
      [
        [["arc", 1.5]],
        [["arc", 1]],
        [["line-side"], ["line-side", 1.5], ["line-side", 1]],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["arc", 0.5]], [["square"]]], //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["arc", 1.5]], [["arc", 1]], [["square"]]],
    ],
  },

  b: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", 0.5], ["line-side", 1]],
        [["arc"]],
        [["arc", 0.5]],
      ],
      //1
      [[["line-side"]], [["point-side", 2]], [["arc", 1]]],
      //2
      [[["line-side"]], [["point-side", 2]], [["arc", 0.5]]],
      //3
      [
        [["line-side"], ["line-side", 1.5], ["line-side", 1]],
        [["arc", 1.5]],
        [["arc", 1]],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["arc"]], [["arc", 0.5]]],
      //1
      [[["square"]], [["square"]], [["arc", 1]]],
      //2
      [[["square"]], [["square"]], [["arc", 0.5]]],
      //3
      [[["square"]], [["arc", 1.5]], [["arc", 1]]],
    ],
  },

  c: {
    outline: [
      //0
      [
        [["arc"]],
        [["arc", 0.5]],
        [["line-side"], ["line-side", 0.5], ["line-side", 1]],
      ],
      //1
      [[["line-side"]], [["line-side"], ["line-side", 1.5]], [["arc", 1]]],
      //2
      [[["line-side"]], [["line-side"]], [["arc", 0.5]]],
      //3
      [
        [["arc", 1.5]],
        [["arc", 1]],
        [["line-side"], ["line-side", 1.5], ["line-side", 1]],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["arc", 0.5]], [["square"]]], //1
      [[["square"]], [["square"]], [["arc", 1]]],
      //2
      [[["square"]], [["square"]], [["arc", 0.5]]],
      //3
      [[["arc", 1.5]], [["arc", 1]], [["square"]]],
    ],
  },

  d: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", 0.5], ["line-side", 1]],
        [["arc"]],
        [["arc", 0.5]],
      ],
      //1
      [[["line-side"]], [["point-corner", 1.5]], [["line-side", 1]]],
      //2
      [[["line-side"]], [["#"]], [["line-side", 1]]],
      //3
      [
        [["line-side"], ["line-side", 1.5], ["line-side", 1]],
        [["arc", 1.5]],
        [["arc", 1]],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["arc"]], [["arc", 0.5]]],
      //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["square"]], [["arc", 1.5]], [["arc", 1]]],
    ],
  },

  e: {
    outline: [
      //0
      [
        [["arc"]],
        [["arc", 0.5]],
        [["line-side"], ["line-side", 0.5], ["line-side", 1]],
      ],
      //1
      [[["arc", 1.5]], [["arc", 0.5]], [["arc", 1]]],
      //2
      [[["arc"]], [["arc", 2]], [["arc", 0.5]]],
      //3
      [
        [["arc", 1.5]],
        [["arc", 1]],
        [["line-side"], ["line-side", 1.5], ["line-side", 1]],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["arc", 0.5]], [["square"]]],
      //1
      [[["arc", 1.5]], [["square"]], [["arc", 1]]],
      //2
      [[["arc"]], [["square"]], [["arc", 0.5]]],
      //3
      [[["arc", 1.5]], [["arc", 1]], [["square"]]],
    ],
  },

  f: {
    outline: [
      //0
      [
        [["arc"]],
        [["arc", 0.5]],
        [["line-side"], ["line-side", 0.5], ["line-side", 1]],
      ],
      //1
      [[["line-side"]], [["arc", 1.5]], [["arc", 1]]],
      //2
      [
        [["line-side"]],
        [],
        [
          ["line-side", 1],
          ["line-side", 0.5],
          ["line-side", 1.5],
        ],
      ],
      //3
      [
        [["line-side"], ["line-side", 1.5]],
        [
          ["line-side", 1.5],
          ["line-side", 1],
        ],
        [["#"]],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["arc", 0.5]], [["square"]]],
      //1
      [[["square"]], [["square"]], [["arc", 1]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["square"]], [["square"]], [["#"]]],
      // [[["square"]], [["square"]], [["square"], ["arc",  1.5, "-"]]],
    ],
  },

  g: {
    outline: [
      //0
      [[["arc"]], [["arc", 0.5]], [["#"]]],
      //1
      [
        [["line-side"]],
        [["line-side"], ["line-side", 0.5]],
        [
          ["line-side", 1],
          ["line-side", 0.5],
        ],
      ],
      //2
      [[["line-side"]], [["line-side"], ["arc"]], [["line-side", 1]]],
      //3
      [
        [["arc", 1.5]],
        [["arc", 1]],
        [["line-side"], ["line-side", 1.5], ["line-side", 1]],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["arc", 0.5]], [["#"]]], //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["arc", 1.5]], [["arc", 1]], [["square"]]],
    ],
  },

  h: {
    outline: [
      //0
      [[["line-side"], ["line-side", 0.5], ["line-side", 1]], [["#"]], [["#"]]],
      //1
      [[["line-side"]], [["line-side"], ["arc"]], [["arc", 0.5]]],
      //2
      [[["line-side"]], [["#"]], [["line-side", 1]]],
      //3
      [
        [["line-side"], ["line-side", 1.5]],
        [["line-side"], ["line-side", 1.5]],
        [
          ["line-side", 1.5],
          ["line-side", 1],
        ],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["#"]], [["#"]]], //1
      [[["square"]], [["arc"]], [["arc", 0.5]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["square"]], [["square"]], [["square"]]],
    ],
  },
  H: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", 0.5]],
        [["line-side", 0.5]],
        [["line-side"], ["line-side", 0.5], ["line-side", 1]],
      ],
      //1
      [[["line-side"]], [["#"]], [["line-side", 1]]],
      //2
      [[["line-side"]], [["#"]], [["line-side", 1]]],
      //3
      [
        [["line-side"], ["line-side", 1.5]],
        [["line-side", 1.5]],
        [["line-side"], ["line-side", 1.5], ["line-side", 1]],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["square"]], [["square"]]], //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["square"]], [["square"]], [["square"]]],
    ],
  },

  i: {
    outline: [
      //0
      [[["arc"]], [["arc", 0.5]]],
      //1
      [[["arc", 1.5]], [["arc", 1]]],
      //2
      [[["arc"]], [["arc", 0.5]]],
      //3
      [
        [["line-side"], ["line-side", 1.5]],
        [
          ["line-side", 1.5],
          ["line-side", 1],
        ],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["arc", 0.5]]],
      //1
      [[["arc", 1.5]], [["arc", 1]]],
      //2
      [[["arc"]], [["arc", 0.5]]],
      //3
      [[["square"]], [["square"]]],
    ],
  },

  j: {
    outline: [
      //0
      [[["#"]], [["arc"]], [["arc", 0.5]]],
      //1
      [[["arc"]], [["arc", 0.5]], [["line-side", 1]]],
      //2
      [[["line-side"]], [["#"]], [["line-side", 1]]],
      //3
      [
        [["arc", 1.5]],
        [["line-side", 1.5]],
        [
          ["line-side", 1.5],
          ["line-side", 1],
        ],
      ],
    ],
    fill: [
      //0
      [[["#"]], [["arc"]], [["arc", 0.5]]], //1
      [[["arc"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["arc", 1.5]], [["square"]], [["square"]]],
    ],
  },

  k: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", 0.5], ["line-side", 1]],
        [["line-side"], ["line-side", 0.5]],
        [
          ["line-side", 0.5],
          ["line-side", 1],
        ],
      ],
      //1
      [[["line-side"]], [["#"]], [["arc", 1]]],
      //2
      [[["line-side"]], [["#"]], [["arc", 0.5]]],
      //3
      [
        [["line-side"], ["line-side", 1.5], ["line-side", 1]],
        [["line-side", 1.5]],
        [
          ["line-side", 1],
          ["line-side", 1.5],
        ],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["square"]], [["square"]]],
      //1
      [[["square"]], [["square"]], [["arc", 1]]],
      //2
      [[["square"]], [["square"]], [["arc", 0.5]]],
      //3
      [[["square"]], [["square"]], [["square"]]],
    ],
  },

  l: {
    outline: [
      //0
      [[["arc"]], [["arc", 0.5]], [["line-side", 1.5]]],

      //1
      [[["line-side"]], [["#"]], [["line-side", 1]]],
      //2
      [[["line-side"]], [["#"]], [["line-side", 1]]],
      //3
      [
        [["arc", 1.5]],
        [["line-side", 1.5]],
        [
          ["line-side", 1.5],
          ["line-side", 1],
        ],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["arc", 0.5]], [["#"]]],
      //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["arc", 1.5]], [["square"]], [["square"]]],
    ],
  },

  m: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", 0.5]],
        [["line-side", 0.5], ["line-center"]],
        [
          ["line-side", 0.5],
          ["line-side", 1],
        ],
      ],
      //1
      [[["line-side"]], [["#"]], [["line-side", 1]]],
      //2
      [[["line-side"]], [["line-side"]], [["line-side"], ["line-side", 1]]],
      //3
      [
        [["line-side"], ["line-side", 1.5]],
        [["line-side", 1.5], ["line-side"]],
        [["line-side"], ["line-side", 1.5], ["line-side", 1]],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["square"]], [["square"]]], //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["square"]], [["square"]], [["square"]]],
    ],
  },

  n: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", 0.5]],
        [["arc"], ["line-side"]],
        [["arc", 0.5]],
      ],
      //1
      [[["line-side"]], [["#"]], [["line-side", 1]]],
      //2
      [[["line-side"]], [["line-side"]], [["line-side", 1]]],
      //3
      [
        [["line-side"], ["line-side", 1.5]],
        [["line-side", 1.5], ["line-side"]],
        [
          ["line-side", 1.5],
          ["line-side", 1],
        ],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["arc"]], [["arc", 0.5]]], //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["square"]], [["square"]], [["square"]]],
    ],
  },

  o: {
    outline: [
      //0
      [[["arc"]], [["line-side", 0.5]], [["arc", 0.5]]],
      //1
      [[["line-side"]], [["#"]], [["line-side", 1]]],
      //2
      [[["line-side"]], [["point-corner", 0.5]], [["line-side", 1]]],
      //3
      [[["arc", 1.5]], [["line-side", 1.5]], [["arc", 1]]],
    ],
    fill: [
      //0
      [[["arc"]], [["square"]], [["arc", 0.5]]], //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["arc", 1.5]], [["square"]], [["arc", 1]]],
    ],
  },

  p: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", 0.5], ["line-side", 1]],
        [["arc"]],
        [["arc", 0.5]],
      ],
      //1
      [[["line-side"]], [["point-corner", 1.5]], [["line-side", 1]]],
      //2
      [[["line-side"]], [["#"]], [["arc", 1]]],
      //3
      [
        [["line-side"], ["line-side", 1.5]],
        [
          ["line-side", 1],
          ["line-side", 1.5],
        ],
        [["#"]],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["arc"]], [["arc", 0.5]]],
      //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["arc", 1]]],
      //3
      [[["square"]], [["square"]], [["#"]]],
    ],
  },

  q: {
    outline: [
      //0
      [[["arc"]], [["arc", 0.5]], [["#"]]],
      //1
      [[["line-side"]], [["line-side", 1]], [["#"]]],
      //2
      [[["line-side"]], [["#"]], [["arc", 0.5]]],
      //3
      [
        [["arc", 1.5]],
        [["arc", 1]],
        [["line-side"], ["line-side", 1], ["line-side", 1.5]],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["arc", 0.5]], [["#"]]], //1
      [[["square"]], [["square"]], [["#"]]],
      //2
      [[["square"]], [["square"]], [["arc", 0.5]]],
      //3
      [[["arc", 1.5]], [["arc", 1]], [["square"]]],
    ],
  },

  r: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", 0.5], ["line-side", 1]],
        [["arc"]],
        [["arc", 0.5]],
      ],
      //1
      [[["line-side"]], [["point-corner", 1.5]], [["arc", 1]]],
      //2
      [[["line-side"]], [["#"]], [["arc", 0.5]]],
      //3
      [
        [["line-side"], ["line-side", 1.5]],
        [["line-side"], ["line-side", 1.5]],
        [
          ["line-side", 1],
          ["line-side", 1.5],
        ],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["arc"]], [["arc", 0.5]]],
      //1
      [[["square"]], [["square"]], [["arc", 1]]],
      //2
      [[["square"]], [["square"]], [["arc", 0.5]]],
      //3
      [[["square"]], [["square"]], [["square"]]],
    ],
  },

  s: {
    outline: [
      //0
      [
        [["arc"]],
        [["arc", 0.5]],
        [["line-side"], ["line-side", 0.5], ["line-side", 1]],
      ],
      //1
      [
        [["line-side"]],
        [["arc"]],
        [
          ["line-side", 1],
          ["arc", 0.5],
        ],
      ],
      //2
      [[["line-side"], ["arc", 1.5]], [["arc", 1]], [["line-side", 1]]],
      //3
      [
        [["line-side"], ["line-side", 1], ["line-side", 1.5]],
        [["arc", 1.5]],
        [["arc", 1]],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["arc", 0.5]], [["square"]]], //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["square"]], [["arc", 1.5]], [["arc", 1]]],
    ],
  },

  t: {
    outline: [
      //0
      [
        [["arc", 1]],
        [["line-side", 0.5]],
        [["line-side"], ["arc", 1], ["line-side", 1]],
      ],
      //1
      [[["line-side"]], [["#"]], [["line-side", 1]]],
      //2
      [
        [["arc"], ["line-side", 0.5]],
        [["arc"]],
        [
          ["line-side", 0.5],
          ["arc", 0.5],
        ],
      ],
      //3
      [
        [["arc", 1.5]],
        [["arc", 1]],
        [["line-side"], ["line-side", 1], ["line-side", 1.5]],
      ],
    ],
    fill: [
      //0
      [[["arcInv", 1]], [["square"]], [["arcInv", 1]]],
      // [[["arcInv", 1]], [["square"]], [["arc", 1, "-"], ["square"]]],
      //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["arc"]], [["square"]], [["arc", 0.5]]],
      //3
      [[["arc", 1.5]], [["arc", 1]], [["square"]]],
    ],
  },

  u: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", 0.5], ["line-side", 1]],
        [["arc"]],
        [["arc", 0.5]],
      ],
      //1
      [[["line-side"], ["line-side", 1]], [["#"]], [["line-side", 1]]],
      //2
      [[["line-side"]], [["#"]], [["line-side", 1]]],
      //3
      [[["arc", 1.5]], [["line-side", 1.5]], [["arc", 1]]],
    ],
    fill: [
      //0
      [[["square"]], [["arc"]], [["arc", 0.5]]], //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["arc", 1.5]], [["square"]], [["arc", 1]]],
    ],
  },

  v: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", 0.5]],
        [
          ["line-side", 0.5],
          ["line-side", 1],
        ],
        [
          ["line-side", 0.5],
          ["line-side", 1],
        ],
      ],
      //1
      [[["line-side"]], [["line-side", 1]], [["line-side", 1]]],
      //2
      [[["line-side"]], [["#"]], [["line-side", 1]]],
      //3
      [[["line-side"], ["line-side", 1.5]], [["line-side", 1.5]], [["arc", 1]]],
    ],
    fill: [
      //0
      [[["square"]], [["square"]], [["square"]]], //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["square"]], [["square"]], [["arc", 1]]],
    ],
  },

  w: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", 0.5]],
        [["line-side", 0.5], ["line-side"], ["line-side", 1]],
        [
          ["line-side", 0.5],
          ["line-side", 1],
        ],
      ],
      //1
      [[["line-side"]], [["#"]], [["line-side", 1]]],
      //2
      [[["line-side"]], [["#"]], [["line-side", 1]]],
      //3
      [[["arc", 1.5]], [["line-side", 1.5], ["line-center"]], [["arc", 1]]],
    ],
    fill: [
      //0
      [[["square"]], [["square"]], [["square"]]], //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["arc", 1.5]], [["square"]], [["arc", 1]]],
    ],
  },

  x: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", 0.5]],
        [["line-side", 0.5], ["line-center"]],
        [
          ["line-side", 0.5],
          ["line-side", 1],
        ],
      ],
      //1
      [[["arc", 1.5]], [["#"]], [["arc", 1]]],
      //2
      [[["arc"]], [["#"]], [["arc", 0.5]]],
      //3
      [
        [["line-side"], ["line-side", 1.5]],
        [["line-side", 1.5], ["line-center"]],
        [
          ["line-side", 1.5],
          ["line-side", 1],
        ],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["square"]], [["square"]]], //1
      [[["arc", 1.5]], [["square"]], [["arc", 1]]],
      //2
      [[["arc"]], [["square"]], [["arc", 0.5]]],
      //3
      [[["square"]], [["square"]], [["square"]]],
    ],
  },

  y: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", 0.5]],
        [["line-side", 0.5]],
        [["line-side"], ["line-side", 0.5], ["line-side", 1]],
      ],
      //1
      [[["line-side"]], [["#"]], [["line-side"], ["line-side", 1]]],
      //2
      [[["arc", 1.5]], [["#"]], [["line-side", 1]]],
      //3
      [
        [["line-side"], ["line-side", 0.5], ["line-side", 1.5]],
        [
          ["line-side", 1.5],
          ["line-side", 0.5],
        ],
        [["arc", 1]],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["square"]], [["square"]]], //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["arc", 1.5]], [["square"]], [["square"]]],
      //3
      [[["square"]], [["square"]], [["arc", 1]]],
    ],
  },

  z: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", 0.5]],
        [["line-side", 0.5]],
        [
          ["line-side", 0.5],
          ["line-side", 1],
        ],
      ],
      //1
      [[["line-side"], ["arc"]], [["arc", 0.5]], [["line-side", 1]]],
      //2
      [
        [["line-side"]],
        [["arc", 1.5]],
        [
          ["arc", 1],
          ["line-side", 1],
        ],
      ],
      //3
      [
        [["line-side"], ["line-side", 1.5]],
        [["line-side", 1.5]],
        [
          ["line-side", 1.5],
          ["line-side", 1],
        ],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["square"]], [["square"]]], //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["square"]], [["square"]], [["square"]]],
    ],
  },

  /*
    A: {
      outline: [
        //0
        [
          [["line-side"], ["line-side",  0.5], ["line-side",  1]],
          [["arc"]],
          [["arc",  0.5]],
        ],
        //1
        [[["line-side"]], [["#"]], [["line-side", 1]]],
        //2
        [[["line-side"]], [["point-corner"]], [["line-side", 1]]],
        //3
        [
          [["line-side"], ["line-side",  1.5], ["line-side",  1]],
          [["line-side",  1.5]],
          [
            ["line-side",  1.5],
            ["line-side",  1],
          ],
        ],
      ],
      fill: [
        //0
        [[["square"]], [["arc"]], [["arc",  0.5]]],
        //1
        [[["square"]], [["square"]], [["square"]]],
        //2
        [[["square"]], [["square"]], [["square"]]],
        //3
        [[["square"]], [["square"]], [["square"]]],
      ],
    },
      b: {
      outline: [
        //0
        [
          [["line-side"], ["line-side",  0.5], ["line-side",  1]],
          [["#"]],
          [["#"]],
        ],
        //1
        [[["line-side"]], [["line-side"], ["arc"]], [["arc",  0.5]]],
        //2
        [[["line-side"]], [["point-side"]], [["line-side", 1]]],
        //3
        [
          [["line-side"], ["line-side",  1.5], ["line-side",  1]],
          [["arc",  1.5]],
          [["arc",  1]],
        ],
      ],
      fill: [
        //0
        [[["square"]], [["#"]], [["#"]]],
  
        //1
        [[["square"]], [["arc"]], [["arc",  0.5]]],
        //2
        [[["square"]], [["square"]], [["square"]]],
        //3
        [[["square"]], [["arc",  1.5]], [["arc",  1]]],
      ],
    },
    */
};

export class Character {
  #defStyle = {
    fill: {
      fill: "#FFFF00",
      stroke: "#000000",
      strokeWeight: 0,
    },
    outline: {
      fill: "#00000000",
      stroke: "#000000",
      strokeWeight: 4,
    },
    shadow: {
      enabled: true,
      position: { x: 30, y: 30 },
      style: {
        fill: "#000000FF",
        stroke: "#00000000",
        strokeWeight: 2,
      },
    },
  };

  constructor(_id, _size) {
    this.id = _id;
    this.cellSize = _size || 30;

    this.fillCells = [];
    this.outlineCells = [];

    this.width = 0;
    this.height = 0;

    this.transform = {
      translate: { x: 0, y: 0 },
      scale: { x: 1, y: 1 },
      rotation: 0,
      shear: { x: 0, y: 0 },
    };

    this.init();
  }

  init() {
    this.fillCells = this.createLayer(LETTERS[this.id].fill);
    this.outlineCells = this.createLayer(LETTERS[this.id].outline);

    this.width = this.outlineCells[0].length * this.cellSize;
    this.height = this.outlineCells.length * this.cellSize;

    // //console.warn(this.width, this.height);
  }

  createShape(_input, _rotation) {
    let input = _input.split("-");

    let inputShape = input[0];
    let inputVariant = input[1] || null;

    let rotation = _rotation || 0;

    let shape = {
      print: (p5, x, y, w, h) => {
        inputVariant
          ? SHAPES[inputShape][inputVariant](p5, x, y, w, h)
          : SHAPES[inputShape](p5, x, y, w, h);
      },
      rotation,
    };

    return shape;
  }
  createCell(_cellData) {
    let cell = [];
    if (_cellData.length > 0) {
      for (let item of _cellData) {
        let shape = this.createShape(item[0], item[1] || 0);
        cell.push(shape);
      }
    }
    return cell;
  }
  createLayer(_charData) {
    let data = _charData;
    let cells = [];
    for (let rowItem of data) {
      let row = [];
      for (let shapesList of rowItem) {
        // let item = new Cell(shapesList);
        let item = this.createCell(shapesList);
        row = [...row, item];
      }
      cells = [...cells, row];
    }

    // //console.log(cells);

    return cells;
  }

  print(_p5, _style) {
    let style = _style || this.#defStyle;

    if (style.shadow.enabled) {
      _p5.push();
      // _p5.fill(style.shadow.style.fill);
      // _p5.stroke(style.shadow.style.stroke);
      // _p5.strokeWeight(style.shadow.style.strokeWeight);

      _p5.translate(style.shadow.position.x, style.shadow.position.y);
      this.printLayer(_p5, this.fillCells, style.shadow.style);

      // _p5.ellipse(0, 0, this.width, this.height);
      _p5.pop();
    }

    this.printLayer(_p5, this.fillCells, style.fill);
    this.printLayer(_p5, this.outlineCells, style.outline);
  }

  printLayer(_p5, _data, _style) {
    let printPos = {
      x: 0,
      y: 0,
    };

    _p5.push();

    // _p5.translate(-this.width / 2, -this.height / 2);

    for (let y = 0; y < _data.length; y++) {
      let currentRow = _data[y];

      for (let x = 0; x < currentRow.length; x++) {
        let currentCell = currentRow[x];

        for (let shape of currentCell) {
          //   //console.log(shape);
          _p5.push();

          _p5.fill(_style.fill);
          _p5.stroke(_style.stroke);
          _p5.strokeWeight(_style.strokeWeight);

          this.applyTransform(_p5);
          _p5.translate(-this.width / 2, -this.height / 2);

          _p5.translate(printPos.x, printPos.y);

          // SET ROTATION PIVOT
          _p5.translate(this.cellSize * 0.5, this.cellSize * 0.5);
          // ROTATE
          _p5.rotate(3.1416 * Number(shape.rotation));
          // RESET POSITION BEFORE PRINTING
          _p5.translate(-this.cellSize * 0.5, -this.cellSize * 0.5);

          shape.print(_p5, 0, 0, this.cellSize, this.cellSize);

          _p5.pop();
        }

        // UPDATE PRINT POSITION
        printPos.x += this.cellSize;
        if (x == currentRow.length - 1) {
          printPos.x = 0;
          printPos.y += this.cellSize;
        }

        // _p5.circle(0, 0, 10);
      }
    }

    _p5.pop();
  }
  applyTransform(_p5) {
    _p5.translate(this.transform.translate.x, this.transform.translate.y);
    _p5.shearX(this.transform.shear.x);
    _p5.shearY(this.transform.shear.y);
    _p5.rotate(this.transform.rotation);
    // _p5.rotate(3.1416 * this.transform.rotation);
    _p5.scale(this.transform.scale.x, this.transform.scale.y);
  }
  updateTransform(_transform) {
    this.transform = _transform;
  }
}

export class ThrowUp {
  constructor(_string) {
    this.string = _string;

    this.width = 0;
    this.gap = 0;

    this.transform = {
      translate: { x: 0, y: 0 },
      scale: { x: 1, y: 1 },
      rotation: 0,
      shear: { x: 0, y: 0 },
    };

    this.init();
  }

  init(_string) {
    this.characters = [];

    let string = _string || this.string;

    let splittedString = string.split("");

    for (let i = 0; i < splittedString.length; i++) {
      let character = new Character(splittedString[i]);

      // PATCH FOR 2 and 4 COLS CHARACTERS
      //   if (character.width == this.charConfig.cellSize * 2) {
      //     character.position.x -= this.charConfig.cellSize;
      //   } else if (character.width == this.charConfig.cellSize * 4) {
      //     character.position.x += this.charConfig.cellSize;
      //   }

      // ADD CHARACTER TO LIST
      this.characters = [...this.characters, character];
    }

    this.updateWidth();
  }

  updateWidth() {
    this.width = 0;
    for (let char of this.characters) {
      this.width += char.width + this.gap;
    }
  }

  print(_p5, _style) {
    // this.updateWidth();
    let printPos = {
      x: 0,
      y: 0,
    };

    // print each Character
    _p5.push();

    this.applyTransform(_p5);

    _p5.translate(
      this.width / 2 - this.characters[this.characters.length - 1].width * 0.5,
      0
    );

    // _p5.translate(this.width / 2, 0);

    for (let i = 0; i < this.characters.length; i++) {
      _p5.translate(-this.gap, 0);
      _p5.push();

      _p5.translate(printPos.x - this.gap, printPos.y);
      // PRINT FROM LAST TO FIRST
      let invertedIndex = this.characters.length - 1 - i;

      this.characters[invertedIndex].print(_p5, _style);

      // printpos has to increase half this char with + half next

      if (this.characters[invertedIndex - 1]) {
        let step =
          (this.characters[invertedIndex].width +
            this.characters[invertedIndex - 1].width) /
          2;

        //console.warn(step);

        printPos.x -= step;
      }

      // if (this.characters[invertedIndex - 1]) {
      //     let step =
      //   printPos.x -= this.characters[invertedIndex - 1].width;
      // }

      //   printPos.x -= this.characters[invertedIndex].width;

      _p5.pop();
    }
    _p5.pop();
  }

  applyTransform(_p5) {
    _p5.translate(this.transform.translate.x, this.transform.translate.y);
    _p5.shearX(this.transform.shear.x);
    _p5.shearY(this.transform.shear.y);
    _p5.rotate(this.transform.rotation);
    // _p5.rotate(3.1416 * this.transform.rotation);
    _p5.scale(this.transform.scale.x, this.transform.scale.y);
  }

  updateTransform(_tupTransform, _charTransform) {
    this.transform = _tupTransform;

    for (let char of this.characters) {
      char.updateTransform(_charTransform);
    }
  }

  updateGap(_gap) {
    this.gap = _gap;
    this.updateWidth();
  }
}
