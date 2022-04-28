import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import CommercialProjects from "../components/commercial-projects";

export function NorthTahoeEvents() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/North_Tahoe_Events-4-web-tagged.jpg"
    alt="christmas lighting display at North Tahoe Events center"
    className="northtahoeevents"
    breakpoints={[300, 600, 900]}
    width={300}
  />
}

export function InclineChevron() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Incline-7-web-tagged.jpg"
    alt="christmas tree in Incline village nevada"
    className="inclinechevron"
    breakpoints={[300, 600, 900]}
    width={300}
  />
}

export function SnowyRoof() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Lakeshore_View-3-web-tagged.jpg"
    alt="christmas lights display on an entrance with a snowy roof in Incline village nevada"
    className="snowyroof"
    breakpoints={[300, 600, 900]}
    width={300}
  />
}

const CommercialPage = () => {
  return (
    <>

      <Seo
        title="Commercial Christmas Lights &amp; Decor"
        description="We have LED lights, wreaths, garland, and decor to make your business shine.
        Sierra Lighting is your dependable decorating partner."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/commercial-og-sierra_lighting.jpg"
      />
      <Header />

      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Commercial Christmas Lights &amp; Decor</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main>

        <div className="measure">

          <h2 className="crest">Christmas Lights For Business:</h2>
          <h1 className="range">Commercial Christmas Lights &amp; Decor</h1>

          <p>Allow us to help your business spread holiday cheer this season. There is a strong sense of goodwill and community during Christmas, and our lighting displays can help enhance those feelings. For many businesses in Reno, Truckee, and Tahoe, Christmastime is THE most important period of the year. An investment in a beautiful lighting display will help your business stand out from the rest and enhance your bottom line during this busy season for years to come. We can install lights on shopping centers, office buildings, restaurants, municipal buildings, medical facilities, HOA's, schools, car dealerships, and casinos. We also do commercial accent lighting year round. Please check out our patio lights page for more information.</p>
        </div>
        <div className="triple">
          <NorthTahoeEvents />
          <InclineChevron />
          <SnowyRoof />
        </div>

        <div className="measure">
          <hr />
          {/* TODO after here is sort of the same as commercial */}
          <h2>Display Consulting and Planning</h2>

          <p>We strive to accommodate customers at any point in the season. After the initial communication, Sierra Lighting will send one of our designers to your site. Our goal is to learn about your vision, budget, and preferences. Our professional lighting designer will provide you with a clear plan for your project with a comprehensive budget, renderings, examples of similar past work, and options to fit your tastes. We have a host of LED lighting options, wreaths, garlands, indoor and exterior decor, trees, and snowflakes to make your business shine. When you hire Sierra Lighting, you get a dependable partner so you can focus on your business. We take care of the rest!</p>
          <hr />
          <h3>Christmas Light Install</h3>

          <p>Our goal is to make certain your property shines for that holiday party, concert, sale, or event. Please specify the date you would like install finished and we will do our absolute best to make it happen. We send out a crew of highly experienced technicians to complete installation at the time that works for you. We will create an elegant holiday display that woos your customers, increases traffic and visibility to your locale, and enhances your profits.</p>
          <hr />
          <h2>Full Season Maintenance and Support</h2>

          <p>Christmas is such a busy time of year for any business owner.  Take holiday lighting off your to do list today by hiring the team at Sierra Lighting. We source the highest quality LED lights and displays, and exclusively use custom commercial grade materials to ensure the reliability and beauty of your display. Should there be an issue, we are just a call, text, or email away. Timely fixes are our priority. We have service teams on call located in both Truckee / Tahoe and Reno to ensure prompt service if something goes wrong.</p>

          <hr />
          <h3 className="crest">Bringing the shine</h3>
          <h2 className="ridge mixta">Lighting Styles</h2>
        </div>

        <div className="deck">
          <StaticQuery
            query={query}
            render={data => (
              <>
                {
                  data.allStrapiLight.nodes.map(light => (
                    <div key={light.id} className="card">
                      <GatsbyImage
                        image={
                          light?.image?.localFile?.childImageSharp
                            ?.gatsbyImageData
                        }
                        alt={light.image?.alternativeText}
                        className=""
                      />
                      <div className="paper"></div>
                      <div className="content">
                        <hr />
                        <h3 className="crest">{light.byline}</h3>
                        <h2 className="mixta"><Link to={`/light/${light.slug}`}>{light.name}</Link></h2>
                        <p className="description">{light.excerpt}</p>
                        <p>{light.outdoor}</p>
                      </div>

                    </div>
                  ))
                }
              </>
            )}
          />
        </div>

        <div className="measure">
          <p className="crest">Even More?</p>
          <h5 className="range"><Link to="/lights">View all other lights</Link></h5>
        </div>

        <div className="measure">
          <hr />
          <h2>Worry Free Takedown and Storage</h2>

          <p>After the holidays are over, we remove your display during the first two weeks of January. Our goal is to work around your customers&rsquo; needs and integrate seamlessly into your business, creating the minimum presence possible. Allow us to store your holiday display until next season in our secure facility. We&rsquo;d like to minimize the chance your display gets damaged or lost by ensuring proper storage for the remainder of the year. We&rsquo;ll be in touch next fall for another beautiful, worry free, profitable Christmas season.</p>
        </div>
      </main>

      <CommercialProjects />

      <Footer />

    </>
  )
}

export default CommercialPage

const query = graphql`
query CommercialLightQuery {
  allStrapiLight(limit: 3, filter: {commercialchristmas: {eq: true}}) {
    nodes {
      id
      name
      byline
      excerpt
      slug
      outdoor

      image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              breakpoints: [111, 165, 222, 444, 880]
              width: 222
            )
          }
        }
        alternativeText
      }
    }
  }
}
`