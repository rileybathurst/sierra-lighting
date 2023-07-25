import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiSnowyRoof } from "../hooks/use-strapi-snowyroof";

const SnowyRoof = () => {

  const { title, image } = useStrapiSnowyRoof()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
      className="poster"
    />
  );
};

export default SnowyRoof;