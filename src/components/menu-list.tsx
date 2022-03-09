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
    <li><Link to="/vendors">Tahoe Wedding Vendors</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/areas">Service Areas</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/faqs">FAQs</Link></li>
    <li><ContactList /></li>
  </ul>
)

export default MenuList
