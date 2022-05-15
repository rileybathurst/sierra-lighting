import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const WorkPage = () => {
  return (
    <>
      {/* // TODO description and info */}
      <Seo
        title="Work | Sierra Lighting"
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/work-og-sierra_lighting.jpg"
      // TODO I have a new image for this
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
            <span itemProp="name">Work</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main className="measure">
        {/* // TODO hero image */}
        <h1>Jobs</h1>
        <p>We want to hire people.</p>

        <hr />

        <div itemScope itemType="https://schema.org/JobPosting">
          <h2 itemProp="title">Lights Installer</h2>
          <p><strong>Location: </strong>
            <span itemProp="jobLocation" itemScope itemType="https://schema.org/Place">
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">Truckee</span><span itemProp="addressRegion">CA</span>
              </span>
            </span>
          </p>
          {/* }
          <p>
            <strong>Industry:</strong> <span itemProp="industry">Lighting</span>
            <br /><strong>Hours:</strong> <span itemProp="employmentType">Full-time</span>, <span itemProp="workHours">40 hours per week</span>
            <br /><strong>Salary:</strong> <span itemProp="salaryCurrency">USD</span> <span itemProp="baseSalary">8000</span>
          </p>

          <p itemProp="description">
            <strong>Description:</strong> <span itemProp="hiringOrganization" itemScope itemType="https://schema.org/Organization">
              <span itemProp="name" className="sr-only">Sierra Lighting </span>
              seeks a full-time mid-level software engineer to develop in-house tools.</span>
          </p>

          <p><strong>Responsibilities:</strong></p>
          <ul itemProp="responsibilities">
            <li>Design and write specifications for tools for in-house customers</li>
            <li>Build tools according to specifications</li>
          </ul>

          <p><strong>Experience requirements:</strong></p>
          <ul itemProp="experienceRequirements">
            <li>Minumum 3 years experience as a software engineer</li>
          </ul>

          <p><strong>Desired Skills:</strong></p>
          <ul itemProp="skills">
            <li>Web application development using Java/J2EE</li>
            <li>Web application development using Python or familiarity with dynamic programming languages</li>
          </ul>

          <p><strong>Benefits:</strong></p>
          <ul><li>ABC Corp provides top-tier employee compensation benefits and a relaxed, team-oriented work environment, including:<span itemprop="jobBenefits"> Medical, Life, Dental</span></li>
          </ul>

          <p><strong>Incentives:</strong></p>
          <ul><li><span itemProp="incentiveCompensation">Performance-based annual bonus plan, project-completion bonuses</span></li>
          </ul>

          <p>If interested in this position, please email us your resume, along with salary requirements and a cover letter to Jobs@abc.123.</p>
          <p>Date Posted: <span itemProp="datePosted">2022-4-13</span></p>
  */}
        </div>
      </main>

      <Footer />

    </>
  )
}

export default WorkPage
