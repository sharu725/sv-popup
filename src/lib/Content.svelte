<script>
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
      event.target.classList.contains("modal") &&
      !event.target.classList.contains("close-button")
    ) {
      $id = false;
    }
  };
</script>

<div>
  <div class="modal" class:hidden={modalId !== $id}>
    <div class="content">
      <div class="close-button" on:click={() => ($id = false)}>&times;</div>
      <slot />
    </div>
  </div>
</div>

<svelte:window on:keydown={keyPressed} on:click={clicked} />

<style>
  .modal {
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
  .content {
    position: relative;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  .close-button {
    position: absolute;
    top: 0;
    right: 0.5rem;
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }
  .close-button:hover,
  .close-button:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  .hidden {
    display: none;
  }
</style>
