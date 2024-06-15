<script>
  import { CONTROLS } from "./stores/Store";
</script>

<label for="c-string">text:</label>
<input
  id="c-string"
  type="text"
  bind:value={$CONTROLS.string}
  placeholder="text"
/>
