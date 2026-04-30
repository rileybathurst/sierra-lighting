import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Season from "./season";
import type { SuiteType } from "../types/suite-type";

const Suite = ({ services }: SuiteType) => {

  // console.log(services);
  // TODOL this needs to a grid 5 objects looks weird

  return (
    <div className={`suite ${Season()}`}>
      {services.map((service) => (
        <Link
          key={service.id}
          to={`/${service.slug}`}
          className={`poster ${service.slug}`}
        >
          <GatsbyImage image={service.hero_light.localFile.childImageSharp.gatsbyImageData}
            alt={service.hero_light.alternativeText || service.name}
          />
          <span>{service.name} Lighting</span>
        </Link>
      ))}
    </div>
  )
}

// TODO: this has a hero dark on fragment I'm just not using it
export default Suite
