import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const FooterList = () => (
  <>
    <ul className="christmas">
      <li><Link to="/residential">Residential</Link></li>
      <li><Link to="/commercial">Commercial</Link></li>
    </ul>
    <ul className="wedding">
      <li><Link to="/wedding">Wedding</Link></li>
      <li><Link to="/venues">Venues</Link></li>
      <li><Link to="/vendors">Vendors</Link></li>
    </ul>
    <ul>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/work">Work</Link></li>
      <li><Link to="/faqs">FAQs</Link></li>
      <li><Link to="/testimonials">Testimonials</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </>
)

export default FooterList
