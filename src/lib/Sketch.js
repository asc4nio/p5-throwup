import { LETTERS, mapAction } from "./Blocks";
import { STRING, CELL_SIZE, GAP, THICKNESS, MARGIN } from "./stores/AppStore";
import { get } from "svelte/store";

export const mySketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(800, 800);
    p5.fill(0, 0);
    p5.stroke(0);
    // p5.strokeWeight(4);
  };

  p5.draw = () => {
    p5.strokeWeight(get(THICKNESS));
    p5.background(220);
    printString(p5, get(STRING), get(CELL_SIZE), get(GAP), get(MARGIN));
  };

  p5.windowResized = () => {
    // p5.resizeCanvas(800, 800);
  };
};

function printString(p5, string, compSize, gap, margin) {
  let currPos = {
    x: margin,
    y: margin,
  };
  let letters = string.split("");
  for (let i = 0; i < letters.length; i++) {
    // printLetter(p5, letters[i], currPos, compSize);

    let letter = new Letter(p5, letters[i], currPos, compSize);
    letter.print(p5);

    currPos.x += compSize.x * 3 + gap.x;
    if (currPos.x + compSize.x * 3 + margin >= p5.width) {
      currPos.x = margin;
      currPos.y += compSize.y * 4 + gap.y;
    }
  }
}

class ThrowUp {
  constructor(p5, string, pos, gap) {
    this.string = string;
    this.pos = pos;
    this.gap = gap;
  }
}

class Letter {
  constructor(p5, letter, pos, size) {
    this.character = letter;
    this.pos = pos;
    this.size = size;
  }

  print(p5) {
    let data = LETTERS[this.character];
    this.currPrintPos = {
      x: this.pos.x,
      y: this.pos.y,
    };

    for (let i = 0; i < data.length; i++) {
      let currentRow = data[i];
      this.printRow(p5, currentRow);
    }
  }

  printRow(p5, row) {
    for (let i = 0; i < row.length; i++) {
      let currentCell = row[i];
      this.printCell(p5, currentCell);

      this.currPrintPos.x += this.size.x;
      if (i == row.length - 1) {
        this.currPrintPos.x = this.pos.x;
        this.currPrintPos.y += this.size.y;
      }
    }
  }

  printCell(p5, cell) {
    for (let element of cell) {
      mapAction(
        p5,
        element,
        { x: this.currPrintPos.x, y: this.currPrintPos.y },
        this.size
      );
    }
  }
}

// function printLetter(p5, letter, pos, size) {
//   let data = LETTERS[letter];
//   let currPrintPos = {
//     x: pos.x,
//     y: pos.y,
//   };

//   for (let y = 0; y < data.length; y++) {
//     let currentRow = data[y];

//     for (let x = 0; x < currentRow.length; x++) {
//       let currentItem = currentRow[x];

//       for (let element of currentItem) {
//         mapAction(p5, element, { x: currPrintPos.x, y: currPrintPos.y }, size);
//       }

//       currPrintPos.x += size.x;

//       if (x == currentRow.length - 1) {
//         currPrintPos.x = pos.x;
//         currPrintPos.y += size.y;
//       }
//     }
//   }
// }
