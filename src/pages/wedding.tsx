import * as React from "react"
// import { Link, StaticQuery, graphql } from 'gatsby';
// import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

// markup
const WeddingPage = () => {
  return (
    <>
      <Seo
        title="Tahoe Wedding Venues | Sierra lighting"
        titleColor="yellow" // nope?

        description="The natural beauty of the Lake Tahoe area makes the perfect backdrop for a wedding. Check out these Tahoe wedding venues that range from rustic to glamorous."
      />

      <Header />
      <main className="measure">

        <h1>Wedding, Event, and Patio Lighting</h1>

        <p>Whether it's a wedding, corporate gathering, rehearsal dinner, anniversary, birthday party, or any other special event, we have you covered.</p>

        <p>Sierra Christmas Lights will provide the perfect ambiance and eliminate stressful hassles. Unlike the big rental companies, lights are all we do! We create beautiful custom displays that are far beyond the standard light sets others offer. We also have significantly lower minimums. So whether you are planning an extravagant lakefront wedding or a backyard birthday party, Sierra Christmas Lights will meet and exceed your expectations.</p>

        <h2>All inclusive from start to finish so you can focus on making memories, not logistics.</h2>

        <p>Our team will:</p>
        <ul>
          <li>Provide you site plans, renderings, examples of past work</li>
          <li>Partner with you to design options to meet your budget and expectations</li>
          <li>Send out our crew of lighting technicians on your schedule to ensure your venue shines</li>
          <li>Take down everything and restore the site so it looks like we were never there</li>
        </ul>

        <h3>Patio and Landscape Lighting</h3>

        <p>Sierra Christmas Lights can help make your home or business look amazing for the summer season. We offer a variety of lighting options including:</p>
        <ul>
          <li>Cafe lights</li>
          <li>Rope lights</li>
          <li>Up lighting on landscaping and buildings</li>
          <li>Trunk wraps</li>
          <li>Path and driveway illumination</li>
          <li>Have something particular in mind? Just ask!</li>
        </ul>

        <h3>Wedding Services</h3>
        <p>The natural beauty of the Reno Tahoe area make the perfect backdrop for a wedding. Our custom lighting design enhances your decor and the architectural / landscape features of your venue. Wether your aiming for a low key affair or a luxurious event, we work with you to create the perfect mood.</p>

        <p>Check out our list of wedding lighting services and some of our favorite Tahoe wedding venues.</p>
      </main>

      <Footer />
    </>
  )
}

export default WeddingPage
