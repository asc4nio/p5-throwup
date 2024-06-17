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
      [
        [["line-side"]],
        [["line-side"], ["line-side", PI * 1.5]],
        [["arc", PI]],
      ],
      //2
      [[["line-side"]], [["line-side"]], [["arc", PI * 0.5]]],
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

  e: {
    outline: [
      //0
      [
        [["arc"]],
        [["arc", PI * 0.5]],
        [["line-side"], ["line-side", PI * 0.5], ["line-side", PI * 1]],
      ],
      //1
      [[["arc", PI * 1.5]], [["arc", PI * 0.5]], [["arc", PI]]],
      //2
      [[["arc"]], [["arc", PI * 2]], [["arc", PI * 0.5]]],
      //3
      [
        [["arc", PI * 1.5]],
        [["arc", PI * 1]],
        [["line-side"], ["line-side", PI * 1.5], ["line-side", PI * 1]],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["arc", PI * 0.5]], [["square"]]],
      //1
      [[["arc", PI * 1.5]], [["square"]], [["arc", PI]]],
      //2
      [[["arc"]], [["square"]], [["arc", PI * 0.5]]],
      //3
      [[["arc", PI * 1.5]], [["arc", PI * 1]], [["square"]]],
    ],
  },

  f: {
    outline: [
      //0
      [
        [["arc"]],
        [["arc", PI * 0.5]],
        [["line-side"], ["line-side", PI * 0.5], ["line-side", PI * 1]],
      ],
      //1
      [[["line-side"]], [["arc", PI * 1.5]], [["arc", PI]]],
      //2
      [
        [["line-side"]],
        [],
        [
          ["line-side", PI],
          ["line-side", PI * 0.5],
          ["line-side", PI * 1.5],
        ],
      ],
      //3
      [
        [["line-side"], ["line-side", PI * 1.5]],
        [
          ["line-side", PI * 1.5],
          ["line-side", PI],
        ],
        [["#"]],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["arc", PI * 0.5]], [["square"]]],
      //1
      [[["square"]], [["square"]], [["arc", PI]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["square"]], [["square"]], [["#"]]],
      // [[["square"]], [["square"]], [["square"], ["arc", PI * 1.5, "-"]]],
    ],
  },

  g: {
    outline: [
      //0
      [[["arc"]], [["arc", PI * 0.5]], [["#"]]],
      //1
      [
        [["line-side"]],
        [["line-side"], ["line-side", PI * 0.5]],
        [
          ["line-side", PI],
          ["line-side", PI * 0.5],
        ],
      ],
      //2
      [[["line-side"]], [["line-side"], ["arc"]], [["line-side", PI * 1]]],
      //3
      [
        [["arc", PI * 1.5]],
        [["arc", PI * 1]],
        [["line-side"], ["line-side", PI * 1.5], ["line-side", PI * 1]],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["arc", PI * 0.5]], [["#"]]], //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["arc", PI * 1.5]], [["arc", PI * 1]], [["square"]]],
    ],
  },

  h: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", PI * 0.5]],
        [["line-side", PI * 0.5]],
        [["line-side"], ["line-side", PI * 0.5], ["line-side", PI * 1]],
      ],
      //1
      [[["line-side"]], [["#"]], [["line-side", PI]]],
      //2
      [[["line-side"]], [["#"]], [["line-side", PI]]],
      //3
      [
        [["line-side"], ["line-side", PI * 1.5]],
        [["line-side", PI * 1.5]],
        [["line-side"], ["line-side", PI * 1.5], ["line-side", PI * 1]],
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
      [[["arc"]], [["line-side", PI * 0.5]], [["arc", PI * 0.5]]],
      //1
      [[["arc", PI * 1.5]], [["line-side", PI * 1.5]], [["arc", PI]]],
      //2
      [[["arc"]], [["line-side", PI * 0.5]], [["arc", PI * 0.5]]],
      //3
      [
        [["line-side"], ["line-side", PI * 1.5]],
        [["line-side", PI * 1.5]],
        [
          ["line-side", PI * 1.5],
          ["line-side", PI * 1],
        ],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["square"]], [["arc", PI * 0.5]]],
      //1
      [[["arc", PI * 1.5]], [["square"]], [["arc", PI]]],
      //2
      [[["arc"]], [["square"]], [["arc", PI * 0.5]]],
      //3
      [[["square"]], [["square"]], [["square"]]],
    ],
  },

  // i: {
  //   outline: [
  //     //0
  //     [[["arc"]], [["arc", PI * 0.5]]],
  //     //1
  //     [[["arc", PI * 1.5]], [["arc", PI]]],
  //     //2
  //     [[["arc"]], [["arc", PI * 0.5]]],
  //     //3
  //     [
  //       [["line-side"], ["line-side", PI * 1.5]],
  //       [
  //         ["line-side", PI * 1.5],
  //         ["line-side", PI * 1],
  //       ],
  //     ],
  //   ],
  //   fill: [
  //     //0
  //     [[["arc"]], [["arc", PI * 0.5]]],
  //     //1
  //     [[["arc", PI * 1.5]], [["arc", PI]]],
  //     //2
  //     [[["arc"]], [["arc", PI * 0.5]]],
  //     //3
  //     [[["square"]], [["square"]]],
  //   ],
  // },

  j: {
    outline: [
      //0
      [[["#"]], [["arc"]], [["arc", PI * 0.5]]],
      //1
      [[["arc"]], [["arc", PI * 0.5]], [["line-side", PI]]],
      //2
      [[["line-side"]], [["#"]], [["line-side", PI]]],
      //3
      [
        [["arc", PI * 1.5]],
        [["line-side", PI * 1.5]],
        [
          ["line-side", PI * 1.5],
          ["line-side", PI * 1],
        ],
      ],
    ],
    fill: [
      //0
      [[["#"]], [["arc"]], [["arc", PI * 0.5]]], //1
      [[["arc"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["arc", PI * 1.5]], [["square"]], [["square"]]],
    ],
  },

  k: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", PI * 0.5], ["line-side", PI * 1]],
        [["line-side"], ["line-side", PI * 0.5]],
        [
          ["line-side", PI * 0.5],
          ["line-side", PI],
        ],
      ],
      //1
      [[["line-side"]], [["#"]], [["arc", PI]]],
      //2
      [[["line-side"]], [["#"]], [["arc", PI * 0.5]]],
      //3
      [
        [["line-side"], ["line-side", PI * 1.5], ["line-side", PI * 1]],
        [["line-side", PI * 1.5]],
        [
          ["line-side", PI],
          ["line-side", PI * 1.5],
        ],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["square"]], [["square"]]],
      //1
      [[["square"]], [["square"]], [["arc", PI * 1]]],
      //2
      [[["square"]], [["square"]], [["arc", PI * 0.5]]],
      //3
      [[["square"]], [["square"]], [["square"]]],
    ],
  },

  l: {
    outline: [
      //0
      [[["arc"]], [["arc", PI * 0.5]], [["line-side", PI * 1.5]]],

      //1
      [[["line-side"]], [["#"]], [["line-side", PI]]],
      //2
      [[["line-side"]], [["#"]], [["line-side", PI]]],
      //3
      [
        [["arc", PI * 1.5]],
        [["line-side", PI * 1.5]],
        [
          ["line-side", PI * 1.5],
          ["line-side", PI * 1],
        ],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["arc", PI * 0.5]], [["#"]]],
      //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["arc", PI * 1.5]], [["square"]], [["square"]]],
    ],
  },

  m: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", PI * 0.5]],
        [["line-side", PI * 0.5], ["line-center"]],
        [
          ["line-side", PI * 0.5],
          ["line-side", PI * 1],
        ],
      ],
      //1
      [[["line-side"]], [["#"]], [["line-side", PI]]],
      //2
      [[["line-side"]], [["line-side"]], [["line-side"], ["line-side", PI]]],
      //3
      [
        [["line-side"], ["line-side", PI * 1.5]],
        [["line-side", PI * 1.5], ["line-side"]],
        [["line-side"], ["line-side", PI * 1.5], ["line-side", PI * 1]],
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
        [["line-side"], ["line-side", PI * 0.5]],
        [["arc"], ["line-side"]],
        [["arc", PI * 0.5]],
      ],
      //1
      [[["line-side"]], [["#"]], [["line-side", PI]]],
      //2
      [[["line-side"]], [["line-side"]], [["line-side", PI]]],
      //3
      [
        [["line-side"], ["line-side", PI * 1.5]],
        [["line-side", PI * 1.5], ["line-side"]],
        [
          ["line-side", PI * 1.5],
          ["line-side", PI * 1],
        ],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["arc"]], [["arc", PI * 0.5]]], //1
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
      [[["arc"]], [["line-side", PI * 0.5]], [["arc", PI * 0.5]]],
      //1
      [[["line-side"]], [["#"]], [["line-side", PI]]],
      //2
      [[["line-side"]], [["#"]], [["line-side", PI]]],
      //3
      [[["arc", PI * 1.5]], [["line-side", PI * 1.5]], [["arc", PI]]],
    ],
    fill: [
      //0
      [[["arc"]], [["square"]], [["arc", PI * 0.5]]], //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["arc", PI * 1.5]], [["square"]], [["arc", PI]]],
    ],
  },

  p: {
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
      [[["line-side"]], [["#"]], [["arc", PI]]],
      //3
      [
        [["line-side"], ["line-side", PI * 1.5]],
        [
          ["line-side", PI * 1],
          ["line-side", PI * 1.5],
        ],
        [["#"]],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["arc"]], [["arc", PI * 0.5]]],
      //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["arc", PI]]],
      //3
      [[["square"]], [["square"]], [["#"]]],
    ],
  },

  q: {
    outline: [
      //0
      [[["arc"]], [["arc", PI * 0.5]], [["#"]]],
      //1
      [[["line-side"]], [["line-side", PI]], [["#"]]],
      //2
      [[["line-side"]], [["#"]], [["arc", PI * 0.5]]],
      //3
      [
        [["arc", PI * 1.5]],
        [["arc", PI]],
        [["line-side"], ["line-side", PI], ["line-side", PI * 1.5]],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["arc", PI * 0.5]], [["#"]]], //1
      [[["square"]], [["square"]], [["#"]]],
      //2
      [[["square"]], [["square"]], [["arc", PI * 0.5]]],
      //3
      [[["arc", PI * 1.5]], [["arc", PI]], [["square"]]],
    ],
  },

  r: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", PI * 0.5], ["line-side", PI * 1]],
        [["arc"]],
        [["arc", PI * 0.5]],
      ],
      //1
      [[["line-side"]], [["point-corner", PI * 1.5]], [["arc", PI]]],
      //2
      [[["line-side"]], [["#"]], [["arc", PI * 0.5]]],
      //3
      [
        [["line-side"], ["line-side", PI * 1.5]],
        [["line-side"], ["line-side", PI * 1.5]],
        [
          ["line-side", PI * 1],
          ["line-side", PI * 1.5],
        ],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["arc"]], [["arc", PI * 0.5]]],
      //1
      [[["square"]], [["square"]], [["arc", PI]]],
      //2
      [[["square"]], [["square"]], [["arc", PI * 0.5]]],
      //3
      [[["square"]], [["square"]], [["square"]]],
    ],
  },

  s: {
    outline: [
      //0
      [
        [["arc"]],
        [["arc", PI * 0.5]],
        [["line-side"], ["line-side", PI * 0.5], ["line-side", PI]],
      ],
      //1
      [
        [["line-side"]],
        [["arc"]],
        [
          ["line-side", PI],
          ["arc", PI * 0.5],
        ],
      ],
      //2
      [[["line-side"], ["arc", PI * 1.5]], [["arc", PI]], [["line-side", PI]]],
      //3
      [
        [["line-side"], ["line-side", PI], ["line-side", PI * 1.5]],
        [["arc", PI * 1.5]],
        [["arc", PI]],
      ],
    ],
    fill: [
      //0
      [[["arc"]], [["arc", PI * 0.5]], [["square"]]], //1
      [[["square"]], [["square"]], [["square"]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["square"]], [["arc", PI * 1.5]], [["arc", PI]]],
    ],
  },

  /*
  A: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", PI * 0.5], ["line-side", PI * 1]],
        [["arc"]],
        [["arc", PI * 0.5]],
      ],
      //1
      [[["line-side"]], [["#"]], [["line-side", PI]]],
      //2
      [[["line-side"]], [["point-corner"]], [["line-side", PI]]],
      //3
      [
        [["line-side"], ["line-side", PI * 1.5], ["line-side", PI * 1]],
        [["line-side", PI * 1.5]],
        [
          ["line-side", PI * 1.5],
          ["line-side", PI * 1],
        ],
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
      [[["square"]], [["square"]], [["square"]]],
    ],
  },
    b: {
    outline: [
      //0
      [
        [["line-side"], ["line-side", PI * 0.5], ["line-side", PI * 1]],
        [["#"]],
        [["#"]],
      ],
      //1
      [[["line-side"]], [["line-side"], ["arc"]], [["arc", PI * 0.5]]],
      //2
      [[["line-side"]], [["point-side"]], [["line-side", PI]]],
      //3
      [
        [["line-side"], ["line-side", PI * 1.5], ["line-side", PI * 1]],
        [["arc", PI * 1.5]],
        [["arc", PI * 1]],
      ],
    ],
    fill: [
      //0
      [[["square"]], [["#"]], [["#"]]],

      //1
      [[["square"]], [["arc"]], [["arc", PI * 0.5]]],
      //2
      [[["square"]], [["square"]], [["square"]]],
      //3
      [[["square"]], [["arc", PI * 1.5]], [["arc", PI * 1]]],
    ],
  },
  */
};
