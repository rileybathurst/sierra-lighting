// this is the Name.tsx file
import React from 'react';

interface BreadcrumbsProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Breadcrumbs = ({
  primary = false,
  // ...props
}: BreadcrumbsProps) => {

  return (
    <main
    // {...props}
    >
      {primary ? 'primary' : 'secondary'}
    </main>
  );
};