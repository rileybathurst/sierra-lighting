import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiRancheroTree } from "../hooks/use-strapi-rancherotree";

const RancheroTree = () => {

  const { title, image } = useStrapiRancheroTree()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default RancheroTree;