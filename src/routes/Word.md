<script>
  import Modal from "$lib/Modal.svelte";
  import Trigger from "$lib/Trigger.svelte";
  import Content from "$lib/Content.svelte";
</script>

## Use it in paragraphs

A word in a paragraph can be a <Modal basic><Content><h2>Hello</h2></Content><Trigger><span class="underline">modal trigger</span></Trigger></Modal>

Click on the word `modal` to pop it.

```svelte
A word in a paragraph can be a  <Modal basic><Content><h2>Hello</h2></Content><Trigger>modal</Trigger></Modal>
```

<style>
  .underline {
    text-decoration: underline;
  }
</style>
