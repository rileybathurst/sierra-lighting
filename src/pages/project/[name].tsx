import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/card";

// types
import type { CatchAllTypes } from "../../types/catch-all-types";
import type { CardType } from "../../types/card-type";
import SEO from "../../components/seo";

function ProjectCatchAll({ params }: CatchAllTypes) {

  const { allStrapiProject } = useStaticQuery(graphql`
    query {
      allStrapiProject(limit: 3) {
        nodes {
          ...projectCard
        }
      }
    }
  `)

  return (
    <>
      <Header />

      <main className="stork">
        <h2 className="crest">404 - Project - {params.name}</h2>
        <h1 className="mixta">Oops! Looks like this page has left the party.</h1>
        <p>Want to brighten up?<br />
          <Link to="/">Head to our home page.</Link>
        </p>
      </main>

      <div className="deck">
        {allStrapiProject.nodes.map((project: CardType) => (
          <Card
            key={project.id}
            {...project}
            breadcrumb="project"
          />
        ))}
      </div>

      <hr className="stork" />

      <Breadcrumbs>
        <Breadcrumb><Link to="/project/">Project</Link></Breadcrumb>
        <Breadcrumb>{params.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  )
}

export default ProjectCatchAll

export const Head = ({ params }: CatchAllTypes) => {
  return (
    <SEO
      title={`404 - project / ${params.name}`}
    />
  )
}