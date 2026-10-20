// this is the Name.tsx file
import React from 'react';

interface UnionProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Union = ({
  primary = false,
  ...props
}: UnionProps) => {

  return (
    <div
      {...props}
    >
      {primary ? 'primary' : 'secondary'}
    </div>
  );
};