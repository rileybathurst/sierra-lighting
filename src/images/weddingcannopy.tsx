import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiWeddingCannopy } from "../hooks/use-strapi-weddingcannopy";

const WeddingCannopy = () => {

  const { title, image } = useStrapiWeddingCannopy()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default WeddingCannopy;