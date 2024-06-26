// https://www.npmjs.com/package/p5.capture

import { ThrowUp } from "./ThrowUp";
import { Bang, Wall } from "./Decos";

import { STATE } from "./stores/Store";
import { get } from "svelte/store";

// import gsap from "gsap";

export const mySketch = (p5) => {
  let state = get(STATE);

  const size = {
    x: 540,
    y: 540,
  };
  let tup, tupLayer;
  let b, bangLayer;
  let w;

  p5.setup = () => {
    // p5.frameRate(60);
    p5.pixelDensity(4);
    p5.createCanvas(size.x, size.y);
    tupLayer = p5.createGraphics(size.x, size.y);
    bangLayer = p5.createGraphics(size.x, size.y);

    p5.noSmooth();
    tupLayer.noSmooth();
    bangLayer.noSmooth();

    // CENTER LAYERS
    tupLayer.translate(size.x / 2, size.y / 2);
    bangLayer.translate(size.x / 2, size.y / 2);

    b = new Bang(
      9,
      800,
      0.1,
      {
        x: 1.2,
        y: 0.5,
      },
      0.4
    );
    console.log(b);

    tup = new ThrowUp(
      state.text,
      state.position,
      state.rotation,
      state.gap,
      state.charConfig
    );
    // tup.animate();
    console.log(tup);

    w = new Wall(size, {
      x: 40,
      y: 20,
    });

    // setTimeout(() => {
    //   tup.updateString("ascanio");
    // }, 2000);

    // (() => {
    //   gsap
    //     .timeline({ repeat: -1, yoyo: true })
    //     .to(
    //       tup.charConfig.transform,
    //       {
    //         rotate: 0.2,
    //         duration: 2,
    //         ease: "power4.inOut",
    //       },
    //       "0"
    //     )
    //     .to(
    //       tup.charConfig.transform.shear,
    //       {
    //         y: 0.5,
    //         x: 0.5,
    //         duration: 2,
    //         ease: "power4.inOut",
    //       },
    //       "0"
    //     )
    //     .to(
    //       tup.charConfig.transform.scale,
    //       {
    //         y: 3,
    //         x: 0.5,
    //         duration: 2,
    //         ease: "power4.inOut",
    //       },
    //       "0"
    //     )
    //     .to(
    //       tup.tupConfig,
    //       {
    //         rotation: -0.2,
    //         duration: 2,
    //         ease: "power4.inOut",
    //       },
    //       "0"
    //     )
    //     .to(
    //       tup.charConfig.style.outline,
    //       {
    //         strokeWeight: 1,
    //         duration: 2,
    //         ease: "power4.inOut",
    //       },
    //       "0"
    //     );
    // })();
  };

  p5.draw = () => {
    // console.log(tup.rotation);

    tup.update(state.position, state.rotation, state.gap);

    // reset buffers
    p5.clear();
    tupLayer.clear();
    bangLayer.clear();

    p5.background(125);

    w.print(p5);
    // b.print(bangLayer);
    tup.print(tupLayer);

    // DEBUG CENTER LINES
    // tupLayer.line(0, -size.y, 0, size.y);
    // tupLayer.line(-size.x, 0, size.x, 0);

    p5.image(bangLayer, 0, 0);
    p5.image(tupLayer, 0, 0);
  };

  p5.windowResized = () => {};

  p5.resetTup = () => {
    tup.init(state.text);
  };
};
