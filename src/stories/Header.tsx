// this is the Name.tsx file
import React from 'react';
import { Topbar } from './Topbar';
import { Menu } from './Menu';

export const Header = () => {

  return (
    <>
      <Topbar />
      <header>
        <div className="stripe">{/* stay gold */}</div>
        <Menu />
      </header>
    </>
  );
};