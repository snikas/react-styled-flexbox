import 'react';
import styled from 'styled-components';
import { decamelize } from 'humps';

/**
 * React container component using css flexbox
 * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes
 * VALID PROPS
 * inline
 * directionRowReverse
 * directionColumn
 * directionColumnReverse
 * wrapWrap
 * wrapWrapReverse
 * itemsFlexStart
 * itemsFlexEnd
 * itemsCenter
 * itemsBaseline
 * contentFlexStart
 * contentFlexEnd
 * contentCenter
 * contentSpaceBetween
 * contentSpaceAround
 * justifySpaceBetween
 * justifySpaceAround
 * justifyFlexEnd
 * justifyCenter
 */

const getRule = (ruleName, defaultRule) => (props) => {
  const foundRule = Object.keys(props).find(key => key.startsWith(ruleName));
  if (!foundRule || !props[foundRule]) {
    return defaultRule;
  }
  const [, ...rule] = decamelize(foundRule, { separator: '-' }).split('-');
  return rule.join('-');
};

const FlexContainer = styled.div`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  flex-direction: ${getRule('direction', 'row')};
  flex-wrap: ${getRule('wrap', 'nowrap')};
  justify-content: ${getRule('justify', 'flex-start')};
  align-items: ${getRule('items', 'stretch')};
  align-content: ${getRule('content', 'stretch')};
`;

export default FlexContainer;
