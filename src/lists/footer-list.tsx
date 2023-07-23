// * these have a flex order based on the season with a query
import React from "react"
import { Link } from "gatsby"

const FooterList = () => (
  <>
    {/* // TODO: these need titles and to be realigned */}
    {/* // ? services list? */}

    <ul className="christmas">
      <li key="christmas lights" className="footer_list--no_link"><strong>Christmas Lights</strong></li>
      <li key="residential"><Link to="/residential">Residential</Link></li>
      <li key="commercial"><Link to="/commercial">Commercial</Link></li>
      <li key="projects"><Link to="/projects/christmas-light-projects">Projects</Link></li>
      {/* // TODO: wedding lights. Do I have to build a page thats both? */}
      {/* <li key="services"><Link to="/services">Services</Link></li> */}
    </ul>


    <ul className="wedding">
      <li key="wedding" className=""><Link to="/wedding"><strong>Wedding</strong></Link></li>
      <li key="wedding lights"><Link to="/lights/wedding">Wedding Lights</Link></li>
      <li key="wedding projects"><Link to="/projects/wedding-projects">Wedding Projects</Link></li>
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
      <li key="process"><Link to="/process">Process</Link></li>
      <li key="affiliations"><Link to="/affiliations">Affiliations</Link></li>
    </ul>

    <ul>
      <li key="permanent"><Link to="/permanent">Permanent Patio Lights</Link></li>
      <li key="events"><Link to="/events">Non Wedding Events</Link></li>
      <li key="commercial-events"><Link to="/commercial-events">Commercial Events</Link></li>
    </ul>
  </>
)

export default FooterList
