<script>
  import p5 from "p5";
  import { mySketch } from "./lib/Sketch";
  import { onMount } from "svelte";
  import Controls from "./lib/Controls.svelte";

  let p5Sketch;
  onMount(() => {
    p5Sketch = new p5(mySketch, document.getElementById("sketch"));
  });
</script>

<main>
  <div id="sketch"></div>
  <Controls></Controls>
</main>
