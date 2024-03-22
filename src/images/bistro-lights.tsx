import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiBistroLights } from "../hooks/use-strapi-bistrolights";

const BistroLights = () => {

  const { title, image } = useStrapiBistroLights()
  if (title === undefined) {
    console.warn('No title found for BistroLights');
  }

  return (
    <a href="/patio" className="adhere">
      <GatsbyImage
        image={image?.localFile?.childImageSharp?.gatsbyImageData}
        alt={title}
      />
      <p className="sticker">Patio Lighting</p>
    </a>
  );
};

export default BistroLights;