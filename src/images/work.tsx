import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiWork } from "../hooks/use-strapi-work";

const Work = () => {

  const { title, image } = useStrapiWork()

  return (
    <div className="poster">
      <GatsbyImage
        image={image?.localFile?.childImageSharp?.gatsbyImageData}
        alt={title}
      />
    </div>
  );
};

export default Work;