Effortlessly add flexbox styles to your components using minimal code.

## Basic Usage
### installation
```javascript
npm install react-styled-flexbox --save
```

### API
```javascript
import FlexContainer from 'react-styled-flexbox';

<FlexContainer>
  <div>I'm on the left!</div>
  <div>I'm on the right!</div>
</FlexContainer>
```

By default FlexContainer will render a div with 'display: flex' and default flexbox style rules.

If you want to add additional flexbox rules to your FlexContainer you can pass in props set to true.

```javascript
<FlexContainer
	directionColumn
>
  <div>I'm on the top!</div>
  <div>I'm underneath!</div>
</FlexContainer>
```

### Props

#### flex-direction
 * directionRowReverse
 * directionColumn
 * directionColumnReverse
 
#### flex-wrap
 * wrapWrap
 * wrapWrapReverse

#### align-items
 * itemsFlexStart
 * itemsFlexEnd
 * itemsCenter
 * itemsBaseline

#### align-content
 * contentFlexStart
 * contentFlexEnd
 * contentCenter
 * contentSpaceBetween
 * contentSpaceAround

#### justify-content
 * justifySpaceBetween
 * justifySpaceAround
 * justifyFlexEnd
 * justifyCenter

If you are not familiar with the flexible box model please review the MDN docs:
* [Using CSS Flexible Boxes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
