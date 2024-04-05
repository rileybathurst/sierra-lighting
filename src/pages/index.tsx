import * as React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';

import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { useStrapiTopBar } from "../hooks/use-strapi-topbar";

import Header from "../components/header";
import Footer from "../components/footer";
import AreaList from '../lists/area-list';
import TestimonialList from "../components/testimonial-list";
import HomeHero from "../components/home-hero";
import Start from "../components/start";
import SeasonalLights from "../components/seasonal-lights";

import Qualities from "../components/qualities";
import HomeGallery from "../components/home-gallery";

const IndexPage = () => {

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

              <Start />
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
              {/* // TODO: this currently doesn't look good above or below the list */}
              <p>Don't see your town on the list? Don't worry, we serve the entire Reno Tahoe area.</p>
            </section>

            <HomeGallery />

          </div>
        </div>

        <hr className="albatross " />

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

          <SeasonalLights />
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