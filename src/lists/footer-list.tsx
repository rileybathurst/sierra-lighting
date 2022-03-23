import React from "react"
import { Link } from "gatsby"

const FooterList = () => (
  <>
    <ul className="christmas">
      <li key="christmas lights" className="mixta">Christmas Lights</li>
      <li key="residential"><Link to="/residential">Residential</Link></li>
      <li key="commercial"><Link to="/commercial">Commercial</Link></li>
      <li key="projects"><Link to="/projects/christmas-light-projects">Projects</Link></li>
    </ul>
    <ul className="wedding">
      <li key="wedding" className="mixta"><Link to="/wedding">Wedding</Link></li>
      <li key="wedding projects"><Link to="/projects/wedding-projects">Wedding Projects</Link></li>
      <li key="venues"><Link to="/venues">Venues</Link></li>
      <li key="vendors"><Link to="/vendors">Vendors</Link></li>
    </ul>
    <ul>
      <li key="contact" className="mixta"><Link to="/contact">Contact</Link></li>
      <li key="work"><Link to="/work">Work with us</Link></li>
      <li key="faqs"><Link to="/faqs">FAQs</Link></li>
      <li key="testimonials"><Link to="/testimonials">Testimonials</Link></li>
      <li key="areas"><Link to="/areas">Service Areas</Link></li>
    </ul>
  </>
)

export default FooterList
