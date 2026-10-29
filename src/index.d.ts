import type { ComponentPropsWithRef, ElementType, ForwardRefExoticComponent } from 'react';

export interface FlexContainerOwnProps {
  /** Render another element or component instead of a div */
  as?: ElementType;
  /** display: inline-flex */
  inline?: boolean;

  directionRowReverse?: boolean;
  directionColumn?: boolean;
  directionColumnReverse?: boolean;

  wrapWrap?: boolean;
  wrapWrapReverse?: boolean;

  justifyFlexEnd?: boolean;
  justifyCenter?: boolean;
  justifySpaceBetween?: boolean;
  justifySpaceAround?: boolean;

  itemsFlexStart?: boolean;
  itemsFlexEnd?: boolean;
  itemsCenter?: boolean;
  itemsBaseline?: boolean;

  contentFlexStart?: boolean;
  contentFlexEnd?: boolean;
  contentCenter?: boolean;
  contentSpaceBetween?: boolean;
  contentSpaceAround?: boolean;
}

export type FlexContainerProps = FlexContainerOwnProps & Omit<ComponentPropsWithRef<'div'>, 'as'>;

declare const FlexContainer: ForwardRefExoticComponent<FlexContainerProps>;
export default FlexContainer;
