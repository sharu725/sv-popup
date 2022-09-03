<script>
  import Modal from "$lib/Modal.svelte";
  import Trigger from "$lib/Trigger.svelte";
  import Content from "$lib/Content.svelte";
</script>

## Image as a trigger & content

<Modal big={true} button={false}>
  <Content>
    <img src="https://picsum.photos/id/237/1600/800" alt="a dog" loading="lazy" />
  </Content>
  <Trigger>
    <img src="https://picsum.photos/id/237/300/200" alt="a dog" loading="lazy" />
  </Trigger>
</Modal>
<br />
<br />

```svelte
<Modal big={true} button={false}>
  <Content>
    <img src="https://picsum.photos/id/237/1000/600" alt="a dog" />
  </Content>
  <Trigger>
    <img src="https://picsum.photos/id/237/300/200" alt="a dog" />
  </Trigger>
</Modal>
```
