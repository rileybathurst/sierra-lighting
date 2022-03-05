import * as React from "react"
import { Helmet } from "react-helmet"

import Logo from "../images/logo";
import Menu from "./menu";

const Header = () => {
  return (
    <header>
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
      <h2 className="mixta">Dependable holiday, landscape and events light installation</h2>
    </header>
  )
}

export default Header