import { LETTERS, printCellOutline, printCellFill } from "./Blocks";

class ThrowUp {
  constructor(p5, _string, _position) {
    this.string = _string || "abcdefghijklmnopqrstuvwxyz";
    this.position = _position || { x: 0, y: 0 };

    this.gap = 10;

    this.splittedString = this.string.split("");
    this.characters = [];

    this.width = 0;
    this.initCharacters();
  }
  initCharacters() {
    let printPos = {
      x: this.position.x,
      y: this.position.y,
    };

    for (let i = 0; i < this.splittedString.length; i++) {
      let config = {
        colors: {
          fill: [120],
          stroke: [0],
        },
        cellSize: {
          x: 30,
          y: 30,
        },
        thickness: 6,
        transform: {
          translate: {
            x: 0,
            y: 0,
          },
          rotate: 0,
          shear: {
            x: 0.0,
            y: 0.0,
          },
        },
      };
      let character = new Character(
        this.splittedString[i],
        {
          x: printPos.x,
          y: printPos.y,
        },
        config
      );
      this.characters = [...this.characters, character];
      this.width += character.width + this.gap;

      printPos.x += character.width + this.gap;
    }
  }
  print(p5) {
    p5.push();
    p5.translate(-this.width / 2, 0);
    for (let i = 0; i < this.characters.length; i++) {
      let invertedIndex = this.characters.length - 1 - i;
      this.characters[invertedIndex].print(p5, "fill");
      this.characters[invertedIndex].print(p5, "outline");
    }
    p5.pop();
  }
}

class Character {
  constructor(_character, _position, _config) {
    this.character = _character || "a";
    this.position = _position || { x: 0, y: 0 };
    this.cellSize = _config.cellSize || { x: 30, y: 30 };
    this.transform = _config.transform || {
      translate: {
        x: 0,
        y: 0,
      },
      rotate: 0,
      shear: {
        x: 0.0,
        y: 0.0,
      },
    };
    this.colors = _config.colors || {
      fill: [220],
      stroke: [0],
    };
    this.thickness = _config.thickness || 8;

    this.data = LETTERS[this.character];

    this.width = this.data[0].length * this.cellSize.x;
    this.height = this.data.length * this.cellSize.y;
  }

  print(p5, command) {
    p5.push();
    p5.translate(this.position.x, this.position.y);

    let printPos = {
      x: -this.width / 2,
      y: -this.height / 2,
    };

    p5.push();
    p5.rotate(this.transform.rotate);
    p5.shearX(this.transform.shear.x);
    p5.shearY(this.transform.shear.y);
    p5.translate(this.transform.translate.x, this.transform.translate.y);

    for (let y = 0; y < this.data.length; y++) {
      let currentRow = this.data[y];

      for (let x = 0; x < currentRow.length; x++) {
        let currentCell = currentRow[x];

        // p5.push();
        // p5.translate(printPos.x, printPos.y);

        for (let element of currentCell) {
          p5.push();

          if (command === "fill") {
            p5.fill(...this.colors.fill);
            p5.stroke(0);
            p5.strokeWeight(0);

            // printCellFill(p5, element, { x: 0, y: 0 }, this.cellSize);
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

            // printCellOutline(p5, element, { x: 0, y: 0 }, this.cellSize);
            printCellOutline(
              p5,
              element,
              { x: printPos.x, y: printPos.y },
              this.cellSize
            );
          }

          p5.pop();
        }

        printPos.x += this.cellSize.x;
        if (x == currentRow.length - 1) {
          printPos.x = -this.width / 2;
          printPos.y += this.cellSize.y;
        }
      }
    }
    p5.pop();
    p5.pop();
  }
}

export { ThrowUp, Character };
