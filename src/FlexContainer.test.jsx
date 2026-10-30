import { createRef } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import styled from 'styled-components';
import { afterEach, expect, test } from 'vitest';
import FlexContainer from './index';

afterEach(cleanup);

const renderContainer = (props) => {
  render(<FlexContainer data-testid="box" {...props} />);
  return screen.getByTestId('box');
};

const css = (box) => getComputedStyle(box);

// the CSS text styled-components generated for this element's classes
const generatedCss = (box) => Array.from(document.styleSheets)
  .flatMap((sheet) => Array.from(sheet.cssRules))
  .filter((rule) => Array.from(box.classList).some((name) => rule.selectorText === `.${name}`))
  .map((rule) => rule.cssText)
  .join(' ');

test('renders a div with display: flex', () => {
  const box = renderContainer();
  expect(box.tagName).toBe('DIV');
  expect(css(box).display).toBe('flex');
});

test('only the rules that are set are written to the stylesheet', () => {
  const box = renderContainer({ itemsCenter: true });
  expect(css(box).alignItems).toBe('center');
  expect(generatedCss(box)).toContain('align-items: center');
  expect(generatedCss(box)).not.toContain('flex-direction');
  expect(generatedCss(box)).not.toContain('justify-content');
});

test('inline renders inline-flex', () => {
  expect(css(renderContainer({ inline: true })).display).toBe('inline-flex');
});

test('boolean props set the matching rules', () => {
  const style = css(renderContainer({
    directionColumnReverse: true,
    wrapWrapReverse: true,
    justifySpaceBetween: true,
    itemsFlexEnd: true,
    contentSpaceAround: true,
  }));
  expect(style.flexDirection).toBe('column-reverse');
  expect(style.flexWrap).toBe('wrap-reverse');
  expect(style.justifyContent).toBe('space-between');
  expect(style.alignItems).toBe('flex-end');
  expect(style.alignContent).toBe('space-around');
});

test('props set to false are ignored', () => {
  expect(generatedCss(renderContainer({ directionColumn: false }))).not.toContain('flex-direction');
});

test('the last true prop in a group wins', () => {
  const box = renderContainer({ directionColumn: true, directionRowReverse: true });
  expect(css(box).flexDirection).toBe('row-reverse');
});

test('flexbox props are not forwarded to the DOM', () => {
  const box = renderContainer({ itemsCenter: true, inline: true });
  expect(box.hasAttribute('itemscenter')).toBe(false);
  expect(box.hasAttribute('inline')).toBe(false);
});

test('unrelated props such as contentEditable still reach the DOM', () => {
  const box = renderContainer({ contentEditable: true, className: 'x' });
  expect(box.getAttribute('contenteditable')).toBe('true');
  expect(box.classList.contains('x')).toBe(true);
});

test('as renders a different element', () => {
  const box = renderContainer({ as: 'ul' });
  expect(box.tagName).toBe('UL');
  expect(box.hasAttribute('as')).toBe(false);
});

test('style overrides the flexbox rules', () => {
  const box = renderContainer({ itemsCenter: true, style: { alignItems: 'baseline', height: 10 } });
  expect(box.style.alignItems).toBe('baseline');
  expect(box.style.height).toBe('10px');
});

test('can be extended with styled()', () => {
  const Extended = styled(FlexContainer)`
    flex-direction: column;
  `;
  render(<Extended data-testid="ext" itemsCenter />);
  const box = screen.getByTestId('ext');
  expect(css(box).flexDirection).toBe('column');
  expect(css(box).alignItems).toBe('center');
});

test('forwards refs', () => {
  const ref = createRef();
  render(<FlexContainer ref={ref} />);
  expect(ref.current).toBeInstanceOf(HTMLDivElement);
});
