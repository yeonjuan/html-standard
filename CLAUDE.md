# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript library that provides utilities for working with the HTML Living Standard specification. The library focuses on providing programmatic access to HTML element specifications, attributes, and accessibility features (particularly implicit ARIA roles).

## Development Commands

### Testing

```bash
npm test              # Run tests once
npm run test:watch    # Run tests in watch mode
npm run test:ui       # Run tests with Vitest UI
```

Tests are located alongside source files (e.g., `src/**/*.test.ts`). The project uses Vitest with globals enabled.

### Type Checking

```bash
npm run ts            # Type check without emitting files (tsc --noEmit)
```

### Building

```bash
npm run build         # Build using tsup (outputs to dist/)
```

The build produces both ESM (`dist/index.js`) and CJS (`dist/index.cjs`) formats with TypeScript declarations and source maps.

## Architecture Overview

### Core Entry Points

- **`element(name, options)`**: Main factory function that creates `ElementSpec` instances
- **Element name normalization**: All element names are automatically converted to lowercase

### Layered Architecture

The codebase follows a three-layer architecture:

1. **Spec Layer** (`ElementSpec`, `AttributeSpec`)

   - High-level API exposed to library users
   - `ElementSpec` provides access to element-specific functionality (implicit roles, attributes)
   - `AttributeSpec` provides attribute validation

2. **State Layer** (`ElementState`, `AttributesState`)

   - Manages element and attribute state
   - Handles parent/ancestor relationships via `options.ancestors` iterator
   - Provides attribute access through `options.attributes.get(key)`

3. **Definition Layer** (`element-definitions.ts`, attribute types in `src/attribute/validators/`)
   - Contains HTML Standard specifications as data structures
   - Maps element names to their allowed attributes and specifications
   - Defines attribute types (enumerated, boolean, text, URL, etc.)

### Key Components

#### Accessibility (`src/accessibility/`)

- **`implicit-role.ts`**: Maps HTML elements to their implicit ARIA roles per W3C HTML-ARIA spec
- Role determination can be attribute-dependent (e.g., `<a>` has role `link` only with `href`, otherwise `generic`)
- Some roles check ancestor elements (e.g., `<footer>` role varies based on sectioning ancestors)

#### Attribute System (`src/attribute/`)

Contains ~20 attribute type validators representing HTML Standard attribute types:

- `BooleanAttribute`: Presence/absence semantics
- `EnumeratedAttribute`: Fixed set of keywords
- `SpaceSeparatedTokens` / `CommaSeparatedTokens`: Token lists
- `ValidURL`, `MIMEType`, `DateString`, `BCP47`: Format-specific validators
- `SignedInteger`, `NonNegativeInteger`, `FloatingPointNumber`: Numeric types
- And more specialized types

Each attribute type implements a `validateValue(value)` method.

#### Element Specifications (`src/element/`)

- **`element-definitions.ts`**: Large data structure mapping element names to their specifications
- Each element defines:
  - Whether it accepts global attributes (`globalAttributes: true/false`)
  - Element-specific attributes as `[name, typeDefinition]` tuples
- Example: `<link>` defines attributes like `href` (ValidURL), `crossorigin` (EnumeratedAttribute), `rel` (SpaceSeparatedTokens)

#### State Management (`src/state/`)

- **`ElementState`**: Holds element name and options, provides attribute access and ancestor traversal
- **`AttributesState`**: Wraps the `options.attributes` interface for querying attribute values

### Data Flow

1. User calls `element("div", { attributes: { get: (key) => ... } })`
2. Creates `ElementSpec` → `ElementState` (normalizes name to lowercase)
3. User accesses `.implicitRole()` → looks up element in `IMPLICIT_ROLE` map → executes role function with state
4. User accesses `.attributes` → creates `AttributeSpecMap` → looks up element in `elementSpecDefinitionMap`
5. User calls `.attributes.get("class")` → finds attribute definition → creates `AttributeSpec` → provides validation

### Important Implementation Details

- **Element name is case-insensitive**: Always lowercased in `ElementState` constructor
- **Ancestor traversal**: The `options.ancestors` is a function returning an iterable, not a static array
- **Lazy instantiation**: `AttributeSpecMap` and `AttributeSpec` are created on-demand, not stored
- **Global attributes**: Handled separately from element-specific attributes (see `src/attribute/global-attributes.ts`)

### TODOs in Code

Some features are incomplete (marked with `// TODO` in `implicit-role.ts`):

- `<header>` role logic (should return 'banner' or 'generic' based on ancestors)
- `<li>` role logic (should return 'listitem' or 'generic' based on parent)

### File Extensions

All imports use `.js` extensions even for TypeScript files (required for ESM compatibility with TypeScript's `verbatimModuleSyntax` setting).
