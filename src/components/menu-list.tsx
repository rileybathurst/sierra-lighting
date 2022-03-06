import React from "react"
import { Link } from "gatsby"

import ContactList from "./contact-list"

const MenuList = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/404">404</Link></li>
    <ContactList />
  </ul>
)

export default MenuList
