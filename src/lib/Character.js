import { Cell } from "./Cell";
export class Character {
  #source = LETTERS;

  #defStyle = {
    fill: {
      fill: [255, 255, 0],
      stroke: [0],
      strokeWeight: 0,
    },
    outline: {
      fill: [0, 0],
      stroke: [255, 0, 0],
      strokeWeight: 6,
    },
  };

  constructor(character, position, cellSize) {
    this.character = character || "a";
    this.position = position || { x: 0, y: 0 };
    this.cellSize = cellSize || 30;

    this.width = 0;
    this.height = 0;

    this.transform = {
      translate: {
        x: 0,
        y: 0,
      },
      rotate: 0,
      scale: {
        x: 1,
        y: 1,
      },
      shear: {
        x: 0,
        y: 0,
      },
    };

    this.initCells();
  }
  initCells() {
    let data = this.#source[this.character];

    this.fillCells = this.createCellsFromData(data.fill);
    this.outlineCells = this.createCellsFromData(data.outline);

    // char height = row count * cell size
    this.height = this.fillCells.length * this.cellSize;
    // char width = fillCells's first row items count * cell size
    this.width = this.fillCells[0].length * this.cellSize;
  }

  // used by initCells to populate cells from data
  createCellsFromData(_data) {
    let data = _data;

    let cells = [];
    for (let rowItem of data) {
      let row = [];
      for (let shapesList of rowItem) {
        let item = new Cell(shapesList);
        row = [...row, item];
      }
      cells = [...cells, row];
    }
    return cells;
  }

  // print each layer customizing styles
  print(p5, _style) {
    let fillStyle = _style.fill || this.#defStyle.fill;
    let outlineStyle = _style.outline || this.#defStyle.outline;

    if (_style.shadow.enable) {
      this.printShadow(p5, _style.shadow.position.x, _style.shadow.position.y);
    }
    this.printCells(p5, this.fillCells, fillStyle);
    this.printCells(p5, this.outlineCells, outlineStyle);
  }

  // print one layer one style
  printCells(p5, _data, _style) {
    let printPos = {
      x: -this.cellSize / 2,
      y: -this.cellSize / 2,
    };
    let style = _style || {
      fill: [0, 255, 0],
      stroke: [255, 0, 0],
      strokeWeight: 4,
    };

    p5.push();

    // CENTER POSITION
    p5.translate(
      this.position.x - this.width / 2,
      this.position.y - this.height / 2
    );

    // APPLY TRANSFORMATIONS
    this.applyTransform(p5);

    // RESET POSITION
    p5.translate(-this.width / 2, -this.height / 2);

    // PRINT CELLS
    for (let y = 0; y < _data.length; y++) {
      let currentRow = _data[y];

      for (let x = 0; x < currentRow.length; x++) {
        let currentCell = currentRow[x];

        p5.push();
        // MOVE TO CELL PRINT POSITION
        p5.translate(
          printPos.x + this.cellSize / 2,
          printPos.y + this.cellSize / 2
        );
        // print currentCell
        currentCell.print(p5, 0, 0, this.cellSize, this.cellSize, style);
        p5.pop();

        // init next cell position
        printPos.x += this.cellSize;
        // init next row position
        if (x == currentRow.length - 1) {
          printPos.x = -this.cellSize / 2;
          printPos.y += this.cellSize;
        }
      }
    }

    // DRAW DEBUG RECT
    // this.debug(p5);

    p5.pop();
  }

  // custom printfill
  printShadow(p5, _x, _y) {
    let x = _x || 0;
    let y = _y || 0;
    p5.push();
    p5.translate(x, y);
    this.printCells(p5, this.fillCells, {
      fill: [0],
      stroke: [0],
      strokeWeight: 4,
    });
    p5.pop();
  }

  setTransform(_transform) {
    this.transform = _transform;
  }

  // called by printCells before printing cells
  applyTransform(p5) {
    p5.translate(this.transform.translate.x, this.transform.translate.y);
    p5.shearX(this.transform.shear.x);
    p5.shearY(this.transform.shear.y);
    p5.rotate(3.1416 * this.transform.rotate);
    p5.scale(this.transform.scale.x, this.transform.scale.y);
  }

  debug(p5) {
    p5.push();
    p5.noFill();
    p5.stroke(255, 0, 0);
    p5.rect(0, 0, this.width, this.height);
    p5.pop();
  }
}

const LETTERS = {
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
