
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import Season from './season';

const Hamburger = ({ className }: { className: string }) => {
  return (
    <div className={`hamburger ${className}`}>
      <div>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  );
};

const MenuList = () => (
  <ul className={Season()}>
    <li key="wedding" className="wedding">
      <Link to="/wedding">Wedding Lighting</Link>
    </li>
    <li key="residential" className="xmas_r">
      <Link to="/residential">Residential Christmas Lights</Link>
    </li>
    <li key="commercial" className="xmas_c">
      <Link to="/commercial">Commercial Christmas Lights</Link>
    </li>
    <li key="start" className="c">
      <Link to="/contact?small-menu">
        Start With A Free Quote
      </Link>
    </li>
  </ul>
)

function SlideMenu() {
  const [slide, setSlide] = useState('firstload');
  const [amount, setAmount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      setAmount(ref.current.clientHeight);
    }
  }, []);

  if (slide === "firstload") {
    return (
      <>
        <button
          className="button-spinner"
          onClick={() => setSlide('close')}
          type="button"
        >
          <span className='sr-only'>open menu</span>
          <Hamburger className="inactive" />
        </button>
        <nav
          style={{
            transform: `translateY(-${amount}px)`,
            marginBottom: `-${amount}px`,
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

  if (slide === "menu") {
    return (
      <>
        <button
          className="button-spinner"
          onClick={() => setSlide('close')}
          type="button"
        >
          <span className='sr-only'>open menu</span>
          <Hamburger className="inactive" />
        </button>
        <nav
          style={{
            transform: `translateY(-${amount}px)`,
            marginBottom: `-${amount}px`,
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

  return (
    <>
      <button
        className="button-spinner"
        onClick={() => setSlide('menu')}
        type="button"
      >
        <span className='sr-only'>open menu</span>
        {/* <span
            style={{ transform: 'translateY(0)' }}
            className="span-styles"
          >close<br />menu
          </span> */}
        <Hamburger className="is-active" />
      </button>
      <nav
        style={{
          transform: 'translateY(0)',
          marginBottom: `-${amount}px`,
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

export default SlideMenu
