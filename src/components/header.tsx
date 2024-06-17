import * as React from "react"
import { Link } from "gatsby"

import Logo from "../images/logo";
import SlideMenu from "./slide-menu";
import TopBar from "./topbar";
import Season from "../components/season";

interface HeaderTyes {
  largeLogo?: boolean
}
const Header = ({ largeLogo }: HeaderTyes) => {
  return (
    <>
      <TopBar />
      <header>
        {/* // needed to hide the small menu */}
        <div className="stripe">{/* stay gold */}</div>

        <Link to="/" className="small small-logo">
          <Logo />
        </Link>
        <SlideMenu />

        <div className='bigboy'>
          <ul className={Season()}>
            <li key="logo" className={`logo ${largeLogo}`}>
              <Link to="/" className="header__logo">
                <Logo />
              </Link>
            </li>
            <li key="residential" className="xmas_r">
              <Link to="/residential">Residential<br />Christmas Lights</Link>
            </li>
            <li key="commercial" className="xmas_c">
              <Link to="/commercial">Commercial<br />Christmas Lights</Link>
            </li>
            <li key="wedding" className="wedding">
              <Link to="/wedding">Wedding</Link>
            </li>
            <li key="start" className="c">
              <Link to="/contact">
                Start With A<br />
                Free Quote
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
