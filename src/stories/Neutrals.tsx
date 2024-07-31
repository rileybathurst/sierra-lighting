// this is the Name.tsx file
// TODO: waiting on color cards from npm but doing them on paddle first
import React from 'react';
import { ColorCards } from './ColorCards';

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
      <ColorCards color="black-metal" />
      <ColorCards color="black-out" />
      <ColorCards color="raven-black" />
      <ColorCards color="industrial-revolution" />
      <ColorCards color="grey" />
      <ColorCards color="cold-grey" />
      <ColorCards color="tin-soldier" />
      <ColorCards color="kingly-cloud" />
      <ColorCards color="brilliance" />
    </main>
  );
};