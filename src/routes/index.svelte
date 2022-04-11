<script>
  import Modal from "$lib/Modal.svelte";
  import Trigger from "$lib/Trigger.svelte";
  import Content from "$lib/Content.svelte";
</script>

<h1>sv-popup</h1>

<Modal>
  <Content>
    <h2>Hello</h2>
  </Content>
  <Trigger>
    <button>Open Modal</button>
  </Trigger>
</Modal>
<br>
<Modal>
  <Content>
    <h2>Hello 2</h2>
  </Content>
  <Trigger>
    <button>Open Modal 2</button>
  </Trigger>
</Modal>
<br>
<Modal>
  <Content>
    <iframe
      width="1524"
      height="720"
      src="https://www.youtube.com/embed/0biOqMhm-AM"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </Content>
  <Trigger>
    <button>Open video</button>
  </Trigger>
</Modal>

<style>
  h1 {
    text-decoration: underline;
    text-decoration-style: dashed;
  }
</style>
