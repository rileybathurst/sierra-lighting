import React from "react"
import { Link } from "gatsby"

const MenuList = () => (
  <ul>
    <li key="wedding"><Link to="/wedding">Wedding Lighting</Link></li>
    <li key="residential"><Link to="/residential">Residential Christmas Lights</Link></li>
    <li key="commercial"><Link to="/commercial">Commercial Christmas Lights</Link></li>
    <li key="contact"><Link to="/contact">Contact</Link></li>
  </ul>
)

export default MenuList
