// TODO: I over simplified this query to holiday wedding /there isnt a specific for patio and social event isnt labeled add a secondary for them
// TODO: I can variable more of this

import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SEO } from "../components/seo";
import Season from '../components/season';
import Header from "../components/header";
import Footer from "../components/footer";
import ReactMarkdown from "react-markdown";

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

  // console.log(data);

  const holidayProcesses = data.holiday.nodes;
  const weddingProcesses = data.wedding.nodes;

  type processTypes = {
    id: React.Key;
    name: string;
    markdown: {
      data: {
        markdown: string;
      }
    }
  }

  function ProcessLoop({ id, name, markdown }: processTypes) {

    return (
      <li key={id}>
        <h3>{name}</h3>
        <div className='react-markdown'>
          <ReactMarkdown>
            {markdown.data.markdown}
          </ReactMarkdown>
        </div>
      </li>
    )
  }

  // TODO: needs the adjective component
  // const ready = 'Ready to bring your vision to life ? Get started with a free estimate today and let us illuminate your wedding or event with an unforgettable lighting display!';

  function ProcessList({ processes }: { processes: string }) {

    if (processes === 'weddingProcesses') {
      return (
        <>
          <p>Ready to bring your vision to life ? Get started with a free estimate today and let us illuminate your wedding or event with an unforgettable lighting display!</p>
          <hr />
          <ol>
            {weddingProcesses.map((process: processTypes) => (
              <ProcessLoop
                key={process.id}
                {...process}
              />
            ))}
          </ol>
        </>
      )
    }

    return (
      <>
        <p>Ready to bring your vision to life ? Get started with a free estimate today and let us illuminate your home or business with an unforgettable lighting display!</p>
        <hr />
        <ol>
          {holidayProcesses.map((process: processTypes) => (
            <ProcessLoop
              key={process.id}
              {...process}
            />
          ))}
        </ol >
      </>
    )

  }
  const [seasonRadio, setSeasonRadio] = useState(Season());
  const [seasonProcesses, setSeasonProcesses] = useState(`${Season()}Processes`);

  function seasonSwitcher(e) {
    setSeasonRadio(e.target.value);
    setSeasonProcesses(`${e.target.value}Processes`);
    return null;
  }

  const xmas = 'Christmas or Holiday lights installation';
  const wedding = 'Wedding, Commercial or Social Event lights installation';

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
            {wedding}
          </label>
          <label>
            <input
              type="radio"
              name="season"
              value="holiday"
              onChange={seasonSwitcher}
            />
            {xmas}
          </label>
        </>
      )
    }

    return (
      <>
        <label>
          <input
            type="radio"
            name="season"
            value="wedding"
            onChange={seasonSwitcher}
          />
          {wedding}
        </label>
        <label className="current">
          <input
            type="radio"
            name="season"
            value="holiday"
            onChange={seasonSwitcher}
            checked
          />
          {xmas}
        </label>
      </>
    )

  }

  return (
    <>
      <Header />

      <main className="stork">
        <h1 className='denali'>Our Process for professional lighting installation</h1>

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
      title='Our process for professional wedding or christmas lights installation'
      // TODO: needs a new description now
      description="Learn how Sierra Lighting can help you create memorable lighting with our design process."
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/services-og-sierra_lighting.jpg"
    />
  )
}
