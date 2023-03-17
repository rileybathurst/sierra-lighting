import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiWeddingBlueHour } from "../hooks/use-strapi-weddingbluehour";

const WeddingBlueHour = () => {

  const { title, image } = useStrapiWeddingBlueHour()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default WeddingBlueHour;