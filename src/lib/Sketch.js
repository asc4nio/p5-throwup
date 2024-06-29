// https://www.npmjs.com/package/p5.capture

import { Bang, Wall } from "./Decos";
import { ThrowUp } from "./ThrowUp";

import { STATE } from "./stores/Store";
import { get } from "svelte/store";

// import gsap from "gsap";

export const mySketch = (p5) => {
  let state = get(STATE);

  // const state.size = {
  //   x: 540,
  //   y: 540,
  // };
  let tup, tupLayer;
  let bgLayer, wall, bang;

  p5.setup = () => {
    // p5.frameRate(60);
    p5.pixelDensity(4);
    p5.createCanvas(state.size.x, state.size.y);
    tupLayer = p5.createGraphics(state.size.x, state.size.y);
    bgLayer = p5.createGraphics(state.size.x, state.size.y);

    p5.noSmooth();
    tupLayer.noSmooth();

    // CENTER LAYERS
    tupLayer.translate(state.size.x / 2, state.size.y / 2);
    // bgLayer.translate(state.size.x / 2, state.size.y / 2);

    tup = new ThrowUp(state.text);

    wall = new Wall(state.size, {
      x: 40,
      y: 20,
    });
    bang = new Bang(9, state.size.x, 0, { x: 1, y: 1 }, 0);
  };

  p5.draw = () => {
    // reset buffers
    p5.clear();
    bgLayer.clear();
    tupLayer.clear();

    p5.background(state.background.color);

    if (state.background.type === "bang") {
      bgLayer.push();
      bgLayer.translate(state.size.x / 2, state.size.y / 2);
      bang.print(bgLayer);
      bgLayer.pop();
    } else if (state.background.type === "wall") {
      wall.print(bgLayer);
    }

    tup.updateTransform(state.tupTransform, state.charTransform);
    tup.updateGap(state.gap);
    tup.print(tupLayer, state.style);

    // DEBUG CENTER LINES
    // tupLayer.line(0, -state.size.y, 0, state.size.y);
    // tupLayer.line(-state.size.x, 0, state.size.x, 0);

    p5.image(bgLayer, 0, 0);
    p5.image(tupLayer, 0, 0);
  };

  // p5.windowRestate.sized = () => {};

  p5.resize = () => {
    p5.resizeCanvas(state.size.x, state.size.y);
  };

  p5.resetTup = () => {
    tup.init(state.text);
  };
};
