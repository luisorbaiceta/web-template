import React from 'react';
import cn from 'classnames';
import { composeRefs } from '~/lib/compose-refs';

// Header
type HeaderElement = React.ElementRef<'header'>;
interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {
  autoHide?: boolean;
}

const Header = React.forwardRef<HeaderElement, HeaderProps>((props, forwardedRef) => {
  const { autoHide = false, ...headerProps } = props;
  const headerRef = React.useRef<HTMLHeadElement>(null);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-10 flex justify-between p-5 transition-transform',
        'border-b bg-primary',
        // {
        //   'translate-y-[-100%]': !sticky,
        // },
      )}
      {...headerProps}
      ref={composeRefs(headerRef, forwardedRef)}
    />
  );
});

Header.displayName = 'HEADER';

export { Header as Root };
