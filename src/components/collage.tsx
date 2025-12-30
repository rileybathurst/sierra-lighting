import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Season from "../components/season";
import type { CollageType } from "../types/collage-type";

const Collage = ({ services }: CollageType) => {

    console.log(services);

    return (
        <div className={`collage ${Season()}`}>
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

export default Collage
