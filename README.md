# html-standard

A TypeScript library that provides utilities for working with the HTML Living Standard specification.

> ⚠️ **Experimental**: This project is currently in an experimental stage and may introduce breaking changes frequently.

## Features

### `getImplicitRole`

Returns the implicit ARIA role of an HTML element according to the [HTML-ARIA specification](https://www.w3.org/TR/html-aria/). This provides the default role that each HTML element has.

```typescript
import { getImplicitRole } from "html-standard";

// Basic usage
getImplicitRole("button"); // 'button'
getImplicitRole("nav"); // 'navigation'
getImplicitRole("div"); // 'generic'

// Elements with attribute-dependent roles
getImplicitRole("a", {
  attribute: (key) => (key === "href" ? "https://example.com" : null),
}); // 'link'

getImplicitRole("a", {
  attribute: () => null,
}); // 'generic' (without href)

getImplicitRole("input", {
  attribute: (key) => (key === "type" ? "checkbox" : null),
}); // 'checkbox'
```

**Key Features:**

- Implements implicit role mapping from the HTML Living Standard
- Supports attribute-dependent roles (e.g., `<a>`, `<input>`, `<img>`, `<select>`)
- Case-insensitive element name handling

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
