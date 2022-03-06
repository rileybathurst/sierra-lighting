import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import Logo from "../images/logo";
import Menu from "./menu";

const Header = () => {
  return (
    <>
      <div className="top-bar">
        <h2><Link to="/">Booking now for Christmas 2022</Link></h2>
        <hr />
      </div>{/* how do I get around this being an h1 */}
      <header>
        <div className="header-container">
          <Helmet>
            <link
              rel="stylesheet"
              href="https://use.typekit.net/kmu8xou.css"
            // crossorigin="use-credentials" // 📣 this has an issue either on or off
            />
          </Helmet>
          <Logo />
          <div className="stripe">{/* stay gold */}</div>
          <Menu />
          {/* <h2 className="mixta">Dependable holiday, landscape and events light installation</h2> */}
        </div>
      </header>
    </>
  )
}

export default Header