import { Character } from "./Character";

export class ThrowUp {
  width = 0;

  tupConfig = {
    string: "ascanio",
    position: { x: 0, y: 0 },
    rotation: 0,
    gap: -10,
  };

  charConfig = {
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
    style: {
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
    },
  };

  constructor(_tupConfig, _charConfig) {
    this.characters = [];

    if (_tupConfig) this.tupConfig = _tupConfig;
    if (_charConfig) this.charConfig = _charConfig;

    this.initCharacters();
  }
  initCharacters() {
    // from string to array of characters
    let splittedString = this.tupConfig.string.split("");

    // init print position
    let printPos = {
      x: this.tupConfig.position.x,
      y: this.tupConfig.position.y,
    };

    // init each character
    for (let i = 0; i < splittedString.length; i++) {
      let character = new Character(
        splittedString[i],
        { x: printPos.x, y: printPos.y },
        this.charConfig.cellSize
      );

      character.setTransform(this.charConfig.transform);
      // console.log(character);

      // PATCH FOR 2 and 4 COLS CHARACTERS
      if (character.width == this.charConfig.cellSize * 2) {
        character.position.x -= this.charConfig.cellSize;
      } else if (character.width == this.charConfig.cellSize * 4) {
        character.position.x += this.charConfig.cellSize;
      }

      // ADD CHARACTER TO LIST
      this.characters = [...this.characters, character];

      // UPDATE this.width for each character added
      this.width += character.width + this.tupConfig.gap;

      // UPDATE print POSITION for next character
      printPos.x += character.width + this.tupConfig.gap;
    }
  }
  print(p5) {
    p5.push();
    // APPLY ROTATION
    p5.rotate(3.1416 * this.tupConfig.rotation);
    //MOVE TO CHARACTER POSITION
    p5.translate(
      -this.width / 2 + this.characters[0].width + this.tupConfig.gap / 2,
      this.characters[0].height / 2
    );

    // print each Character
    for (let i = 0; i < this.characters.length; i++) {
      // PRINT FROM LAST TO FIRST
      let invertedIndex = this.characters.length - 1 - i;
      this.characters[invertedIndex].print(
        p5,
        this.charConfig.style.fill,
        this.charConfig.style.outline
      );
    }
    p5.pop();
  }
}
