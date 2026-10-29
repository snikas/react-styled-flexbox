import { forwardRef } from 'react';

/**
 * React container component using css flexbox
 * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes
 *
 * Each flexbox rule is set by passing a boolean prop named after the rule and its value:
 * direction: directionRowReverse, directionColumn, directionColumnReverse
 * wrap: wrapWrap, wrapWrapReverse
 * justify-content: justifyFlexEnd, justifyCenter, justifySpaceBetween, justifySpaceAround
 * align-items: itemsFlexStart, itemsFlexEnd, itemsCenter, itemsBaseline
 * align-content: contentFlexStart, contentFlexEnd, contentCenter, contentSpaceBetween, contentSpaceAround
 * inline: renders display: inline-flex
 * as: element or component to render instead of a div
 *
 * Unset rules are left to the CSS defaults. If several props from the same group are true, the last one wins.
 */

const RULES = {
  direction: { property: 'flexDirection', values: ['row-reverse', 'column', 'column-reverse'] },
  wrap: { property: 'flexWrap', values: ['wrap', 'wrap-reverse'] },
  justify: { property: 'justifyContent', values: ['flex-end', 'center', 'space-between', 'space-around'] },
  items: { property: 'alignItems', values: ['flex-start', 'flex-end', 'center', 'baseline'] },
  content: { property: 'alignContent', values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'] },
};

const toCamel = (value) => value.replace(/-(\w)/g, (_, char) => char.toUpperCase());
const upperFirst = (value) => value.charAt(0).toUpperCase() + value.slice(1);

// propName (e.g. "itemsFlexEnd") -> { property: "alignItems", value: "flex-end" }
const PROP_LOOKUP = {};
Object.keys(RULES).forEach((name) => {
  RULES[name].values.forEach((value) => {
    PROP_LOOKUP[name + upperFirst(toCamel(value))] = { property: RULES[name].property, value };
  });
});

const FlexContainer = forwardRef(function FlexContainer({
  as: Component = 'div', inline, style, ...props
}, ref) {
  // properties left unset fall back to the CSS defaults, so classes and media queries can set them
  const flexStyle = { display: inline ? 'inline-flex' : 'flex' };
  const domProps = {};

  Object.keys(props).forEach((key) => {
    const rule = PROP_LOOKUP[key];
    if (!rule) {
      domProps[key] = props[key];
    } else if (props[key]) {
      // flexbox props are consumed here and never reach the DOM
      flexStyle[rule.property] = rule.value;
    }
  });

  return <Component ref={ref} {...domProps} style={{ ...flexStyle, ...style }} />;
});

export default FlexContainer;
