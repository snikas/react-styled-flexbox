import styledImport from 'styled-components';

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
 * as: element or component to render instead of a div (provided by styled-components)
 *
 * Unset rules are left out of the generated CSS, so they use the CSS defaults.
 * If several props from the same group are true, the last one wins.
 */

// Native Node ESM loads styled-components' CJS build, where the default import is the module object
const styled = styledImport.default || styledImport;

const RULES = {
  direction: { property: 'flexDirection', values: ['row-reverse', 'column', 'column-reverse'] },
  wrap: { property: 'flexWrap', values: ['wrap', 'wrap-reverse'] },
  justify: { property: 'justifyContent', values: ['flex-end', 'center', 'space-between', 'space-around'] },
  items: { property: 'alignItems', values: ['flex-start', 'flex-end', 'center', 'baseline'] },
  content: { property: 'alignContent', values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'] },
};

const toKebab = (name) => name.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);
const toCamel = (value) => value.replace(/-(\w)/g, (_, char) => char.toUpperCase());
const upperFirst = (value) => value.charAt(0).toUpperCase() + value.slice(1);

// propName (e.g. "itemsFlexEnd") -> { property: "align-items", value: "flex-end" }
const PROP_LOOKUP = {};
Object.keys(RULES).forEach((name) => {
  RULES[name].values.forEach((value) => {
    PROP_LOOKUP[name + upperFirst(toCamel(value))] = { property: toKebab(RULES[name].property), value };
  });
});

const flexRules = (props) => Object.keys(props)
  .filter((key) => PROP_LOOKUP[key] && props[key])
  .map((key) => `${PROP_LOOKUP[key].property}: ${PROP_LOOKUP[key].value};`)
  .join('\n');

const FlexContainer = styled.div.withConfig({
  // flexbox props are consumed here and never reach the DOM
  shouldForwardProp: (prop) => prop !== 'inline' && !PROP_LOOKUP[prop],
})`
  display: ${(props) => (props.inline ? 'inline-flex' : 'flex')};
  ${flexRules}
`;

export default FlexContainer;
