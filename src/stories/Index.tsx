// this is the Name.tsx file
import React from 'react';
import PropTypes from 'prop-types';

import { Topbar } from './Topbar';
import { Menu } from './Menu';
import { Footer } from './Footer';
import { HomeServices } from './HomeServices';

interface IndexProps {
  primary?: boolean;
}

export const Index = ({ primary }: IndexProps = { primary: false }) => {
  const mode = primary ? 'storybook-Index--primary' : 'storybook-Index--secondary';
  return (
    <>
      <Topbar />
      <Menu />
      <main>
        test
      </main>
      <HomeServices />
      <Footer />
    </>
  );
};

Index.propTypes = {
  primary: PropTypes.bool,
};

Index.defaultProps = {
  primary: false,
};