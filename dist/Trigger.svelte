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

<span
  role="button"
  aria-pressed="false"
  class={className ? className : ""}
  on:click={openModal}
  {...$$restProps}
  tabindex="0"
>
  <slot />
</span>

<style>
  span:hover {
    cursor: pointer;
  }
</style>
