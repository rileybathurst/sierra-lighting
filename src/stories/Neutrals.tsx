// this is the Name.tsx file
// TODO: waiting on color cards from npm but doing them on paddle first
import React from 'react';

interface NeutralsProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Neutrals = ({
  primary = false,
  ...props
}: NeutralsProps) => {

  return (
    <main
      {...props}
    >
      {primary ? 'primary' : 'secondary'}
    </main>
  );
};