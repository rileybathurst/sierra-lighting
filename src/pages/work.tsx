import * as React from "react"
import { graphql, Script } from "gatsby"
import { SEO } from "../components/seo";
import ReactMarkdown from "react-markdown";

import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import type { ImageWithAspectType } from "../types/image-with-aspect-type";
import type { SocialTypes } from "../types/social-types";
import Socials from "../components/socials";

type JobTypes = {
  id: string
  title: string
  updatedAt: string
  validThrough: string
  employmentType: string
  description: {
    data: {
      description: string
    }
  }
  areas: {
    name: string
    slug: string
    state: string
    postalCode: string
  }[]
}

type WorkPageTypes = {
  data: {
    allStrapiJob: {
      nodes: JobTypes[]
    }
    strapiAbout: {
      businessName: string
      addressLocality: string
      addressRegion: string
      postalCode: string
      social: SocialTypes[]
    }
    strapiWork: {
      excerpt: string
      hero: ImageWithAspectType;
      sites: {
        id: string
      }[]
    }
  }
}

const WorkPage = ({ data }: WorkPageTypes) => {
  const workSiteIds = new Set(data.strapiWork.sites.map((site) => site.id));

  return (
    <>
      <Header />

      <Hero
        image={data.strapiWork.hero}
      />

      <main className="stork">


        <h1>{data.strapiAbout.businessName} is Hiring Now</h1>
        <p>{data.strapiWork.excerpt}</p>

        <h4>Connect with us</h4>
        <Socials
          services={data.strapiAbout.social.filter(
            (social) => workSiteIds.has(String(social.site.id))
          )}
        />
        <hr />

        {data.allStrapiJob.nodes.length > 1 && (
          <React.Fragment>
            <h2>Jobs</h2>
            <hr />
          </React.Fragment>
        )}
        {data.allStrapiJob.nodes.map((job: JobTypes) => (
          <div key={job.id}>
            <h3 itemProp="title">{job.title}</h3>

            {/* // ! tone down the h3 */}
            <ReactMarkdown>{job.description.data.description}</ReactMarkdown>
          </div>
        ))}
        <h3>↓ Contact us below ↓</h3>
      </main >

      <Footer />

    </>
  )
}

export default WorkPage

// https://schema.org/JobPosting
export const Head = ({ data }: WorkPageTypes) => {

  return (
    <SEO
      title={`Work for ${data.strapiAbout.businessName}`}
      description={`Explore current job openings at ${data.strapiAbout.businessName} in ${data.strapiAbout.addressLocality}, ${data.strapiAbout.addressRegion}. ${data.strapiWork.excerpt}`}
      image="https://sierralighting.s3.us-west-1.amazonaws.com/sierra_lighting-work--og_imge.jpg"
    >

      {data.allStrapiJob.nodes.map((job: JobTypes) => (
        <Script
          type="application/ld+json"
          key={job.id}
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": "${job.title}",
              "datePosted": "${job.updatedAt}",
              "employmentType": "${job.employmentType}",
              "description": "${job.description.data.description.split('\n').join(' ')}",
              "validThrough": "${new Date(job.validThrough).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', })}",
              "jobLocation": [
                ${job.areas.map((area) => `
                  {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "${area.name}",
                      "addressRegion": "${area.state}",
                      "postalCode": "${area.postalCode}",
                      "addressCountry": "USA"
                    }
                  }
                `).join(',')}
              ],
              "hiringOrganization": {
                "@type": "Organization",
                "name": "${data.strapiAbout.businessName}"
              }
            }
        `}
        </Script>
      ))}

    </SEO>
  )
}


export const data = graphql`
  query workQuery {

    allStrapiJob {
      nodes {
        id
        title
        updatedAt
        description {
          data {
            description
          }
        }
        employmentType
        validThrough
        
        areas {
          name
          slug
          state
          postalCode
        }
      }
    }

    strapiAbout {
      businessName
      addressLocality
      addressRegion
      postalCode

      social {
        id
        username
        featured
        order

        site {
          id
          service
          link
          icon
        }
      }
    }

    strapiWork {
      excerpt
      hero {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        alternativeText
      }
      sites {
        id
      }
    }

  }
`