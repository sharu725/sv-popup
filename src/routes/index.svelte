<script>
  import Modal from "$lib/Modal.svelte";
  import Trigger from "$lib/Trigger.svelte";
  import Content from "$lib/Content.svelte";
</script>

<Modal>
  <Content>
    <h1>Hello</h1>
  </Content>
  <Trigger>
    <button>Open Modal</button>
  </Trigger>
</Modal>

<Modal>
  <Content>
    <h1>Hello 2</h1>
  </Content>
  <Trigger>
    <button>Open Modal 2</button>
  </Trigger>
</Modal>
