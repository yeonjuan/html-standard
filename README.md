# html-standard

`html-standard` is a **work-in-progress** JavaScript/TypeScript library that provides structured data from the [HTML Living Standard](https://html.spec.whatwg.org/).

## Installation

```console
npm install html-standard
```

## Usage

```js
import { getElementSpec } from "html-standard";

const divSpec = getElementSpec("div");

divSpec.attributes.has("id"); // true
```
