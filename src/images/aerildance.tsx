import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiAerilDance } from "../hooks/use-strapi-aerildance";

const AerilDance = () => {

  const { title, image } = useStrapiAerilDance()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default AerilDance;