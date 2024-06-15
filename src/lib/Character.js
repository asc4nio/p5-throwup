import { Cell } from "./Cell";
import { LETTERS } from "./Data";
export class Character {
  #fillCellsData = [];
  #outlineCellsData = [];
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

    this.width = 0;
    this.height = 0;

    this.#fillCellsData = LETTERS[this.character].fill;
    this.#outlineCellsData = LETTERS[this.character].outline;

    this.initCells();
  }
  initCells() {
    this.fillCells = this.createCellsFromData(this.#fillCellsData);
    this.outlineCells = this.createCellsFromData(this.#outlineCellsData);

    this.height = this.fillCells.length * this.cellSize;
    this.width = this.fillCells[0].length * this.cellSize;
  }
  createCellsFromData(data) {
    let cells = [];

    for (let rowItem of data) {
      let row = [];
      for (let cellItem of rowItem) {
        let item = new Cell(cellItem);
        row = [...row, item];
      }
      cells = [...cells, row];
    }

    return cells;
  }

  print(p5, _fillStyle, _outlineStyle) {
    let fillStyle = _fillStyle || {
      fill: [120, 20, 40],
      stroke: [0],
      strokeWeight: 0,
    };
    let outlineStyle = _outlineStyle || {
      fill: [0, 0],
      stroke: [255, 0, 0],
      strokeWeight: 8,
    };

    this.printLayer(p5, this.fillCells, fillStyle);
    this.printLayer(p5, this.outlineCells, outlineStyle);
  }

  printLayer(p5, _data, _style) {
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

    // APPLY TRANSFORMATIONS
    p5.translate(this.transform.translate.x, this.transform.translate.y);
    p5.shearX(this.transform.shear.x);
    p5.shearY(this.transform.shear.y);

    // CENTER POSITION
    p5.translate(
      this.position.x - this.width / 2,
      this.position.y - this.height / 2
    );

    p5.rotate(this.transform.rotate);
    p5.scale(this.transform.scale.x, this.transform.scale.y);

    p5.translate(-this.width / 2, -this.height / 2);

    for (let y = 0; y < _data.length; y++) {
      let currentRow = _data[y];

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
