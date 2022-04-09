<script>
	import { id } from "./store.js"
	import { getContext } from "svelte"
	const modalId = getContext("modalId")
</script>
<span on:click={() => $id = modalId}>
	<slot />
</span>

<style>
	span:hover	 {
		cursor: pointer;
	}
</style>