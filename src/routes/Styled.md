<script>
  import Modal from "$lib/Modal.svelte";
  import Trigger from "$lib/Trigger.svelte";
  import Content from "$lib/Content.svelte";
</script>

## Add classes to style

<Modal basic>
  <Content class="p-4">
    <h2>Hello world</h2>
  </Content>
  <Trigger>
    <button class="btn">Open modal with class p-4 (tailwind, bootstrap, or class based framework) on Content</button>
  </Trigger>
</Modal>
<br />
<br />

```svelte
<Modal basic>
  <Content class="p-4">
    <h2>Hello world</h2>
  </Content>
  <Trigger>
    <button class="btn">Open modal with class p-4 (tailwind, bootstrap, or class based framework) on Content</button>
  </Trigger>
</Modal>
```
