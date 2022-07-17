import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';

type LinkElement = React.ElementRef<'a'>;
interface LinkProps extends NextLinkProps {
  href: string;
  isNavLink?: boolean;
  children: React.ReactNode;
}

const Link = React.forwardRef<LinkElement, LinkProps>((props, forwardedRef) => {
  const { href, children, isNavLink = false, ...linkProps } = props;
  if (isNavLink) linkProps.scroll = false;

  return (
    <NextLink {...linkProps} href={href}>
      <a ref={forwardedRef}>{children}</a>
    </NextLink>
  );
});

Link.displayName = 'LINK';

// NavLink

type NavLinkElement = React.ElementRef<'a'>;
interface NavLinkProps extends Omit<LinkProps, 'scroll'> {}

const NavLink = React.forwardRef<NavLinkElement, NavLinkProps>((props, forwardedRef) => {
  const { href, ...navLinkProps } = props;
  return <Link href={href} ref={forwardedRef} scroll={false} {...navLinkProps} />;
});

NavLink.displayName = 'NAVLINK';

export { Link as Root, NavLink as Navigation };
