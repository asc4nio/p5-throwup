import { Character } from "./Character";

export class ThrowUp {
  constructor(string, position) {
    this.string = string || "abc";
    this.position = position || { x: 0, y: 0 };

    this.splittedString = this.string.split("");
    this.characters = [];

    this.gap = -8;

    this.width = 0;
    this.initCharacters();
  }
  initCharacters() {
    let printPos = {
      x: this.position.x,
      y: this.position.y,
    };

    for (let i = 0; i < this.splittedString.length; i++) {
      // EACH CHARACTER CONFIG
      let config = {
        cellSize: 40,
        transform: {
          translate: {
            x: 0,
            y: (Math.random() * 2 - 1) * 10,
          },

          scale: {
            x: 1,
            y: 1,
          },
          rotate: -0.2,
          shear: {
            x: 0,
            y: 0.2,
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
    let fillStyle = {
      fill: [255, 255, 0],
      stroke: [0],
      strokeWeight: 0,
    };
    let outlineStyle = {
      fill: [0, 0],
      stroke: [255, 0, 0],
      strokeWeight: 6,
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
      this.characters[invertedIndex].print(p5, fillStyle, outlineStyle);
    }
    p5.pop();
  }
}
