# react-styled-flexbox

Effortlessly add flexbox styles to your components using minimal code.

[![CI](https://github.com/snikas/react-styled-flexbox/actions/workflows/ci.yml/badge.svg)](https://github.com/snikas/react-styled-flexbox/actions/workflows/ci.yml)

## Installation

##### NPM

`npm install react-styled-flexbox --save`

##### Yarn

`yarn add react-styled-flexbox`

Requires React 16.14 or newer. No other dependencies.

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

FlexContainer renders a `div` (or the element passed as `as`, e.g. `<FlexContainer as="ul">`). Only `display` and the flexbox rules you turn on are set, as inline styles. Rules you don't set are left to the CSS defaults, so a `className` can set them, including inside media queries. Inline styles beat stylesheet rules, so a class can't override a rule you set with a prop (or `display`). Use `style` to override those. Any other prop (`className`, `id`, `onClick`, `ref`, ...) is passed through to the element.

If you pass several props from the same group (for example `directionColumn` and `directionRowReverse`), the last one wins.

TypeScript types are included.

## Upgrading from 2.x

* styled-components is no longer used or required. Remove it from your dependencies if this library was the only reason you had it.
* `FlexContainer.extend` no longer exists. `styled(FlexContainer)` still passes its `className` through, but its rules lose to the inline flex rules, so pass `style` instead or wrap `FlexContainer` in your own component.
* The flex defaults (`flex-direction: row` and so on) are no longer written inline. They behave the same, but a stylesheet can now change them.

If you are not familiar with the flexible box model please review the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

## License
MIT License

Copyright (c) 2017 Raycom Media, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

