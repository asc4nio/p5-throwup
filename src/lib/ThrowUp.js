import { Character } from "./Character";
import gsap from "gsap";

export class ThrowUp {
  width = 0;

  constructor(_text, _position, _rotation, _gap, _charConfig) {
    this.position = _position || { x: 0, y: 0 };
    this.rotation = _rotation || 0;
    this.gap = _gap || 10;

    this.string = _text || "abc";

    this.charConfig = _charConfig || {
      cellSize: 30,
      style: {
        fill: {
          fill: [255],
          stroke: [0],
          strokeWeight: 0,
        },
        outline: {
          fill: [0, 0],
          stroke: [0],
          strokeWeight: 4,
        },
      },
      transform: {
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
      },
    };

    this.init(_text);
  }

  init(_text) {
    let string = _text || this.string;
    this.characters = [];

    // from string to array of characters
    let splittedString = string.split("");

    // init print position
    let printPos = {
      x: this.position.x,
      y: this.position.y,
    };

    // init each character
    for (let i = 0; i < splittedString.length; i++) {
      let character = new Character(
        splittedString[i],
        { x: printPos.x, y: printPos.y },
        this.charConfig.cellSize
      );

      character.setTransform(this.charConfig.transform);

      // PATCH FOR 2 and 4 COLS CHARACTERS
      if (character.width == this.charConfig.cellSize * 2) {
        character.position.x -= this.charConfig.cellSize;
      } else if (character.width == this.charConfig.cellSize * 4) {
        character.position.x += this.charConfig.cellSize;
      }

      // ADD CHARACTER TO LIST
      this.characters = [...this.characters, character];

      // UPDATE print POSITION for next character
      printPos.x += character.width;
    }

    this.updateWidth();
  }

  updateWidth() {
    let width = 0;
    for (let char of this.characters) {
      width += char.width + this.gap;
    }
    this.width = width;
  }

  update(_position, _rotation, _gap) {
    this.position = _position;
    this.rotation = _rotation;
    this.gap = _gap;

    for (let character of this.characters) {
      character.setTransform(this.charConfig.transform);
    }
  }

  print(p5) {
    this.updateWidth();

    p5.push();
    // MOVE TO POSITION

    p5.translate(this.position.x, this.position.y);

    // APPLY ROTATION
    p5.rotate(3.1416 * this.rotation);

    p5.translate(this.characters[0].width * 1, this.characters[0].height / 2);
    p5.translate(-this.width / 2, 0);

    // print each Character
    for (let i = 0; i < this.characters.length; i++) {
      // PRINT FROM LAST TO FIRST
      let invertedIndex = this.characters.length - 1 - i;
      this.characters[invertedIndex].print(p5, this.charConfig.style);

      p5.translate(this.gap, 0);
    }
    p5.pop();
  }
}
