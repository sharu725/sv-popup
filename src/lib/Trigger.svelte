<script>
  import { id } from "./store.js";
  import { getContext } from "svelte";
  let className = "";
  export { className as class };
  const modalId = getContext("modalId");
</script>

<span
  class={className ? className : ""}
  on:click={() => ($id = modalId)}
  {...$$restProps}
>
  <slot />
</span>

<style>
  span:hover {
    cursor: pointer;
  }
</style>
