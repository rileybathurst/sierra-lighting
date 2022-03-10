import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
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

        <p className="breadcrumbs"><Link to="/">Home</Link> / Wedding</p>
        <hr />

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

        <hr />

        <h3>Have you ever noticed how much lighting can affect the feeling of space?</h3>

        <p>Compare the warm glow of candle light to the blue glare of a fluorescent office and it's clear lighting has a big impact.  A professional lighting design package will highlight your decor and bring out the beauty of your venue.  Well planned lighting is one of the most affordable ways to truly make your special day shine.</p>

        <p>Your venue, decor, flowers, cake and photographer are all big investments. Make the most of them with the right lighting design and these elements will shine even brighter.</p>

        <p>Sierra Christmas Lights approaches every event from a photographic standpoint. Your pictures last forever and we want to be certain they look their best. We communicate with your event designer, planner, florist, photographer, and videographer ahead of your wedding. Once we understand the focal points of an event, we can create a lighting scheme that will best accentuate those details.  We look at the big picture of an event.  When the photographer takes a picture across the room of the couple dancing, they should be lit, along with the centerpieces, the band, and the wall in the back, to highlight all the important focal points of your event.</p>

        <p>We exclusively use modern LED technology, wireless and battery powered where possible.  With wireless LEDs, we are eliminating fire risks from traditional technology, reducing tripping hazards and clutter in your photos.  We use modern RGB technology to create the perfect lighting effects to highlight your decor and create the ideal mood for your big day.  For example, ambers / warm whites add a flattering and romantic glow while deep purple / blue can amp up guests for the dance party portion of the night. You can choose a unified color scheme, select a palette of complimentary colors or even plan changes throughout your event.</p>

      </main>

      <hr />

      <StaticQuery
        query={query}
        render={data => (
          <div className="measure">
            {data.allStrapiLight.nodes.map(light => (

              <div key={light.id} className="card">
                <h2><Link to={`/light/${light.slug}`}>{light.name}</Link></h2>
                <p>{light.description}</p>
              </div>

            ))}
          </div>
        )}
      />

      <Footer />
    </>
  )
}

export default WeddingPage

const query = graphql`
query WeddingQuery {
  allStrapiLight(filter: { publishedAt: { ne: null } }) {
    nodes {
      id
      name
      description
      slug
    }
  }
}
`