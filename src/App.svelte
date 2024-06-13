<script>
  import p5 from "p5";
  import { mySketch } from "./lib/Sketch";
  import {
    STRING,
    CELL_SIZE,
    GAP,
    THICKNESS,
    MARGIN,
  } from "./lib/stores/AppStore";
  import { onMount } from "svelte";

  let p5Sketch;
  onMount(() => {
    p5Sketch = new p5(mySketch, document.getElementById("sketch"));
  });
</script>

<main>
  <div id="sketch"></div>
  <div id="controls" hidden>
    <!-- STRING -->
    <input type="text" id="input" bind:value={$STRING} />
    <!-- THICKNESS -->
    <label for="thickness">thickness:</label>
    <input
      id="thickness"
      type="range"
      min="1"
      max="50"
      step="1"
      bind:value={$THICKNESS}
    />
    <!-- CELL -->
    <label for="cell-size-x">cell.x:</label>
    <input
      id="cell-size-x"
      type="range"
      min="0"
      max="100"
      step="1"
      bind:value={$CELL_SIZE.x}
    />
    <label for="cell-size-y">cell.y:</label>
    <input
      id="cell-size-y"
      type="range"
      min="0"
      max="100"
      step="1"
      bind:value={$CELL_SIZE.y}
    />
    <!-- MARGIN -->
    <label for="margin">margin:</label>
    <input
      id="margin"
      type="range"
      min="0"
      max="100"
      step="1"
      bind:value={$MARGIN}
    />
    <!-- GAP -->
    <label for="gap-size-x">gap.x:</label>
    <input
      id="gap-size-x"
      type="range"
      min="-100"
      max="100"
      step="1"
      bind:value={$GAP.x}
    />
    <label for="gap-size-y">gap.y:</label>
    <input
      id="gap-size-y"
      type="range"
      min="-100"
      max="100"
      step="1"
      bind:value={$GAP.y}
    />
  </div>
</main>
