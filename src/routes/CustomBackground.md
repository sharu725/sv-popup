<script>
  import Modal from "$lib/Modal.svelte";
  import Trigger from "$lib/Trigger.svelte";
  import Content from "$lib/Content.svelte";
</script>

## Use custom background

<Modal>
  <Content class="bg-indigo-400 p-4">
    <h2>Hello</h2>
  </Content>
  <Trigger>
    <button class="btn">Open modal with custom background</button>
  </Trigger>
</Modal>
<br />
<br />

```svelte
<Modal>
  <Content class="bg-indigo-400 p-4">
    <h2>Hello</h2>
  </Content>
  <Trigger>
    <button class="btn">Open modal with custom background</button>
  </Trigger>
</Modal>
```
