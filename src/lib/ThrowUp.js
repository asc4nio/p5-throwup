import { LETTERS, printCellOutline, printCellFill } from "./Blocks";

class ThrowUp {
  constructor(p5, _string, _position) {
    this.string = _string || "abcdefghijklmnopqrstuvwxyz";
    this.position = _position || { x: 0, y: 0 };

    this.gap = { x: 0, y: 10 };
    this.margin = 40;

    this.splittedString = this.string.split("");
    this.characters = [];

    this.initCharacters(p5);
  }
  initCharacters(p5) {
    let printPos = {
      x: this.position.x,
      y: this.position.y,
    };

    for (let i = 0; i < this.splittedString.length; i++) {
      let character = new Character(this.splittedString[i], {
        x: printPos.x,
        y: printPos.y,
      });
      this.characters = [...this.characters, character];

      printPos.x += character.width + this.gap.x;
      if (printPos.x + character.width + this.margin >= p5.width) {
        printPos.x = this.margin;
        printPos.y += character.height + this.gap.y;
      }
    }
  }
  print(p5) {
    for (let character of this.characters) {
      character.print(p5, "fill");
      character.print(p5, "outline");
    }
  }
}

class Character {
  constructor(_character, _position) {
    this.character = _character || "a";
    this.position = _position || { x: 0, y: 0 };

    this.cellSize = {
      x: 30,
      y: 30,
    };

    this.data = LETTERS[this.character];

    this.width = this.data[0].length * this.cellSize.x;
    this.height = this.data.length * this.cellSize.y;

    this.colors = {
      fill: [255, 255, 0],
      stroke: [0, 0, 255],
    };

    this.thickness = 8;
  }

  print(p5, command) {
    let printPos = {
      x: this.position.x,
      y: this.position.y,
    };

    p5.push();

    for (let y = 0; y < this.data.length; y++) {
      let currentRow = this.data[y];

      for (let x = 0; x < currentRow.length; x++) {
        let currentCell = currentRow[x];

        for (let element of currentCell) {
          if (command === "fill") {
            p5.fill(...this.colors.fill);
            p5.stroke(0);
            p5.strokeWeight(0);
            printCellFill(
              p5,
              element,
              { x: printPos.x, y: printPos.y },
              this.cellSize
            );
          } else if (command === "outline") {
            p5.fill(0, 0, 0, 0);
            p5.stroke(...this.colors.stroke);
            p5.strokeWeight(this.thickness);
            printCellOutline(
              p5,
              element,
              { x: printPos.x, y: printPos.y },
              this.cellSize
            );
          }
        }
        printPos.x += this.cellSize.x;
        if (x == currentRow.length - 1) {
          printPos.x = this.position.x;
          printPos.y += this.cellSize.y;
        }
      }
    }
    p5.pop();
  }
  printOutline(p5) {
    p5.push();
    p5.pop();
  }
}

export { ThrowUp, Character };
