// * this page is really on seo for the offer catalog

import * as React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby';
import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const ServicesPage = () => {

  const { allStrapiService } = useStaticQuery(graphql`
  query ServiceQuery {
    allStrapiService {
      nodes {
        id
        name
        slug

        description {
          data {
            description
          }
        }

      }
    }
  }
`)

  return (
    <>
      <Seo
        title="Services | Sierra Lighting"
        description="A professional lighting design package will highlight your decor and bring out the beauty of your venue.  Learn about the many design options Sierra Lighting can use to make your Reno Tahoe wedding really shine."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/services-og-sierra_lighting.jpg"
      />
      <Header />

      <main className="measure">

        <h1>Services</h1>
        {allStrapiService.nodes.map((service) => (
          <div
            id={service.slug}
            key={service.id}
          >
            <hr />
            {/* // TODO: these dont have images yet */}
            <h2>
              <Link to={`/service/${service.slug}`}>
                {service.name}
              </Link>
            </h2>

            <p>
              {service.description.data.description}
            </p>
          </div>
        ))}

      </main>

      <Footer />

    </>
  )
}

export default ServicesPage
