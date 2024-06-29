<script>
  export let p5;
  import { STATE } from "./stores/Store";
  import {
    Pane,
    Folder,
    Button,
    Point,
    Text,
    Wheel,
    Color,
    Slider,
    Checkbox,
    AutoObject,
    List,
  } from "svelte-tweakpane-ui";

  const bgTypes = ["wall", "bang"];
</script>

<Pane position={"inline"} title="ThrowUp">
  <!-- <Point
    bind:value={$STATE.size}
    expanded={false}
    label="size"
    picker="inline"
    userExpandable={true}
    min={0}
    max={540}
    on:change={p5.resize}
  /> -->
  <Text bind:value={$STATE.text} label="text" on:change={p5.resetTup} />

  <Folder expanded={false} title="ThrowUp">
    <Wheel bind:value={$STATE.gap} label="gap" />
    <AutoObject bind:object={$STATE.tupTransform} />
  </Folder>
  <Folder expanded={false} title="Characters">
    <AutoObject bind:object={$STATE.charTransform} />
  </Folder>
  <Folder expanded={false} title="Style">
    <AutoObject bind:object={$STATE.style} />
  </Folder>
  <Folder expanded={false} title="Background">
    <Color bind:value={$STATE.background.color} label="Color" />
    <List bind:value={$STATE.background.type} label="Type" options={bgTypes} />
    <!-- <AutoObject bind:object={$STATE.background} /> -->
  </Folder>

  <Button on:click={() => p5.save()} title="Save image" />

  <!-- <Point
    bind:value={$STATE.position}
    expanded={false}
    label="position"
    picker="inline"
    userExpandable={true}
    min={-400}
    max={400}
  />

  <Wheel bind:value={$STATE.rotation} amount={0.001} label="rotation" />
  <Wheel bind:value={$STATE.gap} label="gap" /> -->

  <!-- <Folder expanded title="Characters">
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
        //console.log(e);
      }}
      bind:value={$STATE.charConfig.style.fill.fill}
      label="Fill Color"
      type="int"
    />
    <Color
      on:change={(e) => {
        //console.log(e);
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
  </Folder> -->
</Pane>
