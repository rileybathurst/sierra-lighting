import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiIndoorWedding } from "../hooks/use-strapi-indoorwedding";

const IndoorWedding = () => {

  const { title, image } = useStrapiIndoorWedding()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default IndoorWedding;