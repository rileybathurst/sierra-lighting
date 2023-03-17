import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiInclineChevron } from "../hooks/use-strapi-inclinechevron";

const InclineChevron = () => {

  const { title, image } = useStrapiInclineChevron()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default InclineChevron;