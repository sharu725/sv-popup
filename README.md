# sv-popup

A simple popup/modal for svelte/sveltekit apps.

## Features

- easy to use components
- click outside or escape to close modal
- uses portal
- [less than 1KB (minified+gzipped)](https://bundlephobia.com/package/sv-popup)

## Installation

`npm i -D sv-popup`

## Usage

```svelte
<script>
  import { Modal, Content, Trigger } from "sv-popup"
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
```

## Dependencies

- depends on **svelte@3.47.0**
- update svelte to `3.47` or higher in package.json
- run `npm install`

[Demo](https://sv-popup.sveltethemes.dev/)
