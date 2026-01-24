# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`html-standard` is a TypeScript library that provides structured data from the HTML Living Standard. The library exports element specifications that describe valid attributes for each HTML element, with context-aware specs that vary based on parent elements or element state.

## Commands

### Development
- `npm run build` - Build the library using tsup (outputs to `dist/` with ESM and CJS formats)
- `npm run ts` - Type-check TypeScript without emitting files
- `npm test` - Run tests using Jest

## Architecture

### Core Concepts

**Element Specifications**: Each HTML element has a specification that describes its valid attributes. These specs are context-aware and can vary based on the element's parent or attributes.

**Public API**: The library exports a single function `getElementSpec(name, options?)` that returns element specifications. Options include:
- `parent?: string` - The parent element name (affects which spec variant is returned)
- `attributes?: Record<string, string | boolean>` - Element attributes (for future attribute-dependent specs)

### Directory Structure

```
src/
├── elements/          # Individual element spec definitions (one file per element)
├── helpers/           # Helper functions for creating attribute and content specs
├── types/             # Type definitions and core interfaces
├── getElementSpec.ts  # Main entry point function
└── index.ts           # Public exports
```

### Key Files

**[src/getElementSpec.ts](src/getElementSpec.ts)**: Main entry point that looks up element specs by name from the elements record and calls the getter function with options.

**[src/elements/index.ts](src/elements/index.ts)**: Exports all element spec getters, organized by HTML spec section (Document metadata, Sections, Grouping content, Text-level semantics, etc.).

**[src/types/element-spec.ts](src/types/element-spec.ts)**: Core `ElementSpec` interface that contains an `attributes` map.

**[src/types/get-element-spec.ts](src/types/get-element-spec.ts)**: Defines `GetElementSpec` function type - each element exports a getter function that accepts optional state and returns an `ElementSpec`.

**[src/helpers/content-attributes.ts](src/helpers/content-attributes.ts)**: Factory function for creating attribute specs. Handles global attributes (including `data-*` attributes and event handlers) and element-specific attributes.

**[src/helpers/attributes.ts](src/helpers/attributes.ts)**: Defines `globalAttributes` set (includes standard global attributes and all event handlers like `onclick`, `onload`, etc.).

### How Element Specs Work

Each element file in `src/elements/` exports a `GetElementSpec` function. The pattern is:

1. Define one or more `ElementSpec` objects (different variants for different contexts)
2. Export a getter function that returns the appropriate spec based on state
3. Simple elements return the same spec always, context-aware elements use `state.parent` or `state.attributes` to determine which spec to return

**Example (context-aware)**: [src/elements/div.ts](src/elements/div.ts) returns different specs when the parent is `dl` vs other parents.

**Example (simple)**: [src/elements/a.ts](src/elements/a.ts) always returns the same spec with global attributes plus specific attributes like `href`, `target`, etc.

### Attribute System

Attributes are managed through `AttributesSpecMap` interface which has a single `has(name: string): boolean` method. The `contentAttributes()` helper creates these maps by:

1. Checking if attribute name starts with `data-` (always valid)
2. Checking global attributes set (includes event handlers)
3. Checking element-specific attributes if provided

### Build Configuration

The project uses **tsup** for building ([tsup.config.ts](tsup.config.ts)):
- Entry point: `src/index.ts`
- Outputs both ESM (`dist/index.js`) and CJS (`dist/index.cjs`)
- Generates TypeScript declarations (`dist/index.d.ts`)
- Creates sourcemaps

## Adding New Elements

When adding a new HTML element:

1. Create a new file in `src/elements/{element-name}.ts`
2. Import types and helpers: `ElementSpec`, `GetElementSpec`, `contentAttributes`
3. Define the element spec(s) with appropriate attributes
4. Export a `GetElementSpec` function (name it after the element)
5. Add the export to `src/elements/index.ts` in the appropriate section
6. The element will automatically be available via `getElementSpec()`

**Attribute specification**:
- Use `contentAttributes(true)` for global attributes only
- Use `contentAttributes(true, ['attr1', 'attr2'])` for global + specific attributes
- Use `contentAttributes(false, ['attr1'])` for specific attributes only (no globals)

**Context-aware specs**: If an element has different valid attributes based on context, create multiple `ElementSpec` objects and use `state?.parent` or `state?.attributes` in the getter to return the appropriate one.
