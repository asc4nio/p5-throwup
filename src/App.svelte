<script>
  import p5 from "p5";
  import { mySketch } from "./lib/Sketch";
  import { onMount } from "svelte";
  import Controls from "./lib/Controls.svelte";
  import { Pane, Point } from "svelte-tweakpane-ui";
  import { STATE, TUP_CONFIG } from "./lib/stores/Store";

  let state = {
    tupConfig: {
      string: "ascanio",
      position: { x: 0, y: 0 },
      rotation: 0,
      gap: -10,
    },
    charConfig: {
      cellSize: 40,
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
          y: 0.0,
        },
      },
      style: {
        fill: {
          fill: [255, 255, 255],
          stroke: [255, 255, 255],
          strokeWeight: 1,
        },
        outline: {
          fill: [0, 0],
          stroke: [0, 0, 0],
          strokeWeight: 4,
        },
      },
    },
    bgConfig: {
      color: [50, 50, 50, 255],
    },
  };

  let p5Sketch;
  onMount(() => {
    p5Sketch = new p5(mySketch, document.getElementById("sketch"));
  });
</script>

<main>
  <div id="sketch"></div>
  <!-- <Pane position={"inline"} title="Pane">
    <Point
      bind:value={$TUP_CONFIG.position}
      expanded={true}
      label="tup_position"
      picker="inline"
      userExpandable={true}
    />
  </Pane> -->

  <!-- <Controls></Controls> -->
</main>
