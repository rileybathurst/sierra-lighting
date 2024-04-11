import * as React from "react"
import { Link } from "gatsby"

import Logo from "../images/logo";
import Menu from "./menu";
import TopBar from "./topbar";
import Season from "../components/season";

const Header = () => {
  return (
    <>
      <TopBar />
      <header >
        <div className="header-container">
          {/* // needed to hide the small menu */}
          <div className="stripe">{/* stay gold */}</div>
          <Menu />
          <div className='bigboy'>
            <Season>
              <li key="logo" className="logo">
                <Link to="/" className="header__logo" itemProp="logo"><Logo /></Link>
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
            </Season>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
