// this is the Name.tsx file
import React from 'react';
import { Topbar } from './Topbar';

interface HeaderProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Header = ({
  primary = false,
  ...props
}: HeaderProps) => {

  return (
    <>
      <Topbar />
      <header>
        <div className="stripe">{/* stay gold */}</div>
        header
      </header>
    </>
  );
};