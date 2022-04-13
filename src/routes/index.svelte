<script>
  import Modal from "$lib/Modal.svelte";
  import Trigger from "$lib/Trigger.svelte";
  import Content from "$lib/Content.svelte";
</script>

<h1>sv-popup</h1>
An easy to use popup/modal utility for svelte.

<h2>Features</h2>
<ul>
  <li>easy to use components</li>
  <li>click outside or escape to close modal</li>
  <li>uses portal</li>
  <li>
    <a target="_blank" href="https://bundlephobia.com/package/sv-popup@0.1.0"
      >less than 1KB (minified+gzipped)</a
    >
  </li>
</ul>

<Modal>
  <Content>
    <h2>Hello</h2>
  </Content>
  <Trigger>
    <button>Open Modal</button>
  </Trigger>
</Modal>
<br />
<Modal>
  <Content>
    <h2>Hello 2</h2>
  </Content>
  <Trigger>
    <button>Open Modal 2</button>
  </Trigger>
</Modal>
<br />
<Modal>
  <Content>
    <iframe
      src="https://www.youtube.com/embed/7xDcmL5-ET8"
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
  iframe {
    width: 100%;
    aspect-ratio: 16/9;
    height: auto;
  }
</style>
