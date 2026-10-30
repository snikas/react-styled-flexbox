# Changelog

## 3.0.0 - Unreleased

### Breaking
- Requires `styled-components` 5.1 or newer (v5 and v6 are tested). The peer range was `^3.3.2`. Use `styled(FlexContainer)` to extend, since `.extend` was removed in styled-components 4.
- CommonJS consumers must use `require('react-styled-flexbox').default`.
- If several props from the same group are true (for example `directionColumn` and `directionRowReverse`), the last one now wins. Previously the first did.

### Added
- `ref` forwarding and the `as` prop (both through styled-components).
- TypeScript type declarations.

### Changed
- Unset flex rules are no longer written into the generated CSS, so they use the CSS defaults and are no longer fighting your own classes.
- The peer dependency on React is now `>=16.14`.
- The package ships ESM and CJS builds through an `exports` map and is marked `sideEffects: false`.
- Tooling: tsup, Vite, Vitest with Testing Library, ESLint 9 and GitHub Actions replace Babel, Webpack, Jest, Enzyme and Travis.

### Fixed
- Flex props no longer leak to the DOM with styled-components 6.
- Props that merely start with a flex prefix, such as `contentEditable`, are no longer swallowed.

### Removed
- The `humps` dependency.

## 2.0.0 - 2018-09-07
- `styled-components` moved from `dependencies` to `peerDependencies` (`^3.3.2`).
- Removed the `lodash` dependency.

## 1.2.0 - 2018-09-07
- Added the `inline` prop (`display: inline-flex`).
- Reduced bundle size.

## 1.1.0 - 2018-06-04
- Updated dependencies.

## 1.0.5 - 2018-02-23
- Flex props can be set conditionally (`itemsCenter={condition}`).

## 1.0.0 - 1.0.4 - 2017-07-21
- Initial release as a styled-components flexbox container, with a default export and README.
