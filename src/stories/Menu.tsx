// this is the Name.tsx file
import React from 'react';
import PropTypes from 'prop-types';

import { Logo } from './Logo';

export const Menu = ({ primary }) => {
  const mode = primary ? 'storybook-Menu--primary' : 'storybook-Menu--secondary';
  return (
    <header >
      <div className="header-container">
        {/* // needed to hide the small menu */}
        <div className="stripe">{/* stay gold */}</div>

        <div className='small'>
          <Logo />
        </div>
        <button
          className="button-spinner"
        >
          <span className='sr-only'>open menu</span>
          <div className="hamburger">
            <div>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
        </button>
        <nav
          className='menu__small'
        >
          <menu>
            <ul className="wedding">
              <li key="residential" className="xmas_r">
                <a href="#">Residential Christmas Lights</a>
              </li>
              <li key="commercial" className="xmas_c">
                <a href="#">Commercial Christmas Lights</a>
              </li>
              <li key="wedding" className="wedding">
                <a href="#">Wedding</a>
              </li>
              <li key="start" className="c">
                <a href="#">
                  Start With A Free Quote
                </a>
              </li>
            </ul >
          </menu>
        </nav>

        <div className='bigboy'>
          <ul className="wedding">
            <li key="logo" className="logo">
              <a href="#" className="header__logo">
                <Logo />
              </a>
            </li>
            <li key="residential" className="xmas_r">
              <a href="#">Residential<br />Christmas Lights</a>
            </li>
            <li key="commercial" className="xmas_c">
              <a href="#">Commercial<br />Christmas Lights</a>
            </li>
            <li key="wedding" className="wedding">
              <a href="#">Wedding</a>
            </li>
            <li key="start" className="c">
              <a href="#">
                Start With A<br />
                Free Quote
              </a>
            </li>
          </ul >
        </div >
      </div >
    </header >
  );
};

Menu.propTypes = {
  primary: PropTypes.bool,
};

Menu.defaultProps = {
  primary: false,
};