import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiNorthTahoeArts } from "../hooks/use-strapi-northtahoearts";

const NorthTahoeArts = () => {

  const { title, image } = useStrapiNorthTahoeArts()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default NorthTahoeArts;