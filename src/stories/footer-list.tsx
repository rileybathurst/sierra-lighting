// this is the FooterList.tsx file
import React from 'react';

export const FooterList = () => {

    return (
        <div className="footer_list">
            <ul>
                <li className="christmas">
                    <ul>
                        <li key="christmas" className="footer_list--no_link">
                            <strong>Christmas</strong>
                        </li>

                        <li key="residential"><a href="/residential">Residential</a></li>
                        <li key="commercial"><a href="/commercial">Commercial</a></li>
                        <li key="christmas light">
                            <a href="/christmas-lights">
                                Christmas Lights
                            </a>
                        </li>
                    </ul>
                </li>


                <li className="wedding">
                    <ul>
                        {/* // TODO: make the top link a little more subtle */}
                        <li key="wedding" className="link--subtle">
                            <a href="/wedding"><strong>Wedding</strong></a>
                        </li>
                        <li key="wedding lights">
                            <a href="/wedding/lights">Wedding Lights</a>
                        </li>
                        <li key="venues"><a href="/venue">Venues</a></li>
                        <li key="vendors"><a href="/vendor">Vendors</a></li>
                    </ul>
                </li>

                <li className="additional-services">
                    <ul>
                        <li key="services" className="footer_list--no_link">
                            <strong>Services</strong>
                        </li>
                        <li key="permanent"><a href="/patio">Patio Lighting</a></li>
                        <li key="events"><a href="/social-events">Social Events</a></li>
                        <li key="commercial-events">
                            <a href="/commercial-events">Commercial Events</a>
                        </li>
                    </ul>
                </li>

                <li className="work">
                    <ul>
                        <li key="work" className="footer_list--no_link">
                            <strong>Our Work</strong>
                        </li>
                        <li key="projects"><a href="/projects">Projects</a></li>
                        <li key="process"><a href="/process">Process</a></li>
                        <li key="areas"><a href="/areas">Service Areas</a></li>
                    </ul>
                </li>

                <li className="contacts">
                    <ul>
                        {/* // TODO: contact also needs the subtle link */}
                        <li key="contact" className="">
                            <a href="/contact"><strong>Contact</strong></a>
                        </li>
                        {/* <li key="work"><a href="/work">Work with us</a></li> */}
                        <li key="faqs"><a href="/faqs">FAQs</a></li>
                        <li key="testimonials"><a href="/testimonials">Testimonials</a></li>
                        <li key="affiliations"><a href="/affiliations">Affiliations</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};