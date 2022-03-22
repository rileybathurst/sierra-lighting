import React from "react"
import { Link } from "gatsby"

const FooterList = () => (
  <>
    <ul className="christmas">
      <li className="mixta">Christmas Lights</li>
      <li><Link to="/residential">Residential</Link></li>
      <li><Link to="/commercial">Commercial</Link></li>
      <li><Link to="/projects/christmas-light-projects">Projects</Link></li>
    </ul>
    <ul className="wedding">
      <li className="mixta"><Link to="/wedding">Wedding</Link></li>
      <li><Link to="/projects/wedding-projects">Wedding Projects</Link></li>
      <li><Link to="/venues">Venues</Link></li>
      <li><Link to="/vendors">Vendors</Link></li>
    </ul>
    <ul>
      <li className="mixta"><Link to="/contact">Contact</Link></li>

      <li><Link to="/work">Work with us</Link></li>
      <li><Link to="/faqs">FAQs</Link></li>
      <li><Link to="/testimonials">Testimonials</Link></li>
      <li><Link to="/areas">Areas</Link></li>
    </ul>
  </>
)

export default FooterList
