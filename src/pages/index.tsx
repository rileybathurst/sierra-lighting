import React, { useState, useEffect } from "react";
import { Link } from 'gatsby';

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import AreaAccordian from "../components/area-accordian";
import TestimonialList from "../components/testimonial-list";
import Season from "../components/season";

import Village from "../images/village";
import NorthTahoeArts from "../images/northtahoearts";
import NorthTahoeEvents from "../images/northtahoeevents";
import InclineChevron from "../images/inclinechevron";
import SnowyRoof from "../images/snowyroof";
import WestShoreWedding from "../images/WestShoreWedding";
import WeddingCannopy from "../images/weddingcannopy";
import BistroLights from "../images/bistro-lights";
import OutdoorWedding from "../images/outdoorwedding";
import IndoorWedding from "../images/indoorwedding";
import Backyard from "../images/backyard";

// light to dark switch
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
  }, [matches, query]);

  return matches;
}

function HeroImage() {
  let isSiteDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <>
      {isSiteDark && <WeddingCannopy />}
      {isSiteDark || <OutdoorWedding />}
    </>
  );
}

const IndexPage = () => {
  return (
    <>
      <Seo title="Sierra Lighting"
        description="Sierra Lighting installs Christmas, event, and wedding lights.
        Quality displays that are guaranteed! Experienced. Professional. Insured."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/sierra-lighting-og_image.jpg"
      />
      <Header />
      <main>

        <div className="hero-container">
          <section className="hero">
            <h2 className="site_title">Dependable holiday, landscape and events light installation</h2>

            <div className="village-container">
              {/* which season */}
              <Season season="holiday">
                <Link to="/project/rancharrah">
                  <Village />
                  <p>The Village at Rancharrah See the Project</p>
                </Link>
              </Season>

              <Season season="wedding">
                <Link to="/project/wedding-canopy">
                  <HeroImage />
                  <p>Wedding Canopy See the Project</p>
                </Link>
              </Season>

            </div>

            <section id="trusted" className="trusted">
              <hr />{/* ? should this be down below the h tag */}
              <h3>Trusted and local</h3>
              <p>Sierra Lighting is here to provide beautiful, hassle free holiday and event lighting for your residence or business. We specialize in outdoor Christmas and wedding lights installation, taking pride in the quality, commercial grade materials we sell and maintain for our customers. Let us help make your next holiday or event really shine!</p>
            </section>
          </section>
        </div>


        <div className="areas-and-gallery-container">
          <div className="areas-and-gallery">
            <section id="service-area" className="service-area">
              <hr />
              <h3 className="crest">Service Area</h3>
              <h4 className="small">Reno, Truckee, Lake Tahoe, Carson City and Minden</h4>
              <div className="home__area-acordian">
                <AreaAccordian />
              </div>
              <p>Don't see your town on the list? Don't worry, we serve the entire Reno Tahoe area. Get in touch today!</p>
            </section>

            <div className="home-gallery">
              <Season season="wedding">
                <BistroLights />
                <WestShoreWedding />
                <Backyard />
              </Season>

              <Season season="holiday">
                <NorthTahoeEvents />
                <InclineChevron />
                <NorthTahoeArts />
              </Season>

            </div>
          </div>
        </div>

        <div className="services-wrap">
          <section id="services" className="services">
            <hr />
            {/* // TODO  I need to think about the H levels here */}
            <h3>Services</h3>
            <h4 className="crest">Locally owned and Fully Insured</h4>
            <h5 className="range">Professional Experience</h5>
            <hr />
            <h4 className="crest">Efficient LEDs, House Safe Install</h4>
            <h5 className="range">Quality Materials</h5>
            <hr />
            <h4 className="crest">Installation, Repair &amp; Removal</h4>
            <h5 className="range">Hassle Free</h5>
            <hr />
            <h4 className="crest">Repairs Free of Charge</h4>
            <h5 className="range">Guaranteed Upkeep</h5>
          </section>

          <Season season="holiday">
            <div className="snowyroof-container">
              <SnowyRoof />
            </div>
          </Season>

          <Season season="wedding">
            <div className="snowyroof-container">
              <IndoorWedding />
            </div>
          </Season>
        </div>

        <div className="slider-container">
          <section id="slider" className="testimonials">
            <hr />
            <h2 className="crest">Testimonials</h2>
            <h3 className="range">Thanks From Our Customers</h3>

            <TestimonialList />

            <div className="testimonial-links">
              <h3 className="crest"><Link to="/testimonials">Read More Reviews</Link></h3>
              <h3 className="crest"><Link to="#" className="long-title">Or help us you buy submitting your own review</Link></h3>
            </div>
          </section>
        </div>

      </main>

      <Footer />

    </>
  )
}

export default IndexPage

// TODO: usestrapitopbar