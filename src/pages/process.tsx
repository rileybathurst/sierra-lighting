// TODO: I over simplified this query to holiday wedding /there isnt a specific for permanent and social event isnt labeled add a secondary for them
// TODO: I can variable more of this

import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";
import { useStrapiSeason } from "../hooks/use-strapi-season";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

// TODO: I had problems making this work I need to fix it
// import Adjective from '../components/adjective';

const ProcessPage = () => {

  const data = useStaticQuery(graphql`
    query ProcessQuery {
      holiday: allStrapiProcess(
        filter: {services: {elemMatch: {slug: {eq: "residential"}}}},
        sort: {order: ASC}
        ) {
        nodes {
          ...process
        }
      }
      
      wedding: allStrapiProcess(
        filter: {services: {elemMatch: {slug: {eq: "wedding"}}}},
        sort: {order: ASC}
        ) {
        nodes {
          ...process
        }
      }
    }
  `)

  let holidayProcesses = data.holiday.nodes;
  let weddingProcesses = data.wedding.nodes;

  function ProcessList({ processes }) {

    if (processes === 'weddingProcesses') {
      return (
        <>
          <p>Ready to bring your vision to life ? Get started with a free estimate today and let us illuminate your wedding or event with an unforgettable lighting display!</p>
          <hr />
          <ol>
            {weddingProcesses.map(process => (
              <li key={process.id}>
                <h3>{process.name}</h3>
                <ReactMarkdown
                  children={process.markdown.data.markdown}
                  remarkPlugins={[remarkGfm]}
                />
              </li>
            ))}
          </ol>
        </>
      )
    } else if (processes === 'holidayProcesses') {
      return (
        <>
          <p>Ready to bring your vision to life ? Get started with a free estimate today and let us illuminate your home or business with an unforgettable lighting display!</p>
          <hr />
          <ol>
            {holidayProcesses.map(process => (
              <li key={process.id}>
                <h3>{process.name}</h3>
                <ReactMarkdown
                  children={process.markdown.data.markdown}
                  remarkPlugins={[remarkGfm]}
                />
              </li>
            ))}
          </ol>
        </>
      )
    } else {
      return null;
    }
  }

  let seasonInterpreter = useStrapiSeason() ? 'wedding' : 'holiday';
  const [seasonRadio, setSeasonRadio] = useState(seasonInterpreter);
  const [seasonProcesses, setSeasonProcesses] = useState(seasonInterpreter + 'Processes');

  function seasonSwitcher(e) {
    setSeasonRadio(e.target.value);
    setSeasonProcesses(e.target.value + 'Processes');
    return null;
  }

  function FirstCheck({ checker }) {
    if (checker === 'wedding') {
      return (
        <>
          <label className="current">
            <input
              type="radio"
              name="season"
              value="wedding"
              onChange={seasonSwitcher}
              checked
            />
            <div>Wedding / <span>Social Event</span></div>
          </label>
          <label>
            <input
              type="radio"
              name="season"
              value="holiday"
              onChange={seasonSwitcher}
            />
            Holiday
          </label>
        </>
      )
    }

    if (checker === 'holiday') {
      return (
        <>
          <label>
            <input
              type="radio"
              name="season"
              value="wedding"
              onChange={seasonSwitcher}
            />
            <div>Wedding / <span>Commercial or Social Event</span></div>
          </label>
          <label className="current">
            <input
              type="radio"
              name="season"
              value="holiday"
              onChange={seasonSwitcher}
              checked
            />
            Holiday
          </label>
        </>
      )
    }

    return null;
  }

  return (
    <>
      <Header />

      <main className="stork">
        <h2>Our Process</h2>

        <form className='process-switch'>
          <FirstCheck checker={seasonRadio} />
        </form>

        <ProcessList processes={seasonProcesses} />
      </main >

      <Footer />

    </>
  )
}

export default ProcessPage

export const Head = () => {
  return (
    <SEO
      title={`Process | ${useSiteMetadata().title}`}
      // TODO: probably needs a new description now
      description="A professional lighting design package will highlight your decor and bring out the beauty of your venue. Learn about the many design options Sierra Lighting can use to make your Reno Tahoe wedding really shine."
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/services-og-sierra_lighting.jpg"
    />
  )
}
