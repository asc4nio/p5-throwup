<script>
  import { STATE } from "./stores/Store";
</script>

<div id="controls">
  <!-- text -->
  <div class="control-item">
    <label for="c-string">text:</label>
    <input id="c-string" type="text" bind:value={$STATE.string} />
  </div>
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
  <!-- translate -->
  <div class="control-group" data-title="translate">
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
  <div class="control-group" data-title="scale">
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
  <div class="control-group" data-title="shear">
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
  <div class="control-group" data-title="fill">
    <!-- fill-r -->
    <div class="control-item">
      <label for="c-fill-r">r:</label>
      <input
        id="c-fill-r"
        type="range"
        min="0"
        max="255"
        step="1"
        bind:value={$STATE.config.fillStyle.fill[0]}
      />
    </div>
    <!-- fill-g -->
    <div class="control-item">
      <label for="c-fill-g">g:</label>
      <input
        id="c-fill-g"
        type="range"
        min="0"
        max="255"
        step="1"
        bind:value={$STATE.config.fillStyle.fill[1]}
      />
    </div>
    <!-- fill-b -->
    <div class="control-item">
      <label for="c-fill-b">b:</label>
      <input
        id="c-fill-b"
        type="range"
        min="0"
        max="255"
        step="1"
        bind:value={$STATE.config.fillStyle.fill[2]}
      />
    </div>
    <!-- fill-b -->
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
  <!-- thickness-y -->
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
</div>

<style>
  #controls {
    display: flex;
    flex-direction: column;
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
