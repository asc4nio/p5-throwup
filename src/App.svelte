<script>
  import p5 from "p5";
  import { mySketch } from "./lib/Sketch";
  import { onMount } from "svelte";
  import Controls from "./lib/Controls.svelte";

  // import { STATE } from "./lib/stores/Store";

  let p5Sketch;
  onMount(() => {
    p5Sketch = new p5(mySketch, document.getElementById("sketch"));
  });
</script>

<main>
  <div id="sketch"></div>

  <Controls p5={p5Sketch}></Controls>
</main>
