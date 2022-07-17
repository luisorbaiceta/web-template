import React, { Dispatch, SetStateAction } from 'react';
import classnames from 'classnames';
import { createContext } from '~/lib/create-context';
import { useControllableState } from '~/lib/use-controllable-state';

const CARD_CONTEXT_NAME = 'CARD_CONTEXT';
const [CardProvider, useCardContext] = createContext<{
  collapsed: boolean;
  toggleCollapsed: Dispatch<SetStateAction<boolean | undefined>>;
}>(CARD_CONTEXT_NAME);

// Card
type CardElement = React.ElementRef<'article'>;
interface CardProps extends React.ComponentPropsWithoutRef<'article'> {
  collapsed?: boolean;
}

const Card = React.forwardRef<CardElement, CardProps>((props, forwardedRef) => {
  const { collapsed: collapsedProp, ...cardProps } = props;
  const [collapsed = false, setCollapsed] = useControllableState({
    prop: collapsedProp,
    defaultProp: false,
  });

  return (
    <CardProvider collapsed={collapsed} toggleCollapsed={setCollapsed}>
      <article
        {...cardProps}
        className={classnames('border border-gray-300 rounded-md', 'max-w-sm', {
          'bg-blue-200': collapsed,
        })}
        ref={forwardedRef}
      >
        {props.children}
      </article>
    </CardProvider>
  );
});

Card.displayName = 'CARD';

// CollapseButton
type CollapseButtonElement = React.ElementRef<'button'>;
interface CollapseButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CollapseButton = React.forwardRef<CollapseButtonElement, CollapseButtonProps>(
  (props, forwardedRef) => {
    const { onClick, ...collapsebuttonProps } = props;
    const { toggleCollapsed } = useCardContext();

    function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();
      if (onClick) {
        onClick(e);
      }
      toggleCollapsed((prev) => !prev);
    }

    return <button onClick={handleOnClick} {...collapsebuttonProps} ref={forwardedRef} />;
  },
);

CollapseButton.displayName = 'COLLAPSE_BUTTON';

export { Card as Root, CollapseButton as Collapse };
