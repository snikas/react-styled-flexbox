import type { ComponentPropsWithRef, ElementType, ForwardRefExoticComponent } from 'react';
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
const styled = (styledImport as unknown as { default?: typeof styledImport }).default || styledImport;

const RULES = {
  direction: { property: 'flex-direction', values: ['row-reverse', 'column', 'column-reverse'] },
  wrap: { property: 'flex-wrap', values: ['wrap', 'wrap-reverse'] },
  justify: { property: 'justify-content', values: ['flex-end', 'center', 'space-between', 'space-around'] },
  items: { property: 'align-items', values: ['flex-start', 'flex-end', 'center', 'baseline'] },
  content: { property: 'align-content', values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'] },
} as const;

type CamelCase<S extends string> = S extends `${infer Head}-${infer Tail}`
  ? `${Head}${Capitalize<CamelCase<Tail>>}`
  : S;

// "itemsFlexEnd" | "directionColumn" | ...
export type FlexRuleProp = {
  [Group in keyof typeof RULES]: `${Group}${Capitalize<CamelCase<(typeof RULES)[Group]['values'][number]>>}`;
}[keyof typeof RULES];

export type FlexContainerOwnProps = {
  /** Render another element or component instead of a div */
  as?: ElementType;
  /** display: inline-flex */
  inline?: boolean;
} & { [Prop in FlexRuleProp]?: boolean };

export type FlexContainerProps = FlexContainerOwnProps & Omit<ComponentPropsWithRef<'div'>, 'as'>;

const upperFirst = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
const toCamel = (value: string) => value.replace(/-(\w)/g, (_, char: string) => char.toUpperCase());

// propName (e.g. "itemsFlexEnd") -> { property: "align-items", value: "flex-end" }
const PROP_LOOKUP: Record<string, { property: string; value: string }> = {};
(Object.keys(RULES) as Array<keyof typeof RULES>).forEach((name) => {
  RULES[name].values.forEach((value) => {
    PROP_LOOKUP[name + upperFirst(toCamel(value))] = { property: RULES[name].property, value };
  });
});

const flexRules = (props: FlexContainerOwnProps) => Object.keys(props)
  .filter((key) => PROP_LOOKUP[key] && props[key as FlexRuleProp])
  .map((key) => `${PROP_LOOKUP[key].property}: ${PROP_LOOKUP[key].value};`)
  .join('\n');

const StyledFlexContainer = styled.div.withConfig({
  // flexbox props are consumed here and never reach the DOM
  shouldForwardProp: (prop) => prop !== 'inline' && !PROP_LOOKUP[prop],
})<FlexContainerOwnProps>`
  display: ${(props) => (props.inline ? 'inline-flex' : 'flex')};
  ${flexRules}
`;

// Typed as a plain component rather than styled-components' own type, so the published
// declarations work with styled-components 5 (@types/styled-components) and 6 alike.
const FlexContainer = StyledFlexContainer as unknown as ForwardRefExoticComponent<FlexContainerProps>;

export default FlexContainer;
