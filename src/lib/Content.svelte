<script>
  import Portal from "./Portal.svelte";
  import { id } from "./store.js";
  import { getContext } from "svelte";

  const modalId = getContext("modalId");
  const small = getContext("small");
  const big = getContext("big");
  const button = getContext("button");
  const basic = getContext("basic");

  let rest = getContext("rest");

  const modalClass = rest.class;
  delete rest.class;

  let className = "";
  export { className as class };

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
  <div
    class={`modal__container ${modalClass ? modalClass : ""}`}
    class:hidden={modalId !== $id}
    {...rest}
  >
    <div
      class={`modal__content ${className ? className : ""}`}
      class:modal__big={big}
      class:modal__small={small}
      {...$$restProps}
      style:background-color={basic ? "white" : null}
    >
      {#if button}
        <div class="close__button" on:click={() => ($id = false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--icon-park"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48"
            ><g fill="none" stroke-linejoin="round" stroke-width="4"
              ><path
                fill="currentColor"
                stroke="currentColor"
                d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
              /><path
                stroke="#fff"
                stroke-linecap="round"
                d="M29.6569 18.3431L18.3432 29.6568"
              /><path
                stroke="#fff"
                stroke-linecap="round"
                d="M18.3432 18.3431L29.6569 29.6568"
              /></g
            ></svg
          >
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

  .close__button {
    position: absolute;
    top: -0.75rem;
    right: -0.75rem;
    color: rgb(233, 71, 71);
    cursor: pointer;
    transition-duration: 200ms;
  }

  .close__button:hover,
  .close__button:focus {
    transform: scale(1.1);
    color: rgb(214, 69, 69);
  }

  .hidden {
    display: none;
  }
  :global(.modal__content *) {
    max-width: 100%;
  }
</style>
