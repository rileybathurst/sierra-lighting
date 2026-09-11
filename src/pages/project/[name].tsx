import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/card";

import type { CatchAllTypes } from "../../types/catch-all-types";
import type { CardType } from "../../types/card-type";
import { SEO } from "../../components/seo";

function ProjectCatchAll({ params }: CatchAllTypes) {

  const { allStrapiProject, strapiError } = useStaticQuery(graphql`
    query {
      allStrapiProject(limit: 3) {
        nodes {
          ...projectCard
        }
      }
      strapiError {
        ...errorFragment
      }
    }
  `)

  return (
    <>
      <Header />

      <main className="above-deck">
        <h2 className="crest">404 - Project - {params.name}</h2>
        <h1>{strapiError.title}</h1>
        <p>{strapiError.pun} - <Link to="/">{strapiError.return}</Link></p>
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

      <hr />

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