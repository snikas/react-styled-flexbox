A CSS3 Flexbox React component harnessing the power of styled-components

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

That is all you need for a bare-bones CSS3 flexbox implementation!
By default 'FlexContainer' will create a div with 'display: flex' and all of the 
default flex style rules that go along with it.

If you want to use additional rules for your FlexContainer you can pass in props set to true.

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




### This component couldn't be possible without the following library:

 * [styled-components](https://github.com/styled-components/styled-components)
