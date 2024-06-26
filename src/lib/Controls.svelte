<script>
  export let p5;
  import { STATE } from "./stores/Store";
  import {
    Pane,
    Folder,
    Point,
    Text,
    Wheel,
    Color,
    Slider,
    Checkbox,
  } from "svelte-tweakpane-ui";
</script>

<Pane position={"inline"} title="ThrowUp">
  <!-- <Folder expanded title="ThrowUp"> -->
  <Text bind:value={$STATE.text} label="text" on:change={p5.resetTup} />

  <Point
    bind:value={$STATE.position}
    expanded={false}
    label="position"
    picker="inline"
    userExpandable={true}
    min={-400}
    max={400}
  />

  <Wheel bind:value={$STATE.rotation} amount={0.001} label="rotation" />
  <Wheel bind:value={$STATE.gap} label="gap" />
  <!-- </Folder> -->
  <Folder expanded title="Characters">
    <Point
      bind:value={$STATE.charConfig.transform.translate}
      expanded={false}
      label="position"
      picker="inline"
      userExpandable={true}
      min={-400}
      max={400}
    />
    <Wheel
      label="rotation"
      amount={0.001}
      bind:value={$STATE.charConfig.transform.rotate}
    />
    <Point
      label="scale"
      bind:value={$STATE.charConfig.transform.scale}
      expanded={false}
      picker="inline"
      userExpandable={true}
      min={-10}
      max={10}
    />
    <Point
      bind:value={$STATE.charConfig.transform.shear}
      expanded={false}
      label="shear"
      picker="inline"
      userExpandable={true}
      min={-1}
      max={1}
      amount={0.001}
    />

    <Color
      on:change={(e) => {
        console.log(e);
      }}
      bind:value={$STATE.charConfig.style.fill.fill}
      label="Fill Color"
      type="int"
    />
    <Color
      on:change={(e) => {
        console.log(e);
      }}
      bind:value={$STATE.charConfig.style.outline.stroke}
      label="Outline Color"
      type="int"
    />

    <Slider
      bind:value={$STATE.charConfig.style.outline.strokeWeight}
      min={0}
      max={50}
      label="Thickness"
    />
    <Folder expanded title="Shadow">
      <Checkbox
        bind:value={$STATE.charConfig.style.shadow.enable}
        label="enable"
      />

      <Point
        bind:value={$STATE.charConfig.style.shadow.position}
        expanded={false}
        label="position"
        picker="inline"
        userExpandable={true}
        min={-100}
        max={100}
      />
    </Folder>
  </Folder>
</Pane>
