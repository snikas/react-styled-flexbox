import 'react';
import styled from 'styled-components';
import { decamelize } from 'humps';
import _ from 'lodash';

/**
 * React container component using css flexbox
 * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes
 * VALID PROPS
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
  const foundRule = _.find(_.keys(props), key => _.startsWith(key, ruleName));
  if (!foundRule) {
    return defaultRule;
  }
  const [, ...rule] = decamelize(foundRule, { separator: '-' }).split('-');
  return rule.join('-');
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${getRule('direction', 'row')};
  flex-wrap: ${getRule('wrap', 'nowrap')};
  justify-content: ${getRule('justify', 'flex-start')};
  align-items: ${getRule('items', 'stretch')};
  align-content: ${getRule('content', 'stretch')};
`;

export default FlexContainer;
