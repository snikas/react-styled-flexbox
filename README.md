# react-styled-flexbox

Effortlessly add flexbox styles to your components using minimal code.

[![CI](https://github.com/snikas/react-styled-flexbox/actions/workflows/ci.yml/badge.svg)](https://github.com/snikas/react-styled-flexbox/actions/workflows/ci.yml)

## Installation

##### NPM

`npm install react-styled-flexbox styled-components --save`

##### Yarn

`yarn add react-styled-flexbox styled-components`

Peer dependencies: React 16.14 or newer and styled-components 5.1 or newer (v5 and v6 are tested). Install them alongside this package if you don't already have them.

## API

```jsx
import FlexContainer from 'react-styled-flexbox';

<FlexContainer>
  <div>I'm on the left!</div>
  <div>I'm on the right!</div>
</FlexContainer>
```

By default FlexContainer will render a div with `'display: flex'` and default flexbox style rules.

If you want to add additional flexbox rules to your FlexContainer you can pass in options set to true.

```jsx
<FlexContainer directionColumn={true}>
  <div>I'm on the top!</div>
  <div>I'm underneath!</div>
</FlexContainer>
```

## Options

#### inline-flex:

* inline

#### flex-direction:

* directionRowReverse
* directionColumn
* directionColumnReverse

#### flex-wrap:

* wrapWrap
* wrapWrapReverse

#### align-items:

* itemsFlexStart
* itemsFlexEnd
* itemsCenter
* itemsBaseline

#### align-content:

* contentFlexStart
* contentFlexEnd
* contentCenter
* contentSpaceBetween
* contentSpaceAround

#### justify-content:

* justifySpaceBetween
* justifySpaceAround
* justifyFlexEnd
* justifyCenter

## Styling and overrides

FlexContainer is a styled-components `div`. Pass `as` to render another element or component (for example `<FlexContainer as="ul">`). Only `display` and the flexbox rules you turn on are written to the generated CSS, so rules you don't set use the CSS defaults. Any other prop (`className`, `id`, `onClick`, `ref`, ...) is passed through to the element, and the flexbox props never reach the DOM.

Extend it like any styled component:

```jsx
import styled from 'styled-components';
import FlexContainer from 'react-styled-flexbox';

const Card = styled(FlexContainer)`
  background: green;
  flex-basis: 45%;
`;

<Card justifyCenter itemsCenter>...</Card>
```

If you pass several props from the same group (for example `directionColumn` and `directionRowReverse`), the last one wins.

The package is written in TypeScript and ships its own types. Flex props are checked (`directionSideways` is an error), and `FlexContainerProps` is exported if you need the prop type.

## Upgrading from 2.x

* styled-components 5.1 or newer is now required. 3.x and 4.x are no longer supported, because the peer range was `^3.3.2`.
* `FlexContainer.extend` was removed in styled-components 4. Use `styled(FlexContainer)` instead.
* The flex defaults (`flex-direction: row` and so on) are no longer written into the CSS. They behave the same, and a stylesheet or extension no longer fights them.

If you are not familiar with the flexible box model please review the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

## License

[MIT](LICENSE)
