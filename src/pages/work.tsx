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
  description: {
    data: {
      description: string
    }
  }
}

const WorkPage = () => {

  const { strapiImageGrab } = useStaticQuery(graphql`
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
          image={strapiImageGrab.image.localFile.childImageSharp.gatsbyImageData}
          alt={strapiImageGrab.title}
        />
      </div>

      <main className="stork">

        <h2 className="crest">Hiring Now</h2>
        <h1 className="range">Jobs</h1>
        <hr />

        {useStrapiJob().nodes.map((job: JobTypes) => (
          <div key={job.id}>
            <h2 itemProp="title">{job.title}</h2>
            <h3>Updated: {job.updatedAt}</h3>
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
  return (
    <SEO
      title='Work'
      // TODO description and info
      // TODO I have a new image for this
      image="https://sierralighting.s3.us-west-1.amazonaws.com/sierra_lighting-work--og_imge.jpg"
      url="work"
    >
      <Script type="application/ld+json">
        {`
          {
            ${useStrapiJob().nodes.map((job: JobTypes) => (`
            "@context": "https://schema.org",
            "@type": "JobPosting",
              "title": "${job.title}",
              "datePosted": "${job.updatedAt}",
              "description": "${job.description.data.description.split('\n').join(' ')}"
              }
          `)).join(',')}
        `}
      </Script>
    </SEO>
  )
}

/* // TODO: schema.org/JobPosting
                "baseSalary": "9000",
                                "jobBenefits": "Medical, Life, Dental",
"educationRequirements": "Bachelor's Degree in Computer Science, Information Systems or related fields of study.",
"employmentType": "Full-time",
"experienceRequirements": "Minumum 3 years experience as a software engineer",
"incentiveCompensation": "Performance-based annual bonus plan, project-completion bonuses",
"industry": "Computer Software",
"jobLocation": {
  "@type": "Place",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kirkland",
    "addressRegion": "WA"
  }
},
"occupationalCategory": "15-1132.00 Software Developers, Application",
"qualifications": "Ability to work in a team environment with members of varying skill levels. Highly motivated. Learns quickly.",
"responsibilities": "Design and write specifications for tools for in-house customers Build tools according to specifications",
"salaryCurrency": "USD",
"skills": "Web application development using Java/J2EE Web application development using Python or familiarity with dynamic programming languages",
"specialCommitments": "VeteranCommit",
"title": "Software Engineer",
"workHours": "40 hours per week" */