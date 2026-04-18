import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Season from "./season";
import type { SuiteType } from "../types/suite-type";

const Suite = ({ services }: SuiteType) => {

  // console.log(services);

  return (
    <div className={`suite ${Season()}`}>
      {services.map((service) => (
        <Link
          key={service.id}
          to={`/${service.slug}`}
          className={`poster ${service.slug}`}
        >
          {/* // ! wrong place this is for areas */}
          {/* {Season() === "wedding" ? (
            <GatsbyImage image={service.weddingImage.localFile.childImageSharp.gatsbyImageData}
              alt={service.weddingImage.alternativeText || service.name
              }
            />
          ) : ( */}
          <GatsbyImage image={service.hero_light.localFile.childImageSharp.gatsbyImageData}
            alt={service.hero_light.alternativeText || service.name}
          />
          {/* )} */}
          <span>{service.name} Lighting</span>
        </Link>
      ))}
    </div>
  )
}

// TODO: this has a hero dark on fragment I'm just not using it
export default Suite
