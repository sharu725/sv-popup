<script>
  import { setContext } from "svelte";
  import { nanoid } from "nanoid";
  setContext("modalId", nanoid());
</script>

<div>
  <slot />
</div>
