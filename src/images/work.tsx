import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiWork } from "../hooks/use-strapi-work";

const Work = () => {

  const { title, image } = useStrapiWork()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
      className="poster"
    />
  );
};

export default Work;