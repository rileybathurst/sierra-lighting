// this is the Name.tsx file
import React from 'react';

interface ButtonsProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Buttons = ({
  primary = false,
  ...props
}: ButtonsProps) => {

  return (
    <main
      {...props}
    >
      {primary ? 'primary' : 'secondary'}
      <h2>Buttons</h2>
      <button>Load More</button>
      <button className="button--hover">Hovered state</button>
      <button className="button--focus">Focused state</button>
      <hr />
    </main>
  );
};
