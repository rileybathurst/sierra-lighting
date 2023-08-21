import * as React from "react"
import { Link } from "gatsby"

import Logo from "../images/logo";
import Menu from "./menu";
import TopList from '../lists/top-list';
import TopBar from "./topbar";

const Header = () => {
  return (
    <>
      <TopBar />
      <header >
        <div className="header-container">
          <Link to="/" className="header__logo" itemProp="logo"><Logo /></Link>
          {/* // needed to hide the small menu */}
          <div className="stripe">{/* stay gold */}</div>
          <Menu />
          <div className='bigboy'>
            <TopList />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
