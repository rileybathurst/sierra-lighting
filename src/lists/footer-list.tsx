import React from "react"
import { Link } from "gatsby"

const FooterList = () => (
  <>
    <ul className="christmas">
      <li key="christmas lights" className="footer_list--no_link"><strong>Christmas Lights</strong></li>
      <li key="residential"><Link to="/residential">Residential</Link></li>
      <li key="commercial"><Link to="/commercial">Commercial</Link></li>
      <li key="projects"><Link to="/projects/christmas-light-projects">Projects</Link></li>
      <li key="services"><Link to="/services">Services</Link></li>
    </ul>
    <ul className="wedding">
      <li key="wedding" className=""><Link to="/wedding"><strong>Wedding</strong></Link></li>
      <li key="wedding projects"><Link to="/projects/wedding-projects">Wedding Projects</Link></li>
      <li key="wedding lights"><Link to="/lights/wedding-lights">Wedding Lights</Link></li>
      <li key="venues"><Link to="/venues">Venues</Link></li>
      <li key="vendors"><Link to="/vendors">Vendors</Link></li>
    </ul>

    <ul>
      {/* // ? other group */}
      <li key="contact" className=""><Link to="/contact"><strong>Contact</strong></Link></li>
      <li key="work"><Link to="/work">Work with us</Link></li>
      <li key="faqs"><Link to="/faqs">FAQs</Link></li>
      <li key="testimonials"><Link to="/testimonials">Testimonials</Link></li>
      <li key="areas"><Link to="/areas">Service Areas</Link></li>
    </ul>

    <ul>
      <li key="permanent"><Link to="/permanent">Permanent Patio Lights</Link></li>
      <li key="events"><Link to="/events">Non Wedding Events</Link></li>
      <li key="commercial-events"><Link to="/commercial-events">Commercial Events</Link></li>
      <li key="affiliations"><Link to="/affiliations">Affiliations</Link></li>
    </ul>
  </>
)

export default FooterList
