<script>
  import { STATE } from "./stores/Store";
</script>

<div id="controls">
  <!-- text -->
  <div class="control-item">
    <label for="c-string">text:</label>
    <input id="c-string" type="text" bind:value={$STATE.string} />
  </div>
  <!-- background-color -->
  <div class="control-item">
    <label for="c-background-color">background:</label>
    <input
      id="c-background-color"
      type="color"
      on:input={(e) => {
        console.log(e);
        const color = e.target.value;
        const r = parseInt(color.substr(1, 2), 16);
        const g = parseInt(color.substr(3, 2), 16);
        const b = parseInt(color.substr(5, 2), 16);
        console.log(`red: ${r}, green: ${g}, blue: ${b}`);

        $STATE.config.backgroundColor[0] = r;
        $STATE.config.backgroundColor[1] = g;
        $STATE.config.backgroundColor[2] = b;
      }}
    />
  </div>
  <!-- gap -->
  <div class="control-item">
    <label for="c-gap">gap:</label>
    <input
      id="c-gap"
      type="range"
      min="-60"
      max="100"
      step="1"
      bind:value={$STATE.config.gap}
    />
  </div>
  <div class="control-group" data-title="TRANSFORM">
    <!-- size -->
    <div class="control-item">
      <label for="c-size">size:</label>
      <input
        id="c-size"
        type="range"
        min="1"
        max="100"
        step="1"
        bind:value={$STATE.config.cellSize}
      />
    </div>
    <!-- rotate -->
    <div class="control-item">
      <label for="c-rotate">rotate:</label>
      <input
        id="c-rotate"
        type="range"
        min="-1"
        max="1"
        step="0.01"
        bind:value={$STATE.config.transform.rotate}
      />
    </div>
  </div>
  <!-- translate -->
  <div class="control-group" data-title="TRANSLATE">
    <!-- translate-x -->
    <div class="control-item">
      <label for="c-translate-x">x:</label>
      <input
        id="c-translate-x"
        type="range"
        min="-400"
        max="400"
        step="1"
        bind:value={$STATE.config.transform.translate.x}
      />
    </div>
    <!-- translate-y -->
    <div class="control-item">
      <label for="c-translate-y">y:</label>
      <input
        id="c-translate-y"
        type="range"
        min="-400"
        max="400"
        step="1"
        bind:value={$STATE.config.transform.translate.y}
      />
    </div>
  </div>
  <!-- scale -->
  <div class="control-group" data-title="SCALE">
    <!-- scale-x -->
    <div class="control-item">
      <label for="c-scale-x">x:</label>
      <input
        id="c-scale-x"
        type="range"
        min="-2"
        max="2"
        step="0.01"
        bind:value={$STATE.config.transform.scale.x}
      />
    </div>
    <!-- scale-y -->
    <div class="control-item">
      <label for="c-scale-y">y:</label>
      <input
        id="c-scale-y"
        type="range"
        min="-2"
        max="2"
        step="0.01"
        bind:value={$STATE.config.transform.scale.y}
      />
    </div>
  </div>
  <!-- shear -->
  <div class="control-group" data-title="SHEAR">
    <!-- shear-x -->
    <div class="control-item">
      <label for="c-shear-x">x:</label>
      <input
        id="c-shear-x"
        type="range"
        min="-1"
        max="1"
        step="0.01"
        bind:value={$STATE.config.transform.shear.x}
      />
    </div>
    <!-- shear-y -->
    <div class="control-item">
      <label for="c-shear-y">y:</label>
      <input
        id="c-shear-y"
        type="range"
        min="-1"
        max="1"
        step="0.01"
        bind:value={$STATE.config.transform.shear.y}
      />
    </div>
  </div>
  <!-- fill -->
  <div class="control-group" data-title="FILL">
    <!-- fill-color -->
    <div class="control-item">
      <label for="c-fill-color">color:</label>
      <input
        id="c-fill-color"
        type="color"
        on:input={(e) => {
          console.log(e);
          const color = e.target.value;
          const r = parseInt(color.substr(1, 2), 16);
          const g = parseInt(color.substr(3, 2), 16);
          const b = parseInt(color.substr(5, 2), 16);
          console.log(`red: ${r}, green: ${g}, blue: ${b}`);

          $STATE.config.fillStyle.fill[0] = r;
          $STATE.config.fillStyle.fill[1] = g;
          $STATE.config.fillStyle.fill[2] = b;
        }}
      />
    </div>
    <!-- fill-a -->
    <div class="control-item">
      <label for="c-fill-a">a:</label>
      <input
        id="c-fill-a"
        type="range"
        min="0"
        max="255"
        step="1"
        bind:value={$STATE.config.fillStyle.fill[3]}
      />
    </div>
  </div>
  <!-- stroke -->
  <div class="control-group" data-title="STROKE">
    <!-- thickness -->
    <div class="control-item">
      <label for="c-thickness">thickness:</label>
      <input
        id="c-thickness"
        type="range"
        min="0"
        max="30"
        step="0.01"
        bind:value={$STATE.config.outlineStyle.strokeWeight}
      />
    </div>
    <!-- stroke-color -->
    <div class="control-item">
      <label for="c-stroke-color">color:</label>
      <input
        id="c-stroke-color"
        type="color"
        bind:value={$STATE.config.outlineStyle.stroke2}
        on:input={(e) => {
          console.log(e);
          const color = e.target.value;
          const r = parseInt(color.substr(1, 2), 16);
          const g = parseInt(color.substr(3, 2), 16);
          const b = parseInt(color.substr(5, 2), 16);
          console.log(`red: ${r}, green: ${g}, blue: ${b}`);

          $STATE.config.outlineStyle.stroke[0] = r;
          $STATE.config.outlineStyle.stroke[1] = g;
          $STATE.config.outlineStyle.stroke[2] = b;
        }}
      />
    </div>
    <!-- stroke-alpha -->
    <div class="control-item">
      <label for="c-stroke-alpha">alpha:</label>
      <input
        id="c-stroke-alpha"
        type="range"
        min="0"
        max="255"
        step="1"
        bind:value={$STATE.config.outlineStyle.stroke[3]}
      />
    </div>
  </div>
</div>

<style>
  #controls {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem;
  }

  .control-group {
    position: relative;
  }
  .control-group::before {
    content: attr(data-title);
    height: 1x;
    width: 100%;
    background-color: black;
  }
</style>
