const PI = 3.14159265;

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
    // p5.bezier(x, y + h, x, y, x, y, x + w, y);
    p5.arc(x + w, y + h, w * 2, h * 2, p5.PI * 1, p5.PI * 1.5);
  },
};

export class Shape {
  constructor(input, rotation) {
    this.input = input.split("-");
    this.shape = this.input[0];
    this.variant = this.input[1] || null;
    this.rotation = rotation || 0;
  }

  print(p5, x, y, w, h) {
    if (this.variant) {
      SHAPES[this.shape][this.variant](p5, x, y, w, h);
    } else {
      SHAPES[this.shape](p5, x, y, w, h);
    }
  }
}

export class Cell {
  constructor(shapesList) {
    this.shapesList = shapesList || [];
    this.shapes = [];

    if (this.shapesList.length > 0) {
      for (let item of this.shapesList) {
        this.shapes.push(new Shape(item[0], item[1] || 0));
      }
    }
  }

  print(p5, x, y, w, h, style) {
    for (let shape of this.shapes) {
      p5.push();

      p5.fill(...style.fill);
      p5.stroke(...style.stroke);
      p5.strokeWeight(style.strokeWeight);

      // p5.fill(120);
      // p5.stroke(0);
      // p5.strokeWeight(4);

      // MOVE FOR ROTATION
      p5.translate(w * 0.5, h * 0.5);
      // SHAPE ROTATION
      p5.rotate(shape.rotation);
      // RESET POSITION
      p5.translate(-w * 0.5, -h * 0.5);

      shape.print(p5, y, x, w, h);

      p5.pop();
    }
  }
}

const LETTERS = {
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
};

export class Character {
  constructor(character, position, cellSize, transform) {
    this.character = character || "a";
    this.position = position || { x: 0, y: 0 };
    this.cellSize = cellSize || 30;

    this.transform = transform || {
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

    this.outlineCells = [];
    this.fillCells = [];

    this.width = 0;
    this.height = 0;

    this.initCells();
  }
  initCells() {
    this.initFillCells();
    this.initOutlineCells();
  }
  initOutlineCells() {
    let data = LETTERS[this.character].outline;
    this.height = data.length * this.cellSize;
    this.width = data[0].length * this.cellSize;

    for (let y = 0; y < data.length; y++) {
      let currentRow = data[y];

      let row = [];

      for (let x = 0; x < currentRow.length; x++) {
        let currentCell = currentRow[x];

        let item = new Cell(currentCell);
        row = [...row, item];
      }

      this.outlineCells = [...this.outlineCells, row];
    }
  }
  initFillCells() {
    let data = LETTERS[this.character].fill;
    console;

    for (let y = 0; y < data.length; y++) {
      let currentRow = data[y];

      let row = [];

      for (let x = 0; x < currentRow.length; x++) {
        let currentCell = currentRow[x];

        let item = new Cell(currentCell);
        row = [...row, item];
      }

      this.fillCells = [...this.fillCells, row];
    }
  }

  print(p5) {
    this.printFill(p5);
    this.printOutline(p5);
  }
  printOutline(p5, _style) {
    let printPos = {
      x: -this.cellSize / 2,
      y: -this.cellSize / 2,
    };

    let style = _style || {
      fill: [0, 0],
      stroke: [255, 0, 0],
      strokeWeight: 8,
    };

    p5.push();

    // APPLY TRANSFORMATIONS
    p5.translate(this.transform.translate.x, this.transform.translate.y);
    p5.rotate(this.transform.rotate);
    p5.shearX(this.transform.shear.x);
    p5.shearY(this.transform.shear.y);
    p5.scale(this.transform.scale.x, this.transform.scale.y);

    // CENTER POSITION
    p5.translate(
      this.position.x - this.width / 2,
      this.position.y - this.height / 2
    );

    for (let y = 0; y < this.outlineCells.length; y++) {
      let currentRow = this.outlineCells[y];

      for (let x = 0; x < currentRow.length; x++) {
        let currentCell = currentRow[x];

        p5.push();
        // MOVE TO CELL PRINT POSITION
        p5.translate(printPos.x, printPos.y);

        // DRAW DEBUG CELL
        // p5.push();
        // p5.stroke(255, 0, 0);
        // p5.strokeWeight(1);
        // p5.rect(0, 0, this.cellSize, this.cellSize);
        // p5.pop();

        currentCell.print(p5, 0, 0, this.cellSize, this.cellSize, style);

        p5.pop();

        printPos.x += this.cellSize;
        if (x == currentRow.length - 1) {
          printPos.x = -this.cellSize / 2;
          printPos.y += this.cellSize;
        }
      }
    }
    p5.pop();
  }
  printFill(p5, _style) {
    let printPos = {
      x: -this.cellSize / 2,
      y: -this.cellSize / 2,
    };
    let style = _style || {
      fill: [120, 20, 40],
      stroke: [0],
      strokeWeight: 0,
    };

    p5.push();

    // APPLY TRANSFORMATIONS
    p5.translate(this.transform.translate.x, this.transform.translate.y);
    p5.rotate(this.transform.rotate);
    p5.shearX(this.transform.shear.x);
    p5.shearY(this.transform.shear.y);
    p5.scale(this.transform.scale.x, this.transform.scale.y);

    // CENTER POSITION
    p5.translate(
      this.position.x - this.width / 2,
      this.position.y - this.height / 2
    );

    for (let y = 0; y < this.fillCells.length; y++) {
      let currentRow = this.fillCells[y];

      for (let x = 0; x < currentRow.length; x++) {
        let currentCell = currentRow[x];

        p5.push();
        // MOVE TO CELL PRINT POSITION
        p5.translate(printPos.x, printPos.y);

        // DRAW DEBUG CELL
        // p5.push();
        // p5.stroke(255, 0, 0);
        // p5.strokeWeight(1);
        // p5.rect(0, 0, this.cellSize, this.cellSize);
        // p5.pop();

        currentCell.print(p5, 0, 0, this.cellSize, this.cellSize, style);

        p5.pop();

        printPos.x += this.cellSize;
        if (x == currentRow.length - 1) {
          printPos.x = -this.cellSize / 2;
          printPos.y += this.cellSize;
        }
      }
    }
    p5.pop();
  }
}

export class ThrowUp {
  constructor(string, position) {
    this.string = string || "abc";
    this.position = position || { x: 0, y: 0 };

    this.splittedString = this.string.split("");
    this.characters = [];

    this.gap = 10;
    this.width = 0;

    this.initCharacters();
  }
  initCharacters() {
    let printPos = {
      x: this.position.x,
      y: this.position.y,
    };

    for (let i = 0; i < this.splittedString.length; i++) {
      // CHARACTER CONFIG
      let config = {
        cellSize: 30,
        transform: {
          translate: {
            x: 0,
            y: 0,
          },

          scale: {
            x: 1,
            y: 1,
          },
          rotate: 0,
          shear: {
            x: 0.0,
            y: 0,
          },
        },
      };

      let character = new Character(
        this.splittedString[i],
        { x: printPos.x, y: printPos.y },
        config.cellSize,
        config.transform
      );

      this.characters = [...this.characters, character];
      this.width += character.width + this.gap;

      printPos.x += character.width + this.gap;
    }
  }
  print(p5) {
    let outlineStyle = {
      fill: [0, 0],
      stroke: [0, 0, 255],
      strokeWeight: 8,
    };
    let fillStyle = {
      fill: [150],
      stroke: [0],
      strokeWeight: 0,
    };

    p5.push();
    //MOVE TO CHARACTER POSITION
    p5.translate(
      -this.width / 2 + this.characters[0].width / 2 + this.gap / 2,
      0
    );

    for (let i = 0; i < this.characters.length; i++) {
      // PRINT FROM LAST TO FIRST
      let invertedIndex = this.characters.length - 1 - i;

      this.characters[invertedIndex].printFill(p5, fillStyle);
      this.characters[invertedIndex].printOutline(p5, outlineStyle);
    }
    p5.pop();
  }
}
