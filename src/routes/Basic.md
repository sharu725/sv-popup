<script>
  import Modal from "$lib/Modal.svelte";
  import Trigger from "$lib/Trigger.svelte";
  import Content from "$lib/Content.svelte";
</script>

## Basic

<Modal basic>
  <Content>
    <h2>Hello</h2>
  </Content>
  <Trigger>
    <button class="btn">Open modal default (basic prop)</button>
  </Trigger>
</Modal>
<br />
<br />

```svelte
<Modal basic>
  <Content>
    <h2>Hello</h2>
  </Content>
  <Trigger>
    <button class="btn">Open modal default (basic prop)</button>
  </Trigger>
</Modal>
```
