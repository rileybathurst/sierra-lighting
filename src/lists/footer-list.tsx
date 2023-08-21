// * these have a flex order based on the season with a query
import React from "react"
import { Link } from "gatsby"

const FooterList = () => (
  <>
    {/* // TODO: these need titles and to be realigned */}
    {/* // ? services list? */}

    <li className="christmas">
      <ul>
        <li key="christmas" className="footer_list--no_link"><strong>Christmas</strong></li>
        {/* // TODO: */}
        <li key="christmas light"><Link to="#">Christmas Lights</Link></li>
        <li key="residential"><Link to="/residential">Residential</Link></li>
        <li key="commercial"><Link to="/commercial">Commercial</Link></li>
        {/* // TODO: wedding lights. Do I have to build a page thats both? */}
        {/* <li key="services"><Link to="/services">Services</Link></li> */}
      </ul>
    </li>


    <li className="wedding">
      <ul>
        {/* // TODO: make the top link a little more subtle */}
        <li key="wedding" className="link--subtle"><Link to="/wedding"><strong>Wedding</strong></Link></li>
        <li key="wedding lights"><Link to="/lights/wedding">Wedding Lights</Link></li>
        <li key="venues"><Link to="/venues">Venues</Link></li>
        <li key="vendors"><Link to="/vendors">Vendors</Link></li>
      </ul>
    </li>

    <li className="additional-services">
      <ul>
        <li key="services" className="footer_list--no_link"><strong>Services</strong></li>
        <li key="permanent"><Link to="/permanent">Patio Lighting</Link></li>
        <li key="events"><Link to="/events">Non Wedding Events</Link></li>
        <li key="commercial-events"><Link to="/commercial-events">Commercial Events</Link></li>
      </ul>
    </li>

    <li id="work">
      <ul>
        <li key="work" className="footer_list--no_link"><strong>Our Work</strong></li>
        <li key="projects"><Link to="/projects">Projects</Link></li>
        <li key="process"><Link to="/process">Process</Link></li>
        <li key="areas"><Link to="/areas">Service Areas</Link></li>
      </ul>
    </li>

    <li id="contacts">
      <ul>
        {/* // TODO: contact also needs the subtle link */}
        <li key="contact" className=""><Link to="/contact"><strong>Contact</strong></Link></li>
        {/* <li key="work"><Link to="/work">Work with us</Link></li> */}
        <li key="faqs"><Link to="/faqs">FAQs</Link></li>
        <li key="testimonials"><Link to="/testimonials">Testimonials</Link></li>
        <li key="affiliations"><Link to="/affiliations">Affiliations</Link></li>
      </ul>
    </li>


  </>
)

export default FooterList
