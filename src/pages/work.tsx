import * as React from "react"
import { useStaticQuery, graphql, Script } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { SEO } from "../components/seo";
import ReactMarkdown from "react-markdown";

import Header from "../components/header";
import Footer from "../components/footer";
import { useStrapiJob } from "../hooks/use-strapi-job";

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

const WorkPage = () => {

  const data = useStaticQuery(graphql`
    query strapiImageGrabWork {

      strapiImageGrab(title: {eq: "Work"}) {
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }

    }
  `)

  const jobData = useStrapiJob()

  return (
    <>
      <Header />

      <div className="poster">
        <GatsbyImage
          image={data.strapiImageGrab.image.localFile.childImageSharp.gatsbyImageData}
          alt={data.strapiImageGrab.title}
        />
      </div>

      <main className="stork">

        <h2 className="crest">{jobData.strapiAbout.businessName} is Hiring Now</h2>
        <h1 className="range">Jobs</h1>
        <hr />

        {jobData.allStrapiJob.nodes.map((job: JobTypes) => (
          <div key={job.id}>
            <h2 itemProp="title">{job.title}</h2>
            <h3>
              {new Date(job.updatedAt).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </h3>
            <ReactMarkdown>{job.description.data.description}</ReactMarkdown>
            <h3>↓ Contact us below ↓</h3>
          </div>
        ))}
      </main >

      <Footer />

    </>
  )
}

export default WorkPage

// https://schema.org/JobPosting
export const Head = () => {
  const jobData = useStrapiJob()

  return (
    <SEO
      title={`Work for ${jobData.strapiAbout.businessName}`}
      // TODO description and info
      // TODO I have a new image for this
      image="https://sierralighting.s3.us-west-1.amazonaws.com/sierra_lighting-work--og_imge.jpg"
    >

      {jobData.allStrapiJob.nodes.map((job: JobTypes) => (
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
                "name": "${jobData.strapiAbout.businessName}"
              }
            }
        `}
        </Script>
      ))}

    </SEO>
  )
}
