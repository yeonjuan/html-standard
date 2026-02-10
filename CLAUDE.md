# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript library that provides utilities for working with the HTML Living Standard specification. The primary focus is on providing programmatic access to HTML element specifications, including attribute validation and accessibility (ARIA) role computation.

**Status**: Experimental - breaking changes may occur frequently.

## Development Commands

### Testing
- `npm test` - Run all tests once
- `npm run test:watch` - Run tests in watch mode
- `npm run test:ui` - Open Vitest UI for interactive testing

### Type Checking
- `npm run ts` - Type check without emitting files

### Building
- `npm run build` - Build the library using tsup (outputs to `dist/` with ESM and CJS formats)

## Architecture

### Core Concepts

The library is built around three main abstractions:

1. **Element Specification System** - Defines what attributes are valid for each HTML element
2. **Attribute Validation System** - Validates attribute values against HTML spec rules
3. **Accessibility System** - Computes implicit ARIA roles based on element type and attributes

### Key Files and Their Roles

#### Element System
- **[src/element-spec.ts](src/element-spec.ts)** - `ElementSpec` class that wraps an element's state and provides the main API
- **[src/state/element-state.ts](src/state/element-state.ts)** - `ElementState` tracks element name, options, and provides access to attributes and ancestors
- **[src/specs/element-spec-definition-map.ts](src/specs/element-spec-definition-map.ts)** - Central registry mapping HTML element names to their attribute specifications (e.g., `link`, `input`, `button`, etc.)

#### Attribute System
- **[src/attribute-spec.ts](src/attribute-spec.ts)** - `AttributeSpec` class for validating individual attribute values
- **[src/attribute-spec-map.ts](src/attribute-spec-map.ts)** - Maps attribute names to their specifications for a given element
- **[src/state/attributes-state.ts](src/state/attributes-state.ts)** - `AttributesState` provides attribute getter interface
- **[src/attributes/](src/attributes/)** - Individual attribute type validators implementing the HTML spec's microsyntax rules:
  - `BooleanAttribute` - Validates boolean attributes (must be empty or match attribute name)
  - `EnumeratedAttribute` - Validates against a fixed set of keywords
  - `SpaceSeperatedTokens` - Space-separated token lists with uniqueness rules
  - `CommaSeparatedTokens` - Comma-separated values
  - `SignedInteger`, `NonNegativeInteger`, `FloatingPointNumber` - Numeric types
  - `ValidURL`, `ID`, `CSSColor`, `BCP47`, `MIMEType`, `DateString`, `RegularExpression` - Specialized formats
  - `SrcsetAttribute`, `MediaQueryList`, `SourceSizeList` - Complex HTML-specific formats

#### Accessibility System
- **[src/accessibility/implicit-role.ts](src/accessibility/implicit-role.ts)** - Contains the `IMPLICIT_ROLE` map that computes implicit ARIA roles per the HTML-ARIA specification. Many roles are context-dependent:
  - `<a>` is "link" with `href`, otherwise "generic"
  - `<input>` role varies by `type` attribute (button, checkbox, textbox, etc.)
  - `<img>` is "img" unless `alt=""` (decorative image)
  - `<select>` is "listbox" with `multiple`, otherwise "combobox"
  - `<footer>`/`<header>` roles depend on ancestor elements
- **[src/accessibility/aria-roles.ts](src/accessibility/aria-roles.ts)** - Constants for ARIA role names

### Data Flow

1. User creates an element via `element(name, options)` where `options` contains an `attributes` getter
2. `ElementSpec` wraps an `ElementState` which normalizes the element name (lowercased) and stores options
3. When accessing attributes, `AttributesState` is created from the options
4. For implicit roles, the `IMPLICIT_ROLE` map is consulted with the element's state
5. Attribute validation uses definitions from `elementSpecDefinitionMap` paired with validator classes

### Important Patterns

- **Case-insensitive element names**: Element names are always lowercased in `ElementState` constructor
- **Lazy attribute access**: `AttributesState` is created on-demand via getter
- **Type system integration**: All validators implement the `AttributeSpec` interface with a `validate()` method returning `AttributeSpecValidateResult`
- **Static type property**: Each attribute validator class has a static `type` property used for runtime type discrimination
- **Attribute options abstraction**: Element options include an `attributes.get(key)` function allowing flexible attribute value resolution
- **Ancestor tracking**: Element options can include an `ancestors()` function for context-dependent role computation

### Global Attributes

Global attributes (applicable to all HTML elements) are defined in [src/attributes/global-attributes.ts](src/attributes/global-attributes.ts).

### Adding New Features

When adding support for new HTML elements:
1. Add element entry to `elementSpecDefinitionMap` in [src/specs/element-spec-definition-map.ts](src/specs/element-spec-definition-map.ts)
2. Define its attributes using existing validator classes or create new ones if needed
3. Add implicit role mapping to `IMPLICIT_ROLE` in [src/accessibility/implicit-role.ts](src/accessibility/implicit-role.ts)

When adding new attribute types:
1. Create a new validator class in [src/attributes/](src/attributes/) implementing the `AttributeSpec` interface
2. Add static `type` property for type discrimination
3. Export from [src/attributes/index.ts](src/attributes/index.ts)
4. Add case to `createAttributeSpec()` function in [src/attribute-spec.ts](src/attribute-spec.ts)

## Build Configuration

- **TypeScript**: ES2016 target with ESNext modules, strict mode enabled ([tsconfig.json](tsconfig.json))
- **Build tool**: tsup configured to output ESM and CJS formats with sourcemaps, minification, and type declarations ([tsup.config.ts](tsup.config.ts))
- **Test framework**: Vitest with globals enabled, tests located in `src/**/*.{test,spec}.{js,ts}` ([vitest.config.ts](vitest.config.ts))
