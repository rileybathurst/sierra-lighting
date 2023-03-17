import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiRSL } from "../hooks/use-strapi-rsl";

const RSL = () => {

  const { title, image } = useStrapiRSL()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default RSL;