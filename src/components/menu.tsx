
import React, { useState, useRef, useEffect } from 'react';
// import MenuList from './menu-list';
import Hamburger from "../images/hamburger";
// import Nav from "./nav"
import MenuList from '../lists/menu-list';

function SlideMenu() {
  const [slide, setSlide] = useState('firstload');
  const [amount, setAmount] = useState(0);
  const ref = useRef();

  if (slide == "firstload") {

    useEffect(() => {
      // console.log('firstload');
      // console.log(ref.current.clientHeight);
      setAmount(ref.current.clientHeight);
    });

    return (
      <>
        <button
          className="button-spinner"
          onClick={() => setSlide('close')}
        >
          <span className='sr-only'>open menu</span>
          <Hamburger />
        </button>
        <nav
          style={{
            transform: 'translateY(-' + amount + 'px)',
            marginBottom: '-' + amount + 'px',
          }}
          ref={ref}
          className='menu__small'
        >
          <menu>
            <MenuList />
          </menu>
        </nav>

      </>
    );
  } else if (slide == "menu") {

    useEffect(() => {
      setAmount(ref.current.clientHeight);
    });

    return (
      <>
        <button
          className="button-spinner"
          onClick={() => setSlide('close')}
        >
          <span className='sr-only'>open menu</span>
          <Hamburger />
        </button>
        <nav
          style={{
            transform: 'translateY(-' + amount + 'px)',
            marginBottom: '-' + amount + 'px',
            transition: '2s ease',
          }}
          ref={ref}
          className='menu__small'
        >
          <menu>
            <MenuList />
          </menu>
        </nav>

      </>
    );
  } else {

    useEffect(() => {
      // console.log('else');
      // console.log(ref.current.clientHeight);
      setAmount(ref.current.clientHeight);
    });

    return (
      <>
        <button
          className="button-spinner"
          onClick={() => setSlide('menu')}
        >
          <span className='sr-only'>open menu</span>
          {/* <span
            style={{ transform: 'translateY(0)' }}
            className="span-styles"
          >close<br />menu
          </span> */}
          <Hamburger class="is-active" />
        </button>
        <nav
          style={{
            transform: 'translateY(0)',
            marginBottom: '-' + amount + 'px',
            transition: '2s ease',
          }}
          ref={ref}
          className='menu__small'
        >
          <menu>
            <MenuList />
          </menu>
        </nav>

      </>
    );
  }
}

export default SlideMenu
