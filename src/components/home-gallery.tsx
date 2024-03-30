import * as React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

// HomeGallery images
/* import Backyard from "../images/backyard";
import WestShoreWedding from "../images/WestShoreWedding";
import BistroLights from "../images/bistro-lights";
import NorthTahoeArts from "../images/northtahoearts";
import NorthTahoeEvents from "../images/northtahoeevents";
import InclineChevron from "../images/inclinechevron";
 */
const HomeGallery = () => {

  const data = useStaticQuery(graphql`
    query HomeGalleryQuery {
      strapiSeason {
        wedding
      }
    
      wedding: strapiService(slug: {eq: "wedding"}) {
        ...homeGalleryFragment
      }

      patio: strapiService(slug: {eq: "patio"}) {
        ...homeGalleryFragment
      }

      socialEvents: strapiService(slug: {eq: "social-events"}) {
        ...homeGalleryFragment
      }

      commercialEvents: strapiService(slug: {eq: "commercial-events"}) {
        ...homeGalleryFragment
      }

      residential: strapiService(slug: {eq: "residential"}) {
        ...homeGalleryFragment
      }

      commercial: strapiService(slug: {eq: "commercial"}) {
        ...homeGalleryFragment
      }
    }
  `)

  // TODO: Im not using commercial events right now but
  // do something with social events
  let WedddingSeason = [
    data.wedding,
    data.patio,
    data.socialEvents,
  ]

  let ChristmasSeason = [
    data.residential,
    data.commercial,
    data.wedding
  ]

  console.log(WedddingSeason.map((service) => service))

  return (
    <div className="home-gallery">
      {data.strapiSeason.wedding === true ? (
        WedddingSeason.map((service) => (
          <Link to={`/${service.slug}`} key={service.id} className='poster'>
            <GatsbyImage image={service.hero_light.localFile.childImageSharp.gatsbyImageData} alt={service.hero_light.alternativeText} />
            <span>{service.name}</span>
          </Link>
        ))
      ) : (
        ChristmasSeason.map((service) => (
          <Link to={`/${service.slug}`} key={service.id} className='poster'>
            <GatsbyImage image={service.hero_light.localFile.childImageSharp.gatsbyImageData} alt={service.hero_light.alternativeText} />
            <span>{service.name}</span>
          </Link>
        ))
      )}
    </div >
  );
}

export default HomeGallery
