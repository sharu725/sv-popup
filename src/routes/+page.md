<script>
  import Modal from "$lib/Modal.svelte";
  import Trigger from "$lib/Trigger.svelte";
  import Content from "$lib/Content.svelte";
  import Word from "./Word.md"
  import Default from "./Default.md"
  import Basic from "./Basic.md"
  import Close from "./Close.md"
  import Small from "./Small.md"
  import Styled from "./Styled.md"
  import CustomBackground from "./CustomBackground.md"
  import Big from "./Big.md"
  import Video from "./Video.md"
  import VideoBig from "./VideoBig.md"
  import NoClose from "./NoClose.md"
  import Fullscreen from "./Fullscreen.md"
  import ImageTrigger from "./ImageTrigger.md"
</script>

<h1>sv-popup</h1>

An easy to use popup/modal utility for svelte.

## Features

- easy to use components.
- **click outside** or **escape** to close modal.
- uses portal.
- pass classes and attributes to Modal, Content, & Trigger.
- [less than 1KB (minified+gzipped)](https://bundlephobia.com/package/sv-popup)

## Props

|     Prop     | Default | Feature                              |
| :----------: | :-----: | ------------------------------------ |
|   `basic`    | `false` | Adds white background to the Modal |
|   `small`    | `false` | Pops small modal                   |
|    `big`     | `false` | Pops big modal                     |
| `fullscreen` | `false` | Pops fullscreen modal              |
|   `button`   | `true`  | Shows close button                 |
|   `close`    | `false` | Set to true to close the modal       |

## Limitations

- though you can have multiple triggers on a page, only one modal can be opened at a time.
- `close` closes all modals.

<Word />
<Default />
<Basic />
<Close />
<Small />
<Styled />
<CustomBackground />
<Big />
<Video />
<VideoBig />
<NoClose />
<Fullscreen />
<ImageTrigger />
<br/>
<a href="https://github.com/sharu725/sv-popup">Contribute / Open an issue</a>

<style>
  h1 {
    text-decoration: underline;
    text-decoration-style: dashed;
  }

  li {
    margin-bottom: 0.5rem;
  }

  :global(.p-4) {
    padding: 2rem !important;
  }
  :global(.bg-indigo-400) {
    background-color: #6569db;
  }
</style>
