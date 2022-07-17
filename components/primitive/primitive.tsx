import * as React from 'react';
import { Slot } from '~/components/slot';

const NODES = [
  'a',
  'button',
  'div',
  'h2',
  'h3',
  'img',
  'li',
  'nav',
  'ol',
  'p',
  'span',
  'svg',
  'ul',
] as const;

// Temporary while we await merge of this fix:
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55396
// prettier-ignore
type PropsWithoutRef<P> = P extends any ? ('ref' extends keyof P ? Pick<P, Exclude<keyof P, 'ref'>> : P) : P;
type ComponentPropsWithoutRef<T extends React.ElementType> = PropsWithoutRef<
  React.ComponentProps<T>
>;

type Primitives = { [E in typeof NODES[number]]: PrimitiveForwardRefComponent<E> };
type PrimitivePropsWithRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E> & {
    asChild?: boolean;
  };

interface PrimitiveForwardRefComponent<E extends React.ElementType>
  extends React.ForwardRefExoticComponent<PrimitivePropsWithRef<E>> {}

/* -------------------------------------------------------------------------------------------------
 * Primitive
 * -----------------------------------------------------------------------------------------------*/

const Primitive = NODES.reduce(
  (primitive, node) => ({
    ...primitive,
    // eslint-disable-next-line react/display-name
    [node]: React.forwardRef(
      (props: PrimitivePropsWithRef<typeof node>, forwardedRef: any) => {
        const { asChild, ...primitiveProps } = props;
        const Comp: any = asChild ? Slot : node;

        return <Comp {...primitiveProps} ref={forwardedRef} />;
      },
    ),
  }),
  {} as Primitives,
);

/* -----------------------------------------------------------------------------------------------*/

export { Primitive };
export type { ComponentPropsWithoutRef, PrimitivePropsWithRef };
