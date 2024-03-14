import * as React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';

import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { useStrapiTopBar } from "../hooks/use-strapi-topbar";

import Header from "../components/header";
import Footer from "../components/footer";
import AreaList from '../lists/area-list';
import TestimonialList from "../components/testimonial-list";
import SnowyRoof from "../images/snowyroof";
import IndoorWedding from "../images/indoorwedding";
import HomeHero from "../components/home-hero";

// HomeGallery images
import Backyard from "../images/backyard";
import WestShoreWedding from "../images/WestShoreWedding";
import BistroLights from "../images/bistro-lights";
import NorthTahoeArts from "../images/northtahoearts";
import NorthTahoeEvents from "../images/northtahoeevents";
import InclineChevron from "../images/inclinechevron";
import Qualities from "../components/qualities";

const IndexPage = () => {

  // myUndefinedFunction();

  const { strapiSeason } = useStaticQuery(graphql`
    query MyQuery {
      strapiSeason {
        wedding
      }
    }
  `)

  return (
    <>
      <Header />
      <main className="margin-0">

        <div className="hero-container">
          <section className="hero">
            <div>
              {/* // * shortened version of site description */}
              <h2 className="site_title">{useSiteMetadata().slogan}</h2>

              <Link
                to="/contact"
                className="button button-hero"
              >Start with a free quote
              </Link>
            </div>

            <HomeHero />

            <section id="trusted" className="trusted">
              <hr />{/* ? should this be down below the h tag */}
              <h3>Trusted and local</h3>
              {/* // TODO: Query this from strapi */}
              <p>Sierra Lighting is here to provide beautiful, hassle free holiday and event lighting for your residence or business. We specialize in outdoor Christmas and wedding lights installation, taking pride in the quality, commercial grade materials we sell and maintain for our customers. Let us help make your next holiday or event really shine!</p>
            </section>
          </section>
        </div>


        <div className="areas-and-gallery-container">
          <div className="areas-and-gallery">
            <section id="service-area" className="service-area">
              <hr />
              <h3 className="crest">Service Area</h3>
              <AreaList />
              <p>Don't see your town on the list? Don't worry, we serve the entire Reno Tahoe area.</p>
            </section>

            <div className="home-gallery">
              {strapiSeason.wedding === true ? (
                <>
                  <BistroLights />
                  <WestShoreWedding />
                  <Backyard />
                </>
              ) : (
                <>
                  <NorthTahoeEvents />
                  <InclineChevron />
                  <NorthTahoeArts />
                </>
              )}
            </div>

          </div>
        </div>

        <div className="services-wrap">
          <section id="qualities" className="qualities">
            <Qualities />
            <div className="brow">
              <h3 className='supra'>
                <Link to="/process">How We Work With You</Link>
              </h3>
              <h3 className="eyebrow">Our Process</h3>
            </div>
          </section>

          {strapiSeason.wedding === true ? (
            // TODO: this has a bad classname
            <Link to="/light/drapery" className="snowyroof-container adhere">
              <IndoorWedding />
              <p className="sticker">Drapery</p>
            </Link>
          ) : (
            <div className="snowyroof-container">
              <SnowyRoof />
            </div>
          )}
        </div>

        <div className="slider-container">
          <section id="slider" className="testimonials">
            <hr />
            <h2 className="crest">Testimonials</h2>
            <h3 className="range">Thanks From Our Customers</h3>

            <TestimonialList />

            <div className="testimonial-links">
              {/* // ? should I have two crests in a row? */}
              <h3 className="crest">
                <Link to="/testimonials">Read More Reviews</Link>
              </h3>
              <h3 className="crest">
                <Link to="#" className="long-title">
                  Help us you buy submitting your own review
                </Link>
              </h3>
            </div>
          </section>
        </div>

      </main >

      <Footer />

    </>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <SEO
      title={`${useSiteMetadata().title} | ${useStrapiTopBar()}`}
      // TODO: this is another slogan used.
      description="Sierra Lighting installs Christmas, event, and wedding lights. Quality displays that are guaranteed! Experienced.Professional.Insured."
      image={useSiteMetadata().defaultImage}
    />
  )
}