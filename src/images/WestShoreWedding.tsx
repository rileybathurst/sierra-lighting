import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiWestShoreWedding } from "../hooks/use-strapi-westshorewedding";

const WestShoreWedding = () => {

  const { title, image } = useStrapiWestShoreWedding()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default WestShoreWedding;