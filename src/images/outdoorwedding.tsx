import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiOutdoorWedding } from "../hooks/use-strapi-outdoorwedding";

const OutdoorWedding = () => {

  const { title, image } = useStrapiOutdoorWedding()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default OutdoorWedding;