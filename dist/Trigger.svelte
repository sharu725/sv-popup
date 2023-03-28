<script>
  import { id } from "./store.js";
  import { getContext } from "svelte";
  let className = "";
  export { className as class };
  const modalId = getContext("modalId");
  const openModal = () => {
    $id = modalId;
  };
</script>

<span class={className ? className : ""} on:click={openModal} {...$$restProps}>
  <slot />
</span>

<style>
  span:hover {
    cursor: pointer;
  }
</style>
