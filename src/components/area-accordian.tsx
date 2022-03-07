
import React, { useState, useRef, useEffect } from 'react';
import Hamburger from "../images/hamburger";
import AreaList from './area-list';

function AreaAccordian() {
  const [slide, setSlide] = useState('firstload');
  const [amount, setAmount] = useState(0);
  const ref = useRef();

  if (slide == "firstload") {

    useEffect(() => {
      setAmount(ref.current.clientHeight);
    });

    return (
      <>
        <button
          className="accordian-spinner"
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
            <AreaList />
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
          className="accordian-spinner"
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
            <AreaList />
          </menu>
        </nav>

      </>
    );
  } else {

    useEffect(() => {
      setAmount(ref.current.clientHeight);
    });

    return (
      <>
        <button
          className="accordian-spinner"
          onClick={() => setSlide('menu')}
        >
          <span className='sr-only'>open menu</span>
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
            <AreaList />
          </menu>
        </nav>

      </>
    );
  }
}

export default AreaAccordian
