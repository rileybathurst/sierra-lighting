//

// this is the Name.tsx file
import React from 'react';

interface ShowcaseProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Showcase = ({
  primary = false,
  ...props
}: ShowcaseProps) => {

  return (
    <main
      {...props}
    >
      {primary ? 'primary' : 'secondary'}
    </main>
  );
};