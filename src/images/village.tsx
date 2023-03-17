import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiVillage } from "../hooks/use-strapi-village";

const Village = () => {

  const { title, image } = useStrapiVillage()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default Village;