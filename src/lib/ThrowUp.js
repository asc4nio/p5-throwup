import { Character } from "./Character";

export class ThrowUp {
  constructor(string, position, _config) {
    this.string = string || "abc";
    this.position = position || { x: 0, y: 0 };

    this.splittedString = this.string.split("");
    this.characters = [];

    this.config = _config || {
      cellSize: 30,
      gap: 10,
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
          x: 0,
          y: 0,
        },
      },
      fillStyle: {
        fill: [255, 255, 0],
        stroke: [0],
        strokeWeight: 0,
      },
      outlineStyle: {
        fill: [0, 0],
        stroke: [255, 0, 0],
        strokeWeight: 6,
      },
    };

    this.width = 0;
    this.initCharacters();
  }
  initCharacters() {
    let printPos = {
      x: this.position.x,
      y: this.position.y,
    };

    for (let i = 0; i < this.splittedString.length; i++) {
      // EACH CHARACTER STATE
      let config = this.config;

      let character = new Character(
        this.splittedString[i],
        { x: printPos.x, y: printPos.y },
        config.cellSize,
        config.transform
      );

      this.characters = [...this.characters, character];
      this.width += character.width + this.config.gap;

      printPos.x += character.width + this.config.gap;
    }
  }
  print(p5) {
    p5.push();
    //MOVE TO CHARACTER POSITION
    p5.translate(
      -this.width / 2 + this.characters[0].width + this.config.gap / 2,
      this.characters[0].height / 2
    );

    for (let i = 0; i < this.characters.length; i++) {
      // PRINT FROM LAST TO FIRST
      let invertedIndex = this.characters.length - 1 - i;
      this.characters[invertedIndex].print(
        p5,
        this.config.fillStyle,
        this.config.outlineStyle
      );
    }
    p5.pop();
  }
}
