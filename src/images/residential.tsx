import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiResidential } from "../hooks/use-strapi-residential";

const Residential = () => {

  const { title, image } = useStrapiResidential()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default Residential;