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
      [[["line-side"]], [["#"]], [["line-side", 1]]],
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
      [
        [["square"], ["arc", 1, "-"]],
        [["square"]],
        [["square"], ["arc", 1, "-"]],
      ], //1
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
