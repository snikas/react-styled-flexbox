# react-styled-flexbox

Effortlessly add flexbox styles to your components using minimal code.

[![Build Status](https://travis-ci.org/snikas/react-styled-flexbox.png?branch=master)](https://travis-ci.org/snikas/react-styled-flexbox)

## Installation

##### NPM

`npm install react-styled-flexbox --save`

##### Yarn

`yarn add react-styled-flexbox`

## API

```html
import FlexContainer from 'react-styled-flexbox';

<FlexContainer>
  <div>I'm on the left!</div>
  <div>I'm on the right!</div>
</FlexContainer>
```

By default FlexContainer will render a div with `'display: flex'` and default flexbox style rules.

If you want to add additional flexbox rules to your FlexContainer you can pass in options set to true.

```html
<FlexContainer directionColumn={true}>
  <div>I'm on the top!</div>
  <div>I'm underneath!</div>
</FlexContainer>
```

## Options

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

If you are not familiar with the flexible box model please review the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

## License
MIT License

Copyright (c) 2017 Steven Akins

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

