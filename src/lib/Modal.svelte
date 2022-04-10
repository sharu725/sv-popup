<script>
  import { setContext } from "svelte";
  setContext("modalId", Symbol());
</script>

<div>
  <slot />
</div>
