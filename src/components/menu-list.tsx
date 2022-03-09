import React from "react"
import { Link } from "gatsby"

import ContactList from "./contact-list"

const MenuList = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/residential">Residential</Link></li>
    <li><Link to="/commercial">Commercial</Link></li>
    <li><Link to="/wedding">Wedding</Link></li>
    <li><Link to="/venues">Tahoe Wedding Venues</Link></li>
    <li><ContactList /></li>
  </ul>
)

export default MenuList
