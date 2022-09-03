<script>
  import Modal from "$lib/Modal.svelte";
  import Trigger from "$lib/Trigger.svelte";
  import Content from "$lib/Content.svelte";

  let closeModal;

  const handleKeyPress = ({key}) => {
    if(key === "c") {
      closeModal = true
    }
  }

</script>

## Close modal programmatically

<Modal basic close={closeModal}>
  <Content>
    <h2>Hello</h2>
    <p>Press "c" on the keyboard to close this Modal.</p>
  </Content>
  <Trigger>
    <button class="btn" on:click={() => closeModal=false}>Open modal default + programmatically close</button>
  </Trigger>
</Modal>
<br />
<br />

```svelte
<script>
  let closeModal = false;
  //set this to true by an event
</script>

<Modal basic close={closeModal}>
  <Content>
    <h2>Hello</h2>
  </Content>
  <Trigger>
    <button class="btn">Open modal default + external tigger to close</button>
  </Trigger>
</Modal>
```

<svelte:window on:keydown={handleKeyPress} />
