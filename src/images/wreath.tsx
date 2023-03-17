import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiWreath } from "../hooks/use-strapi-wreath";

const Wreath = () => {

  const { title, image } = useStrapiWreath()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default Wreath;