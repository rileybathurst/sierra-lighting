import * as React from "react"
import { Link } from 'gatsby';

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Work from "../images/work";

const WorkPage = () => {
  return (
    <>
      {/* // TODO description and info */}
      <Seo
        title="Work | Sierra Lighting"
        image="https://sierralighting.s3.us-west-1.amazonaws.com/sierra_lighting-work--og_imge.jpg"
      // TODO I have a new image for this
      />

      <Header />

      <Work />
      <main className="measure">

        <h2 className="crest">Hiring Now</h2>
        <h1 className="range">Jobs</h1>
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

          {/* // TODO SEO */}
          <ul>
            <li key="earn">Earn $9,000 - $13,000 in ten weeks work</li>
            <li key="bonus">Hourly + bonus incentive program</li>
            <li key="trade">Learn a new trade, work outside</li>
            <li key="heights">have fun at heights with a great team</li>
            <li key="housing">Housing / vehicle dwelling possible</li >
          </ul >

          <p>Locally owned and operated in Truckee, Tahoe and Reno. We are in need of reliable, hardworking employees to install wedding and Christmas lights.</p>
          <p>Full time Oct - Jan with holidays off. Can start earlier if desired.</p>

          <h3>↓ Contact us below ↓</h3>

          {/* // TODO where is this going? Ive asked in Asana */}
          {/* <p>Email: SierraChristmasLights@gmail.com with a resume and any questions to set up an interview.</p> */}
          {/* <p>Fill in the form below with any questions</p> */}
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
      </main >

      <Footer />

    </>
  )
}

export default WorkPage
