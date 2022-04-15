<script>
  import Portal from "./Portal.svelte";
  import { id } from "./store.js";
  import { getContext } from "svelte";

  const modalId = getContext("modalId");
  const wrapper = getContext("wrapper");
  const small = getContext("small");
  const big = getContext("big");
  const button = getContext("button");

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
    <div
      class="modal__content"
      class:modal__big={big}
      class:modal__small={small}
      class:modal__nobg={!wrapper}
    >
      {#if button}
        <div
          class="close__button"
          class:close__nobg={!wrapper}
          on:click={() => ($id = false)}
        >
          &times;
        </div>
      {/if}
      {#if modalId == $id}
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
    margin: 100px auto;
    max-width: 800px;
    width: 80%;
    background-color: #fefefe;
    border: 1px solid #888;
    padding: 20px;
    display: grid;
    place-items: center;
  }
  .modal__big {
    max-width: 100%;
    padding: 0;
    margin: 3% auto;
  }
  .modal__small {
    max-width: 400px;
    padding: 0;
  }
  .modal__nobg {
    background-color: transparent;
    border: none;
    padding: 0;
  }
  .close__button {
    position: absolute;
    top: -0.75rem;
    right: -0.75rem;
    color: #ddd;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    background: rgb(233, 77, 77);
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  .close__button:hover,
  .close__button:focus {
    text-decoration: none;
    color: #ccc;
    background: rgb(211, 60, 60);
  }

  .hidden {
    display: none;
  }
  :global(.modal__content *) {
    max-width: 100%;
  }
</style>
