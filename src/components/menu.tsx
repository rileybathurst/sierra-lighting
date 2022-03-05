
import React, { useState, useRef, useEffect } from 'react';
// import MenuList from './menu-list';
import Hamburger from "../images/hamburger";
// import Nav from "./nav"

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
          {/* <span
            style={{
              transform: 'translateY(-2rem)',
            }}
            className="span-styles"
          >close<br />menu
          </span> */}
          <Hamburger />
        </button>
        <nav
          style={{
            transform: 'translateY(-' + amount + 'px)',
            marginBottom: '-' + amount + 'px',
            // marginBottom: '-134px',
          }}
          ref={ref}
          className='menu__small'
        >
          <menu>
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>
          </menu>
        </nav>

      </>
    );
  } else if (slide == "menu") {

    useEffect(() => {
      // console.log('menu');
      // console.log(ref.current.clientHeight);
      setAmount(ref.current.clientHeight);
    });

    return (
      <>
        <button
          className="button-spinner"
          onClick={() => setSlide('close')}
        >
          {/* <span
            style={{ transform: 'translateY(-2rem)' }}
            className="span-styles"
          >close<br />menu
          </span> */}
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
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>
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
          {/* <span
            style={{ transform: 'translateY(0)' }}
            className="span-styles"
          >close<br />menu
          </span> */}
          <Hamburger />
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
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>
          </menu>
        </nav>

      </>
    );
  }
}

export default SlideMenu
