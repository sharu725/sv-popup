<script>
  import { onMount } from "svelte";

  let ref;
  let portal;

  onMount(() => {
    portal = document.createElement("div");
    portal.className = "portal";
    document.body.appendChild(portal);
    portal.appendChild(ref);
    return () => {
      document.body.removeChild(portal);
    };
  });
</script>

<div class="portal-clone">
  <div bind:this={ref}>
    <slot />
  </div>
</div>

<style>
  .portal-clone {
    display: none;
  }
</style>
