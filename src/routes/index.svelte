<script>
  import Modal from "$lib/Modal.svelte";
  import Trigger from "$lib/Trigger.svelte";
  import Content from "$lib/Content.svelte";
</script>

<h1>sv-popup</h1>
<p>An easy to use popup/modal utility for svelte.</p>

<h2>Features</h2>
<ul>
  <li>easy to use components</li>
  <li>click outside or escape to close modal</li>
  <li>uses portal</li>
  <li>pass classes and attributes to Modal, Content, & Trigger</li>
  <li>
    <a target="_blank" href="https://bundlephobia.com/package/sv-popup@0.1.0"
      >less than 1KB (minified+gzipped)</a
    >
  </li>
</ul>

<Modal basic>
  <Content>
    <h2>Hello</h2>
  </Content>
  <Trigger>
    <button>Open modal default (basic prop)</button>
  </Trigger>
</Modal>
<br />
<br />
<Modal small={true}>
  <Content>
    <h2>Hello world</h2>
  </Content>
  <Trigger>
    <button>Open modal small</button>
  </Trigger>
</Modal>
<p>
  This modal without <code>basic</code> prop will not have a background. It should
  be explicitly added.
</p>
<br />
<br />
<Modal basic>
  <Content class="p-4">
    <h2>Hello world</h2>
  </Content>
  <Trigger>
    <button>Open modal with class p-4 (tailwind) on Content</button>
  </Trigger>
</Modal>
<br />
<br />
<Modal>
  <Content class="bg-red">
    <h2>Hello</h2>
  </Content>
  <Trigger>
    <button>Open modal with custom background</button>
  </Trigger>
</Modal>
<br />
<br />
<Modal basic big={true}>
  <Content>
    <h2>Hello world</h2>
  </Content>
  <Trigger>
    <button>Open modal big</button>
  </Trigger>
</Modal>
<br />
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
    <button>Open video default</button>
  </Trigger>
</Modal>
<br />
<br />

<Modal wrapper={false} big={true} button={false}>
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
    <button>Open video + big layout + no close button</button>
  </Trigger>
</Modal>
<br />
<br />
<p>An image as a trigger and content</p>
<Modal wrapper={false} big={true} button={false}>
  <Content>
    <img src="https://picsum.photos/id/237/1000/600" alt="a dog" />
  </Content>
  <Trigger>
    <img src="https://picsum.photos/id/237/300/200" alt="a dog" />
  </Trigger>
</Modal>
<br />
<br />
<a href="https://github.com/sharu725/sv-popup">Open an issue</a>

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
  br {
    display: block;
  }
  :global(.p-4) {
    padding: 2rem !important;
  }
  :global(.bg-red) {
    background-color: #6569db;
  }
</style>
