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

        <h2 className="crest">{useStrapiJob().strapiAbout.businessName} is Hiring Now</h2>
        <h1 className="range">Jobs</h1>
        <hr />

        {useStrapiJob().allStrapiJob.nodes.map((job: JobTypes) => (
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

// TODO: https://schema.org/JobPosting
export const Head = () => {

  // how can it be linked to the job?

  // TODO: add areas maybe in a map but maps are hard to debug

  return (
    <SEO
      title={`Work for ${useStrapiJob().strapiAbout.businessName}`}
      // TODO description and info
      // TODO I have a new image for this
      image="https://sierralighting.s3.us-west-1.amazonaws.com/sierra_lighting-work--og_imge.jpg"
    >
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "${useStrapiJob().allStrapiJob.nodes[0].title}",
            "datePosted": "${useStrapiJob().allStrapiJob.nodes[0].updatedAt}",
            "employmentType": "${useStrapiJob().allStrapiJob.nodes[0].employmentType}",
            "description": "${useStrapiJob().allStrapiJob.nodes[0].description.data.description.split('\n').join(' ')}",
            "validThrough": "${new Date(useStrapiJob().allStrapiJob.nodes[0].validThrough).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', })}",
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "${useStrapiJob().strapiAbout.addressLocality}",
                "addressRegion": "${useStrapiJob().strapiAbout.addressRegion}",
                "postalCode": "${useStrapiJob().strapiAbout.postalCode}",
                "addressCountry": "USA"
              }
            },
            "hiringOrganization": {
              "@type": "Organization",
              "name": "${useStrapiJob().strapiAbout.businessName}"
            }
          }
        `}
      </Script>
    </SEO>
  )
}
