import React, { useState, useEffect } from "react";
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

// import "../styles/app.scss"; // gatsby-browser.js
import AreaAccordian from "../components/area-accordian";
import TestimonialList from "../components/testimonial-list";
import WhichSeason from "../components/which-season";

// TODO move this to components to clean up this file
// christmas hero
export function Village() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Rancharrah-13-web-tagged.jpg"
    alt="christmas lighting display at the village at rancharrah"
    className="village"
    itemProp="photo"
    breakpoints={[300, 600, 900]}
    width={650}
  />
}

// christmas triptych
export function NorthTahoeArts() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/North_Tahoe_Arts-3-web-tagged.jpg"
    alt="The North Tahoe Arts building addorned in Christmas lights"
  // className=""
  // breakpoints={[300, 600, 900]}
  // width={650}
  />
}

// christmas triptych
export function NorthTahoeEvents() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/North_Tahoe_Events-4-web-tagged.jpg"
    alt="christmas lighting display at North Tahoe Events center"
    className="northtahoeevents"
    breakpoints={[300, 600, 900]}
    width={650}
  />
}

// christmas triptych
export function InclineChevron() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Incline-7-web-tagged.jpg"
    alt="christmas tree in Incline village nevada"
    className="inclinechevron"
    breakpoints={[300, 600, 900]}
    width={650}
  />
}

// christmas services
export function SnowyRoof() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Lakeshore_View-3-web-tagged.jpg"
    alt="christmas lights display on an entrance with a snowy roof in Incline village nevada"
    className="snowyroof poster" />
}

// wedding tryptich
export function WestShoreWedding() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/wedding/sierra_lighting-west_shore_cafe_lighting.jpg"
    alt="wedding lights over thelooking lake tahoe calidofornia"
    className="poster"
    breakpoints={[300, 600, 900]}
    width={650}
  />
}

// wedding hero light
export function WeddingCannopy() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/wedding/Sierra_Lighting-Zach-Maija.jpg"
    alt="wedding light canopy in truckee california"
    className="poster"
    breakpoints={[300, 600, 900]}
    width={650}
  />
}

// wedding tryptich
export function BistroLights() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/wedding/sierra_lighting-bistro_lights.jpg"
    alt="sierra lighting bistro lights"
    className=""
    breakpoints={[300, 600, 900]}
    width={650}
  />
}

// wedding tryptich
export function Backyard() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/wedding/sierra_lighting-wedding-backyard.jpg"
    alt="sierra lighting wedding lights"
    className=""
    breakpoints={[300, 600, 900]}
    width={650}
  />
}

// wedding hero dark
export function OutdoorWedding() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/wedding/sierra_lighting-outdoor_wedding.jpg"
    alt="sierra lighting lake tahoe outdoor wedding"
    className="poster"
    breakpoints={[650, 1300, 1950]}
    width={650}
  />
}

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
              {/* winter hero */}
              <Link to="/project/rancharrah">
                <Village />
                <p>The Village at Rancharrah See the Project</p>
              </Link>

              {/* summer hero */}
              {/* <Link to="/project/wedding-canopy">
                <HeroImage />
                <p>Wedding Canopy See the Project</p>
              </Link> */}

              {/*               <WhichSeason
              // ? its like I need the query here and then two below?
              // I dont think I need to pass the prop as it already has it
              >
                 // this isnt it as it needs to know what this component is and Im just trying to wrap it? 
                <Wedding>
                   // wedding="Wedding Canopy See the Project" 
                  <Link to="/project/wedding-canopy">
                    <p>Wedding Canopy See the Project</p>
                  </Link>
                </Wedding>

                <Holiday>
                  <Link to="/project/rancharrah">
                    <Village />
                    <p>The Village at Rancharrah See the Project</p>
                  </Link>
                </Holiday>

            </WhichSeason> */}

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
              {/* // TODO which season */}
              {/* wedding season */}
              <BistroLights />
              <WestShoreWedding />
              <Backyard />

              {/* christmas season
              <NorthTahoeEvents />
              <InclineChevron />
              <NorthTahoeArts /> */}

              {/* TODO: which season */}
              {/* <WhichSeason 
holiday="I need to make a triple"
wedding="I need to make a triple"
  /> */}

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

          <div className="snowyroof-container">

            <SnowyRoof />
          </div>
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