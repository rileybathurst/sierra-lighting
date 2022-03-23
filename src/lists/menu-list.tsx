import React from "react"
import { Link } from "gatsby"

import ContactList from "./contact-list"

const MenuList = () => (
  <ul>
    <li key="home"><Link to="/">Home</Link></li>
    <li key="residential"><Link to="/residential">Residential</Link></li>
    <li key="commercial"><Link to="/commercial">Commercial</Link></li>
    <li key="wedding"><Link to="/wedding">Wedding</Link></li>
    <li key="venues"><Link to="/venues">Tahoe Wedding Venues</Link></li>
    <li key="vendors"><Link to="/vendors">Tahoe Wedding Vendors</Link></li>
    <li key="contact"><Link to="/contact">Contact</Link></li>
    <li key="areas"><Link to="/areas">Service Areas</Link></li>
    <li key="services"><Link to="/services">Services</Link></li>
    <li key="faqs"><Link to="/faqs">FAQs</Link></li>
    <li key="contactlist"><ContactList /></li>
  </ul>
)

export default MenuList
