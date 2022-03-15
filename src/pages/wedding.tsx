import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

export function NorthTahoeEvents() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/North_Tahoe_Events-4-web-tagged.jpg"
    alt="christmas lighting display at North Tahoe Events center"
    className="northtahoeevents" />
}

export function InclineChevron() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Incline-7-web-tagged.jpg"
    alt="christmas tree in Incline village nevada"
    className="inclinechevron" />
}

export function SnowyRoof() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Lakeshore_View-3-web-tagged.jpg"
    alt="christmas lights display on an entrance with a snowy roof in Incline village nevada"
    className="snowyroof" />
}

// markup
const WeddingPage = () => {
  return (
    <>
      <Seo
        title="Wedding, Event, and Patio Lighting"
        titleColor="yellow" // nope?

        description="The natural beauty of the Lake Tahoe area makes the perfect backdrop for a wedding. Check out these Tahoe wedding venues that range from rustic to glamorous.
        
        When you're looking for custom, elegant, one of a kind ambiance for you wedding, look no further than Sierra Christmas Lights. Creating beautiful displays is all we do!  We also offer landscape lighting services to make your outdoor space shine all summer long with cafe lights, uplighting, and more."
      />

      <Header />
      <main>

        <div className="measure">
          <p className="breadcrumbs"><Link to="/">Home</Link> / Wedding</p>
          <hr />

          <h1>Wedding, Event, and Patio Lighting</h1>

          <p>Whether it's a wedding, corporate gathering, rehearsal dinner, anniversary, birthday party, or any other special event, we have you covered.</p>

          <p>Sierra Christmas Lights will provide the perfect ambiance and eliminate stressful hassles. Unlike the big rental companies, lights are all we do! We create beautiful custom displays that are far beyond the standard light sets others offer. We also have significantly lower minimums. So whether you are planning an extravagant lakefront wedding or a backyard birthday party, Sierra Christmas Lights will meet and exceed your expectations.</p>
        </div>
        <div className="triple">
          <NorthTahoeEvents />
          <InclineChevron />
          <SnowyRoof />
        </div>
        <div className="measure">
          <hr />
          <h2>All inclusive from start to finish so you can focus on making memories, not logistics.</h2>

          <p>Our team will:</p>
          <ul>
            <li>Provide you site plans, renderings, examples of past work</li>
            <li>Partner with you to design options to meet your budget and expectations</li>
            <li>Send out our crew of lighting technicians on your schedule to ensure your venue shines</li>
            <li>Take down everything and restore the site so it looks like we were never there</li>
          </ul>
          <hr />

          {/*           <h3>Patio and Landscape Lighting</h3>

          <p>Sierra Christmas Lights can help make your home or business look amazing for the summer season. We offer a variety of lighting options including:</p>
          <ul>
            <li>Cafe lights</li>
            <li>Rope lights</li>
            <li>Up lighting on landscaping and buildings</li>
            <li>Trunk wraps</li>
            <li>Path and driveway illumination</li>
            <li>Have something particular in mind? Just ask!</li>
          </ul> */}

          <h3 className="crest">Bringing the shine</h3>
          <h2 className="ridge mixta">Lighting Styles</h2>

          <div className="deck">
            <StaticQuery
              query={query}
              render={data => (
                <>
                  {
                    data.allStrapiLight.nodes.map(light => (
                      <div key={light.id} className="card">
                        <NorthTahoeEvents />
                        <div className="paper"></div>
                        <div className="content">
                          <hr />
                          <h3 className="crest">{light.byline}</h3>
                          <h2 className="mixta"><Link to={`/light/${light.slug}`}>{light.name}</Link></h2>
                          <p className="description">{light.description}</p>
                          <p>{light.outdoor}</p>
                        </div>

                      </div>
                    ))
                  }
                </>
              )}
            />
          </div>

          <p>Have something particular in mind? Just ask!</p>

          <hr />

          <h3>Wedding Services</h3>
          <p>The natural beauty of the Reno Tahoe area make the perfect backdrop for a wedding. Our custom lighting design enhances your decor and the architectural / landscape features of your venue. Wether your aiming for a low key affair or a luxurious event, we work with you to create the perfect mood.</p>

          <p>Check out our list of wedding lighting services and some of our favorite Tahoe wedding venues.</p>

          <hr />

          <h3>Have you ever noticed how much lighting can affect the feeling of space?</h3>

          <p>Compare the warm glow of candle light to the blue glare of a fluorescent office and it's clear lighting has a big impact.  A professional lighting design package will highlight your decor and bring out the beauty of your venue.  Well planned lighting is one of the most affordable ways to truly make your special day shine.</p>

          <p>Your venue, decor, flowers, cake and photographer are all big investments. Make the most of them with the right lighting design and these elements will shine even brighter.</p>

          <p>Sierra Christmas Lights approaches every event from a photographic standpoint. Your pictures last forever and we want to be certain they look their best. We communicate with your event designer, planner, florist, photographer, and videographer ahead of your wedding. Once we understand the focal points of an event, we can create a lighting scheme that will best accentuate those details.  We look at the big picture of an event.  When the photographer takes a picture across the room of the couple dancing, they should be lit, along with the centerpieces, the band, and the wall in the back, to highlight all the important focal points of your event.</p>

          <p>We exclusively use modern LED technology, wireless and battery powered where possible.  With wireless LEDs, we are eliminating fire risks from traditional technology, reducing tripping hazards and clutter in your photos.  We use modern RGB technology to create the perfect lighting effects to highlight your decor and create the ideal mood for your big day.  For example, ambers / warm whites add a flattering and romantic glow while deep purple / blue can amp up guests for the dance party portion of the night. You can choose a unified color scheme, select a palette of complimentary colors or even plan changes throughout your event.</p>
        </div>
      </main>

      <div className="measure">
        <hr />
        <h3 className="crest">What have we done</h3>
        <h2 className="ridge mixta">Projects</h2>

      </div>

      <div className="deck measure">

        <StaticQuery
          query={query}
          render={data => (
            <>
              {
                data.allStrapiProject.nodes.map(project => (
                  <div key={project.id} className="card">
                    <NorthTahoeEvents />
                    <div className="paper"></div>
                    <div className="content">
                      <hr />
                      {/* <h3 className="crest">{light.byline}</h3> */}
                      <h2 className="mixta">
                        <Link to={`/light/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h2>
                      <p className="description">
                        {project.description.data.description}
                      </p>
                    </div>

                  </div>
                ))
              }
            </>
          )}
        />
      </div>

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
      byline
      description
      slug
      outdoor
    }
  }

  allStrapiProject(filter: {service: {eq: "wedding"}}) {
    nodes {
      title
      description {
        data {
          description
        }
      }
      slug
    }
  }
}
`