import React from 'react';
import { Slot } from '~/components/slot';
import cn from 'classnames';

const TEXT_NODES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'] as const;

type TextPrimitives = {
  [E in typeof TEXT_NODES[number]]: TextPrimitiveForwardRefComponent<E>;
};
type TextPrimitivePropsWithRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E> & {
    asChild?: boolean;
  };

interface TextPrimitiveForwardRefComponent<E extends React.ElementType>
  extends React.ForwardRefExoticComponent<TextPrimitivePropsWithRef<E>> {}

/* -------------------------------------------------------------------------------------------------
 * Primitive
 * -----------------------------------------------------------------------------------------------*/

const TextPrimitive = TEXT_NODES.reduce(
  (primitive, node) => ({
    ...primitive,
    // eslint-disable-next-line react/display-name
    [node]: React.forwardRef(
      (props: TextPrimitivePropsWithRef<typeof node>, forwardedRef: any) => {
        const { asChild, ...primitiveProps } = props;
        const Comp: any = asChild ? Slot : node;

        return <Comp {...primitiveProps} ref={forwardedRef} />;
      },
    ),
  }),
  {} as TextPrimitives,
);

/* -----------------------------------------------------------------------------------------------*/

interface BaseProps {
  type: keyof TextPrimitives;
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode | any;
}

// TODO define type of element ref
const Base = React.forwardRef<any, BaseProps>(
  ({ type, className = '', children, asChild }, forwardedRef) => {
    const T = TextPrimitive[type];
    return (
      <T
        asChild={asChild}
        ref={forwardedRef}
        className={cn(className, 'font-sans text-sm')}
      >
        {children}
      </T>
    );
  },
);
Base.displayName = 'BASE_TEXT';

// Paragraph
type ParagraphElement = React.ElementRef<'p'>;
interface ParagraphProps extends React.ComponentPropsWithoutRef<'p'> {}

const Paragraph = React.forwardRef<ParagraphElement, ParagraphProps>(
  (props, forwardedRef) => {
    const { className, ...paragraphProps } = props;
    return (
      <Base
        type='p'
        className={cn('font-light', className)}
        {...paragraphProps}
        ref={forwardedRef}
      />
    );
  },
);
Paragraph.displayName = 'PARAGRAPH';

// Title
type TitleElement = React.ElementRef<'h1'>;
interface TitleProps extends React.ComponentPropsWithoutRef<'h1'> {}

const Title = React.forwardRef<TitleElement, TitleProps>((props, forwardedRef) => {
  const { className, ...titleProps } = props;
  return (
    <Base
      type='h1'
      className={cn(className, 'text-3xl font-thin')}
      {...titleProps}
      ref={forwardedRef}
    />
  );
});
Title.displayName = 'TITLE';

export { Paragraph as P, Title as H1 };
