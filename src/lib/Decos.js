export class Bang {
  #anchors = [];
  #increment = 0;

  constructor(_count, _radius, _smoothness, _scale, _fancy) {
    this.count = _count || 9;
    this.radius = _radius || 100;
    this.smoothness = _smoothness || 2;
    this.scale = _scale || {
      x: 1,
      y: 1,
    };

    this.fancy = _fancy || 0.1;

    this.#increment = (2 * Math.PI) / this.count;

    // INIT ANCHORS
    for (let a = 0; a < 2 * Math.PI; a += this.#increment) {
      let r1 = this.radius + (Math.random() * 2 - 1) * this.radius * this.fancy;
      let x = r1 * Math.cos(a) * this.scale.x;
      let y = r1 * Math.sin(a) * this.scale.y;
      this.#anchors = [...this.#anchors, { x, y }];
    }
  }

  print(p5) {
    p5.push();
    p5.strokeWeight(this.smoothness);
    p5.fill(255, 120);
    // draw full shape
    p5.beginShape();
    for (let i = 0; i < this.#anchors.length; i++) {
      p5.vertex(this.#anchors[i].x, this.#anchors[i].y);
    }
    p5.endShape(p5.CLOSE);

    // subtract curves
    p5.erase();
    p5.beginShape();

    for (let i = 0; i < this.#anchors.length; i++) {
      let desiredIndex = i + 1;
      if (desiredIndex > this.#anchors.length - 1) desiredIndex = 0;
      p5.bezier(
        this.#anchors[i].x,
        this.#anchors[i].y,
        0,
        0,
        0,
        0,
        this.#anchors[desiredIndex].x,
        this.#anchors[desiredIndex].y
      );
    }
    p5.endShape(p5.CLOSE);
    p5.noErase();
    p5.pop();
  }
}

export class Wall {
  #rows = 0;
  #columns = 0;
  constructor(_size, _bricksSize) {
    this.size = _size || {
      x: 400,
      y: 300,
    };
    this.bricksSize = _bricksSize || {
      x: 60,
      y: 30,
    };

    this.#rows = this.size.x / this.bricksSize.x;
    this.#columns = this.size.y / this.bricksSize.y;
  }
  print(p5) {
    p5.push();
    p5.noFill();
    p5.stroke(0);
    p5.strokeWeight(2);
    for (let i = 0; i < this.#rows; i++) {
      for (let j = 0; j < this.#columns; j++) {
        if (j % 2) {
          p5.rect(
            i * this.bricksSize.x + this.bricksSize.x / 2,
            j * this.bricksSize.y,
            this.bricksSize.x,
            this.bricksSize.y
          );
        } else {
          p5.rect(
            i * this.bricksSize.x,
            j * this.bricksSize.y,
            this.bricksSize.x,
            this.bricksSize.y
          );
        }
      }
    }
    p5.pop();
  }
}
