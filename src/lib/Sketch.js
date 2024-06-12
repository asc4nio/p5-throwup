import { LETTERS, printCellOutline, printCellFill } from "./Blocks";
import { STRING, CELL_SIZE, GAP, THICKNESS, MARGIN } from "./stores/AppStore";
import { get } from "svelte/store";

import { Character } from "./ThrowUp";

export const mySketch = (p5) => {
  const size = {
    x: 800,
    y: 800,
  };
  let tupLayer;
  let a;
  p5.setup = () => {
    p5.createCanvas(size.x, size.y);
    p5.background(220);

    tupLayer = p5.createGraphics(size.x, size.y);

    a = new Character("o", {
      x: 100,
      y: 100,
    });
    a.print(tupLayer, "fill");
    a.print(tupLayer, "outline");

    p5.image(tupLayer, 0, 0);
  };

  p5.draw = () => {
    // fillLayer.clear();
    // outlineLayer.clear();
    // outlineLayer.strokeWeight(get(THICKNESS));
    // printString(
    //   p5,
    //   fillLayer,
    //   outlineLayer,
    //   get(STRING),
    //   get(CELL_SIZE),
    //   get(GAP),
    //   get(MARGIN)
    // );
    // p5.image(fillLayer, 0, 0);
    // p5.image(outlineLayer, 0, 0);
  };

  p5.windowResized = () => {
    // p5.resizeCanvas(800, 800);
  };
};

function printString(
  p5,
  fillLayer,
  outlineLayer,
  string,
  compSize,
  gap,
  margin
) {
  let currPos = {
    x: margin,
    y: margin,
  };
  let letters = string.split("");
  for (let i = 0; i < letters.length; i++) {
    let letter = new Letter(p5, letters[i], currPos, compSize);
    letter.print(fillLayer, outlineLayer);

    currPos.x += compSize.x * 3 + gap.x;
    if (currPos.x + compSize.x * 3 + margin >= fillLayer.width) {
      currPos.x = margin;
      currPos.y += compSize.y * 4 + gap.y;
    }
  }
}

// class ThrowUp {
//   constructor(p5, string, pos, gap) {
//     this.string = string;
//     this.pos = pos;
//     this.gap = gap;
//   }
// }

class Letter {
  constructor(p5, letter, pos, size) {
    this.character = letter;
    this.pos = pos;
    this.size = size;
  }

  print(fillLayer, outlineLayer) {
    let data = LETTERS[this.character];
    this.currPrintPos = {
      x: this.pos.x,
      y: this.pos.y,
    };
    this.currFillPrintPos = {
      x: this.pos.x,
      y: this.pos.y,
    };

    for (let i = 0; i < data.length; i++) {
      let currentRow = data[i];
      this.printRowFill(fillLayer, currentRow);
    }
    for (let i = 0; i < data.length; i++) {
      let currentRow = data[i];
      this.printRowOutline(outlineLayer, currentRow);
    }
  }

  printRowOutline(p5, row) {
    for (let i = 0; i < row.length; i++) {
      let currentCell = row[i];
      this.printCellOutline(p5, currentCell);

      this.currPrintPos.x += this.size.x;
      if (i == row.length - 1) {
        this.currPrintPos.x = this.pos.x;
        this.currPrintPos.y += this.size.y;
      }
    }
  }
  printRowFill(p5, row) {
    for (let i = 0; i < row.length; i++) {
      let currentCell = row[i];
      this.printCellFill(p5, currentCell);
      this.currFillPrintPos.x += this.size.x;
      if (i == row.length - 1) {
        this.currFillPrintPos.x = this.pos.x;
        this.currFillPrintPos.y += this.size.y;
      }
    }
  }

  printCellOutline(p5, cell) {
    p5.push();
    p5.fill(0, 0);
    p5.stroke(0);
    for (let element of cell) {
      printCellOutline(
        p5,
        element,
        { x: this.currPrintPos.x, y: this.currPrintPos.y },
        this.size
      );
    }
    p5.pop();
  }

  printCellFill(p5, cell) {
    p5.push();
    p5.fill(120);
    p5.strokeWeight(0);
    for (let element of cell) {
      printCellFill(
        p5,
        element,
        { x: this.currFillPrintPos.x, y: this.currFillPrintPos.y },
        this.size
      );
    }
    p5.pop();
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
//         printCellOutline(p5, element, { x: currPrintPos.x, y: currPrintPos.y }, size);
//       }

//       currPrintPos.x += size.x;

//       if (x == currentRow.length - 1) {
//         currPrintPos.x = pos.x;
//         currPrintPos.y += size.y;
//       }
//     }
//   }
// }
