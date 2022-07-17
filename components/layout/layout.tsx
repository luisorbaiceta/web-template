import React, { FC, Fragment, useRef } from 'react';
import cn from 'classnames';

import Header from '~/components/header';
import Link from '~/components/link';
import { useUIContext } from '~/contexts/ui';

type FCWithChildren = FC<{ children?: React.ReactNode }>;

const Layout: FCWithChildren = ({ children }) => {
  const { openDropdown, openSidebar } = useUIContext();

  return (
    <>
      {/* {!(process.env.NODE_ENV === 'production') && (
        <VisualGrid columnNumber={6} gap={15} side={15} />
      )} */}
      <Dropdown />
      <SideBar />
      <Header.Root>
        <Link.Navigation href='/'>Home</Link.Navigation>
        <Link.Navigation href='/about'>About</Link.Navigation>
        <button onClick={openDropdown}>Menu</button>
        <button onClick={openSidebar}>Sidebar</button>
      </Header.Root>
      <main>{children}</main>
      <footer />
    </>
  );
};

const Dropdown: FCWithChildren = () => {
  const menuRef = useRef(null);
  const { displayDropdown, closeDropdown, openSidebar } = useUIContext();

  return (
    <div
      ref={menuRef}
      className={cn('absolute-expand z-30 bg-primary bg-gray-600')}
      hidden={!displayDropdown}
    >
      Dropdown <button onClick={closeDropdown}>Close</button>
      <button onClick={openSidebar}>Open Sidebar</button>
    </div>
  );
};

const SideBar: FCWithChildren = () => {
  const sideBarRef = useRef(null);
  const { displaySidebar, closeSidebar } = useUIContext();

  return (
    <div
      ref={sideBarRef}
      className={cn(
        'absolute top-0 bottom-0 left-0 w-96 z-30 bg-primary bg-yellow-600',
        {},
      )}
      style={{ display: displaySidebar ? 'block' : 'none' }}
    >
      SideBar Hi <button onClick={closeSidebar}>Close SB</button>
    </div>
  );
};

export { Layout as Root };
