<script>
  import Portal from "./Portal.svelte";
  import { id } from "./store.js";
  import { getContext } from "svelte";

  const modalId = getContext("modalId");

  const keyPressed = (event) => {
    if (event.key === "Escape") {
      $id = false;
    }
  };

  const clicked = (event) => {
    if (
      event.target.classList.contains("modal__container") &&
      !event.target.classList.contains("close__button")
    ) {
      $id = false;
    }
  };
</script>

<Portal>
  <div class="modal__container" class:hidden={modalId !== $id}>
    <div class="modal__content">
      <div class="close__button" on:click={() => ($id = false)}>&times;</div>
      {#if $id}
        <slot />
      {/if}
    </div>
  </div>
</Portal>

<svelte:window on:keydown={keyPressed} on:click={clicked} />

<style>
  .modal__container {
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }
  .modal__content {
    position: relative;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  .close__button {
    position: absolute;
    top: 0;
    right: 0.5rem;
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }
  .close__button:hover,
  .close__button:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  .hidden {
    display: none;
  }
  :global(.modal__content *) {
    max-width: 100%;
  }
</style>
