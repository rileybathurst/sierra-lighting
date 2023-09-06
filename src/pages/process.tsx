import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const ProcessPage = () => {

  const { allStrapiProcess } = useStaticQuery(graphql`
    query ProcessQuery {
      allStrapiProcess(sort: {order: ASC}){
        nodes {
          ...process
        }
      }
    }
  `)


  return (
    <>
      <Seo
        title="Process | Sierra Lighting"
        // TODO: probably needs a new description now
        description="A professional lighting design package will highlight your decor and bring out the beauty of your venue.  Learn about the many design options Sierra Lighting can use to make your Reno Tahoe wedding really shine."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/services-og-sierra_lighting.jpg"
      />
      <Header />

      {/* // TODO: theres a way to do this with a drop down for what you are working on */}
      <main className="measure">
        <h2>Our Process</h2>
        {/* // TODO: this is probably a component */}
        <ol>
          {allStrapiProcess.nodes.map((process: {
            id: React.Key;
            name: string;
            markdown: { data: { markdown: string } };
          }) => (
            <li key={process.id}>
              <span className="ol-title">{process.name}</span>
              {/* // TODO: this needs markdown processing, its fine now as theres no links etc */}
              <span>{process.markdown.data.markdown}</span>
            </li>
          ))}
        </ol>
      </main >

      <Footer />

    </>
  )
}

export default ProcessPage
