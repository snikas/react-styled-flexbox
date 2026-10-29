import { createRef } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import FlexContainer from './index';

afterEach(cleanup);

const renderContainer = (props) => {
  render(<FlexContainer data-testid="box" {...props} />);
  return screen.getByTestId('box');
};

test('renders a div with display: flex and no other inline rules', () => {
  const box = renderContainer();
  expect(box.tagName).toBe('DIV');
  expect(box.getAttribute('style')).toBe('display: flex;');
});

test('as renders a different element and is not forwarded to the DOM', () => {
  const box = renderContainer({ as: 'ul' });
  expect(box.tagName).toBe('UL');
  expect(box.hasAttribute('as')).toBe(false);
});

test('the last true prop in a group wins', () => {
  const box = renderContainer({ directionColumn: true, directionRowReverse: true });
  expect(box.style.flexDirection).toBe('row-reverse');
});

test('inline renders inline-flex', () => {
  expect(renderContainer({ inline: true }).style.display).toBe('inline-flex');
});

test('boolean props set the matching rules', () => {
  const box = renderContainer({
    directionColumnReverse: true,
    wrapWrapReverse: true,
    justifySpaceBetween: true,
    itemsFlexEnd: true,
    contentSpaceAround: true,
  });
  expect(box.style.flexDirection).toBe('column-reverse');
  expect(box.style.flexWrap).toBe('wrap-reverse');
  expect(box.style.justifyContent).toBe('space-between');
  expect(box.style.alignItems).toBe('flex-end');
  expect(box.style.alignContent).toBe('space-around');
});

test('props set to false are ignored', () => {
  expect(renderContainer({ directionColumn: false }).style.flexDirection).toBe('');
});

test('flexbox props are not forwarded to the DOM', () => {
  const box = renderContainer({ itemsCenter: true, inline: true });
  expect(box.hasAttribute('itemscenter')).toBe(false);
  expect(box.hasAttribute('inline')).toBe(false);
});

test('unrelated props such as contentEditable still reach the DOM', () => {
  expect(renderContainer({ contentEditable: true, className: 'x' }).getAttribute('contenteditable')).toBe('true');
});

test('user style overrides and extends the flexbox styles', () => {
  const box = renderContainer({ itemsCenter: true, style: { alignItems: 'baseline', height: 10 } });
  expect(box.style.alignItems).toBe('baseline');
  expect(box.style.height).toBe('10px');
});

test('forwards refs', () => {
  const ref = createRef();
  render(<FlexContainer ref={ref} />);
  expect(ref.current).toBeInstanceOf(HTMLDivElement);
});
