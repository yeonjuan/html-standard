# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`html-standard` is a TypeScript library that provides utilities for working with the HTML Living Standard specification. Currently, the library focuses on providing ARIA-related utilities, specifically the `getImplicitRole` function that returns implicit ARIA roles for HTML elements.

**Status**: This project is in an experimental stage and may introduce breaking changes frequently.

## Commands

### Development
- `npm run build` - Build the library using tsup (outputs to `dist/` with ESM and CJS formats)
- `npm run ts` - Type-check TypeScript without emitting files
- `npm test` - Run tests using Vitest
- `npm run test:watch` - Run tests in watch mode
- `npm run test:ui` - Run tests with UI

## Architecture

### Core Concepts

**Implicit ARIA Roles**: The library provides utilities to determine the implicit ARIA role of HTML elements according to the [HTML-ARIA specification](https://www.w3.org/TR/html-aria/). These roles can be static or vary based on element attributes.

**Public API**: The library exports the `getImplicitRole(element, options?)` function:
- `element: string` - The HTML element name (case-insensitive)
- `options?: GetImplicitRoleOptions` - Optional configuration
  - `attribute: (key: string) => string | number | null` - Function to retrieve attribute values

### Directory Structure

```
src/
├── html-aria/
│   └── implicit-role/
│       ├── get-implicit-role.ts    # Public API function
│       ├── implicit-role.ts        # Core implementation with role mappings
│       ├── types.ts                # Type definitions
│       ├── index.ts                # Exports
│       └── tests/
│           └── get-implicit-role.test.ts  # Comprehensive test suite
├── constants/
│   └── roles.ts                    # ARIA role constants
└── index.ts                        # Main entry point
```

### Key Files

**[src/html-aria/implicit-role/get-implicit-role.ts](src/html-aria/implicit-role/get-implicit-role.ts)**: Public API that accepts element name and options, provides default attribute getter.

**[src/html-aria/implicit-role/implicit-role.ts](src/html-aria/implicit-role/implicit-role.ts)**: Core implementation containing the `IMPLICIT_ROLE` mapping object. Each element has a function that receives `get` and `has` helpers to check attributes and return the appropriate role.

**[src/html-aria/implicit-role/types.ts](src/html-aria/implicit-role/types.ts)**: Defines `GetAttributeValue` type and `GetImplicitRoleOptions` interface.

**[src/constants/roles.ts](src/constants/roles.ts)**: Defines the `ROLES` constant object with all ARIA role string literals.

**[src/html-aria/implicit-role/tests/get-implicit-role.test.ts](src/html-aria/implicit-role/tests/get-implicit-role.test.ts)**: Comprehensive test suite with 45+ tests covering all HTML elements and their attribute-dependent behaviors.

### How Implicit Role Mapping Works

The implicit role system follows this pattern:

1. Each HTML element has an entry in the `IMPLICIT_ROLE` object
2. Each entry is a function that receives `{ get, has }` helpers for checking attributes
3. The function returns a role string or `null` (no implicit role)
4. Element names are normalized to lowercase for case-insensitive matching

**Example (static role)**:
```typescript
button: () => ROLES.BUTTON,  // Always returns "button"
```

**Example (attribute-dependent role)**:
```typescript
a: ({ has }) => (has("href") ? ROLES.LINK : ROLES.GENERIC),
// Returns "link" with href, "generic" without
```

**Example (complex attribute logic)**:
```typescript
input: ({ get }) => {
  const type = get("type") || "text";
  switch (type) {
    case "button": return ROLES.BUTTON;
    case "checkbox": return ROLES.CHECKBOX;
    case "text": return ROLES.TEXTBOX;
    // ... more cases
  }
}
```

### Testing Strategy

Tests are organized by element categories:
- Elements with no implicit role
- Generic role elements
- Structural elements (article, aside, nav, etc.)
- Heading elements (h1-h6)
- List, table, and form elements
- Text semantic elements
- Attribute-dependent roles (detailed tests for `<a>`, `<area>`, `<img>`, `<input>`, `<select>`)
- Case insensitivity

Use **Vitest** for testing:
- Configuration in [vitest.config.ts](vitest.config.ts)
- Tests use `describe`, `it`, `expect` from Vitest
- Run with `npm test`, `npm run test:watch`, or `npm run test:ui`

### Build Configuration

The project uses **tsup** for building ([tsup.config.ts](tsup.config.ts)):
- Entry point: `src/index.ts`
- Outputs both ESM (`dist/index.js`) and CJS (`dist/index.cjs`)
- Generates TypeScript declarations (`dist/index.d.ts`)
- Creates sourcemaps

## Adding New Features

### Adding Support for a New HTML Element

1. Open [src/html-aria/implicit-role/implicit-role.ts](src/html-aria/implicit-role/implicit-role.ts)
2. Add an entry to the `IMPLICIT_ROLE` object with the element name
3. Implement the role function:
   - For static roles: `elementName: () => ROLES.ROLE_NAME`
   - For attribute-dependent: Use `get` or `has` to check attributes
4. Add tests in [src/html-aria/implicit-role/tests/get-implicit-role.test.ts](src/html-aria/implicit-role/tests/get-implicit-role.test.ts)
5. If adding a new role constant, update [src/constants/roles.ts](src/constants/roles.ts)

### Adding New Role Constants

1. Open [src/constants/roles.ts](src/constants/roles.ts)
2. Add the new role to the `ROLES` object:
   ```typescript
   export const ROLES = {
     // ... existing roles
     NEW_ROLE: "new-role",
   } as const;
   ```

### Writing Tests

Follow the existing test structure:
```typescript
describe("element category", () => {
  it("should return correct role", () => {
    expect(getImplicitRole("element")).toBe("expected-role");
  });

  it("should handle attributes", () => {
    const result = getImplicitRole("element", {
      attribute: (key) => key === "attr" ? "value" : null,
    });
    expect(result).toBe("expected-role");
  });
});
```
