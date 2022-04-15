<script>
  import { setContext } from "svelte";
  export let wrapper = true;
  export let big = false;
  export let small = false;
  export let button = true;
  setContext("modalId", Symbol());
  setContext("wrapper", wrapper);
  setContext("big", big);
  setContext("small", small);
  setContext("button", button);
</script>

<slot />
