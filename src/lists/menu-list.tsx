import React from "react"
import { Link } from "gatsby"
import Season from "../components/season"

const MenuList = () => (
  <Season>
    <li key="wedding" className="wedding">
      <Link to="/wedding">Wedding Lighting</Link>
    </li>
    <li key="residential" className="xmas_r">
      <Link to="/residential">Residential Christmas Lights</Link>
    </li>
    <li key="commercial" className="xmas_c">
      <Link to="/commercial">Commercial Christmas Lights</Link>
    </li>
    {/*     <li key="contact" className="c">
      <Link to="/contact">Contact</Link>
    </li> */}
    <li key="start" className="c">
      <Link to="/contact">
        Start With A Free Quote
      </Link>
    </li>
  </Season>
)

export default MenuList
