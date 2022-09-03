<script>
  import Modal from "$lib/Modal.svelte";
  import Trigger from "$lib/Trigger.svelte";
  import Content from "$lib/Content.svelte";
</script>

## Unstyled by default

<Modal>
  <Content>
    <h2>Hello world</h2>
  </Content>
  <Trigger>
    <button class="btn">Open a simple unstyled modal</button>
  </Trigger>
</Modal>
<br />
<br />

```svelte
<Modal>
  <Content>
    <h2>Hello</h2>
  </Content>
  <Trigger>
    <button class="btn">Open a simple unstyled modal</button>
  </Trigger>
</Modal>
```

This modal will not have any background. You can define any background through CSS.
