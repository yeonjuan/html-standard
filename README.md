# html-standard

A TypeScript library that provides utilities for working with the HTML Living Standard specification.

> ⚠️ **Experimental**: This project is currently in an experimental stage and may introduce breaking changes frequently.

## Features

### Element API

Create an element instance to access various HTML standard utilities:

```typescript
import { element } from "html-standard";

// Basic usage without attributes
const button = element("button");
button.accessibility.implicitRole(); // 'button'

const nav = element("nav");
nav.accessibility.implicitRole(); // 'navigation'

// Elements with attributes
const anchor = element("a", {
  attributes: {
    get: (key) => (key === "href" ? "https://example.com" : null),
  },
});
anchor.accessibility.implicitRole(); // 'link'

const anchorWithoutHref = element("a");
anchorWithoutHref.accessibility.implicitRole(); // 'generic'

const checkbox = element("input", {
  attributes: {
    get: (key) => (key === "type" ? "checkbox" : null),
  },
});
checkbox.accessibility.implicitRole(); // 'checkbox'
```

### Accessibility API

Access accessibility utilities directly:

```typescript
import { accessibility } from "html-standard";

const buttonA11y = accessibility("button", {
  attributes: {
    get: () => null,
  },
});
buttonA11y.implicitRole(); // 'button'
```

**Key Features:**

- **Implicit ARIA Roles**: Get the default ARIA role for HTML elements according to the [HTML-ARIA specification](https://www.w3.org/TR/html-aria/)
- **Attribute-Dependent Roles**: Supports roles that vary based on element attributes (e.g., `<a>`, `<input>`, `<img>`, `<select>`)
- **Case-Insensitive**: Element names are handled case-insensitively

## Installation

```bash
npm install html-standard
```

## Development

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Type check
npm run ts

# Build
npm run build
```

## License

MIT
