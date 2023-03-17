import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiStrings } from "../hooks/use-strapi-strings";

const Strings = () => {

  const { title, image } = useStrapiStrings()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default Strings;