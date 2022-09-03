<script>
  import { id } from "./store";
  import { setContext } from "svelte";
  export let big = false;
  export let fullscreen = false;
  export let small = false;
  export let button = true;
  export let basic = false;
  export let close = false;

  setContext("modalId", Symbol());
  setContext("fullscreen", fullscreen);
  setContext("big", big);
  setContext("small", small);
  setContext("button", button);
  setContext("basic", basic);
  setContext("rest", $$restProps);

  $: {
    if (close) $id = false;
  }
</script>

<slot />
