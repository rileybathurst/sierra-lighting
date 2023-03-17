import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiBackyard } from "../hooks/use-strapi-backyard";

const Backyard = () => {

  const { title, image } = useStrapiBackyard()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default Backyard;