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
      <button type='button'>Load More</button>
      <button type='button' className="button-hover-storybook">Hovered state</button>
      <button type='button' className="button-focus-storybook">Focused state</button>
      <hr />
    </main>
  );
};
