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

<h1>sv-popup</h1>
<p>An easy to use popup/modal utility for svelte.</p>

## Features

- easy to use components.
- **click outside** or **escape** to close modal.
- uses portal.
- pass classes and attributes to Modal, Content, & Trigger.
- [less than 1KB (minified+gzipped)](https://bundlephobia.com/package/sv-popup)

## Props

|   Prop   | Default | Feature                              |
| :------: | :-----: | ------------------------------------ |
| `basic`  | `false` | Adds a white background to the Modal |
| `small`  | `false` | Pops a small modal                   |
|  `big`   | `false` | Pops a big modal                     |
| `button` | `true`  | Shows a close button                 |
| `close`  | `false` | Set to true to close the modal       |

## Limitations

- though you can have multiple triggers on a page, only one modal can be opened at a time.
- `close` closes all modals.

## Demo

A word in a paragraph can be a <Modal basic><Content><h2>Hello</h2></Content><Trigger><span class="underline">modal</span></Trigger></Modal>

Click on the word `modal` to pop it.

```svelte
A word in a paragraph can be a  <Modal basic><Content><h2>Hello</h2></Content><Trigger>modal</Trigger></Modal>
```

<br />
<br />

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

This modal without `basic` prop will not have any background. It should
be explicitly added or use `basic` prop for a white background.

<br />
<br />

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

<br />
<br />
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
<Modal basic close={closeModal}>
  <Content>
    <h2>Hello</h2>
  </Content>
  <Trigger>
    <button class="btn">Open modal default + external tigger to close</button>
  </Trigger>
</Modal>
```

<br />
<br />
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

<br />
<br />
<Modal basic>
  <Content class="p-4">
    <h2>Hello world</h2>
  </Content>
  <Trigger>
    <button class="btn">Open modal with class p-4 (tailwind, bootstrap, or class based framework) on Content</button>
  </Trigger>
</Modal>
<br />
<br />

```svelte
<Modal basic>
  <Content class="p-4">
    <h2>Hello world</h2>
  </Content>
  <Trigger>
    <button class="btn">Open modal with class p-4 (tailwind, bootstrap, or class based framework) on Content</button>
  </Trigger>
</Modal>
```

<br />
<br />
<Modal>
  <Content class="bg-indigo-400 p-4">
    <h2>Hello</h2>
  </Content>
  <Trigger>
    <button class="btn">Open modal with custom background</button>
  </Trigger>
</Modal>
<br />
<br />

```svelte
<Modal>
  <Content class="bg-indigo-400 p-4">
    <h2>Hello</h2>
  </Content>
  <Trigger>
    <button class="btn">Open modal with custom background</button>
  </Trigger>
</Modal>
```

<br />
<br />
<Modal basic big={true}>
  <Content>
    <h2>Hello world</h2>
  </Content>
  <Trigger>
    <button class="btn">Open modal big</button>
  </Trigger>
</Modal>
<br />
<br />

```svelte
<Modal basic big={true}>
  <Content>
    <h2>Hello world</h2>
  </Content>
  <Trigger>
    <button class="btn">Open modal big</button>
  </Trigger>
</Modal>
```

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
    <button class="btn">Open video default</button>
  </Trigger>
</Modal>
<br />
<br />

```svelte
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
    <button class="btn">Open video default</button>
  </Trigger>
</Modal>
```

<br />
<br />

<Modal big={true} button={false}>
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
    <button class="btn">Open video + big layout + no close button</button>
  </Trigger>
</Modal>
<br />
<br />

```svelte
<Modal big={true} button={false}>
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
    <button class="btn">Open video + big layout + no close button</button>
  </Trigger>
</Modal>
```

<br />
<br />

<Modal fullscreen>
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
    <button class="btn">Open video + fullscreen layout</button>
  </Trigger>
</Modal>
<br />
<br />

```svelte
<Modal fullscreen>
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
    <button class="btn">Open video + fullscreen layout + no close button</button>
  </Trigger>
</Modal>
```

<br />
<br />
<p>An image as a trigger and content</p>
<Modal big={true} button={false}>
  <Content>
    <img src="https://picsum.photos/id/237/1000/600" alt="a dog" />
  </Content>
  <Trigger>
    <img src="https://picsum.photos/id/237/300/200" alt="a dog" />
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

<br />
<br />

<a href="https://github.com/sharu725/sv-popup">Contribute / Open an issue</a>
<svelte:window on:keydown={handleKeyPress} />

<style>
  h1 {
    text-decoration: underline;
    text-decoration-style: dashed;
  }
  .underline {
    text-decoration: underline;
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
  :global(.bg-indigo-400) {
    background-color: #6569db;
  }
</style>
