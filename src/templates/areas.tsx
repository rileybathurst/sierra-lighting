import React from 'react';
import { graphql, Link } from 'gatsby'

import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";

import IfHero from "../components/ifHero";
import StateAbbreviation from "../components/state-abbreviation";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

function Venues(props) {
  const name = props.name;
  if (props.yes.length !== 0) {
    return (
      <div className="measure">
        <hr />
        <h3>Wedding Venues in {name}</h3>
      </div>
    );
  } else {
    return null
  }
}

const AreasTemplate = ({ data }) => {


  return (
    <>
      <Header />

      <div className="measure">
        <ol className="breadcrumbs">
          <li>
            <Link to="/areas">
              <span>Areas</span></Link>&nbsp;/&nbsp;
          </li>
          <li>
            {data.strapiArea.name}
          </li>
        </ol>
        <hr />
      </div>

      <main>
        <IfHero hero={data.strapiArea?.image} />

        <article className="measure single" itemProp="address">
          <div itemProp="location" itemScope itemType="https://schema.org/areaServed">
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="name" className="sr-only">{data.strapiArea.name}</span>
              {/* // ! this is for the address / postaladdress / name / except its not working and its taking the description */}

              <h2 className="crest">{data.strapiArea.tagline}</h2>
              <h1 className="range" >
                <span itemProp="addressLocality">{data.strapiArea.name}</span>,&nbsp;
                <span itemProp="addressRegion" className="first-capital">< StateAbbreviation state={data.strapiArea.state} /></span>
              </h1>
              <ReactMarkdown
                children={data.strapiArea?.description?.data?.description}
                remarkPlugins={[remarkGfm]}
              />

            </div>
          </div>
        </article>
      </main>


      <Venues yes={data.strapiArea.venues} name={data.strapiArea.name} />

      {/* // TODO this could all be behing the venues if statement */}
      <div className="deck">
        {data.strapiArea?.venues.map((venue: CardType) => (
          <section key={venue.id}>
            <Card
              card={venue}
              breadcrumb='venue'
            />
          </section>
        ))}
      </div>

      {/* // TODO if no venues show other places */}

      <Footer />

    </>
  );
};

export default AreasTemplate;

export const query = graphql`
  query AreasTemplate(
    $slug: String!
  ) {
    strapiArea(slug: {eq: $slug}) {
      id
      name
      tagline

      description {
        data {
          description
        }
      }
      
      state
      slug

      image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              breakpoints: [960, 1840]
                width: 960
            )
          }
          url
        }
        alternativeText
      }

      venues {
        id
        name
        slug
        excerpt

        venueImage {
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

export const Head = ({ data }) => {
  return (
    <SEO
    /* title={`${data.strapiVendor.name} | ${useSiteMetadata().title}`}
    description={data.strapiVendor.excerpt}
    url={`vendor/${data.strapiVendor.slug}`}
    image={data.strapiVendor?.profile?.localFile?.url} */
    />
  )
}
