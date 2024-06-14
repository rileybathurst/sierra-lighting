// this is the Name.tsx file
import React from 'react';

interface EyebrowProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Eyebrow = ({
  primary = false,
  ...props
}: EyebrowProps) => {

  return (
    <main
      {...props}
    >
      {/* TODO: this is a straight up mess */}
      <p>
        <span className="crest">Crest</span>
        <br />
        <span className="range">Range</span>
        <br />
      </p>

    </main>
  );
};