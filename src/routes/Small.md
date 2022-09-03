<script>
  import Modal from "$lib/Modal.svelte";
  import Trigger from "$lib/Trigger.svelte";
  import Content from "$lib/Content.svelte";
</script>

## Small

<Modal basic small={true}>
  <Content>
    <h2>Hello world</h2>
  </Content>
  <Trigger>
    <button class="btn">Open modal small</button>
  </Trigger>
</Modal>
<br />
<br />

```svelte
<Modal basic small={true}>
  <Content>
    <h2>Hello world</h2>
  </Content>
  <Trigger>
    <button class="btn">Open modal small</button>
  </Trigger>
</Modal>
```
