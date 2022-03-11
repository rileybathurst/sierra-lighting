import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import Logo from "../images/logo";
import Menu from "./menu";
import BigBoy from "./bigboy";

const Header = () => {
  return (
    <>
      <div className="top-bar">
        <h2><Link to="/" title="home">Booking now for Christmas 2022</Link></h2>
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
          <Link to="/"><Logo /></Link>
          <div className="stripe">{/* stay gold */}</div>
          <Menu />
          <BigBoy />
        </div>
      </header>
    </>
  )
}

export default Header