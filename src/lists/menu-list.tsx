import React from "react"
import { Link } from "gatsby"

import ContactList from "./contact-list"

const MenuList = () => (
  <ul>
    <li key="home"><Link to="/">Home</Link></li>
    <li key="residential"><Link to="/residential">Residential Christmas Lights</Link></li>
    <li key="commercial"><Link to="/commercial">Commercial Christmas Lights</Link></li>
    <li key="wedding"><Link to="/wedding">Wedding Lighting</Link></li>
    <li key="hr3"><hr /></li>
    <li key="lights"><Link to="/lights">Lights</Link></li>
    <li key="services"><Link to="/services">Services</Link></li>
    <li key="faqs"><Link to="/faqs">FAQs</Link></li>
    <li key="hr1"><hr /></li>
    <li key="venues"><Link to="/venues">Tahoe Wedding Venues</Link></li>
    <li key="vendors"><Link to="/vendors">Tahoe Wedding Vendors</Link></li>
    <li key="areas"><Link to="/areas">Service Areas</Link></li>
    <li key="hr2"><hr /></li>
    <li key="contact"><Link to="/contact">Contact</Link></li>
    <li key="contactlist"><ContactList /></li>
  </ul>
)

export default MenuList
