import * as React from "react";
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiWestShoreWedding } from "../hooks/use-strapi-westshorewedding";

const WestShoreWedding = () => {

  const { title, image } = useStrapiWestShoreWedding()

  if (title === undefined) {
    console.warn('No title found for WestShoreWedding');
  }

  return (
    <Link to="/west-shore-wedding" className="adhere">
      <GatsbyImage
        image={image?.localFile?.childImageSharp?.gatsbyImageData}
        alt={title}
      />
      <p className="sticker">Westshore Wedding</p>
    </Link>
  );
};

export default WestShoreWedding;