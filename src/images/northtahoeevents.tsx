import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiNorthTahoeEvents } from "../hooks/use-strapi-northtahoeevents";

const NorthTahoeEvents = () => {

  const { title, image } = useStrapiNorthTahoeEvents()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default NorthTahoeEvents;