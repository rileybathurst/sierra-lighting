import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import Logo from "../images/logo";
import Menu from "./menu";
import BigBoy from "./bigboy";
import TopBar from "./topbar";

const Header = () => {
  return (
    <>
      <TopBar />
      <header >
        <div className="header-container">
          <Helmet>
            <link
              rel="stylesheet"
              href="https://use.typekit.net/kmu8xou.css"
            // crossorigin="use-credentials" // TODO this has an issue either on or off
            />
          </Helmet>
          <Link to="/" className="header__logo" itemProp="logo"><Logo /></Link>
          {/* // needed to hide the small menu */}
          <div className="stripe">{/* stay gold */}</div>
          <Menu />
          <BigBoy />
        </div>
      </header>
    </>
  )
}

export default Header
