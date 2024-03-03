import * as React from "react";
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiBackyard } from "../hooks/use-strapi-backyard";

const Backyard = () => {

  const { title, image } = useStrapiBackyard()

  if (title === undefined) {
    console.warn('No title found for Backyard');
  }

  return (
    <Link to="/backyard" className="adhere">
      <GatsbyImage
        image={image?.localFile?.childImageSharp?.gatsbyImageData}
        alt={title}
      />
      <p className="sticker">Backyard</p>
    </Link>
  );
};

export default Backyard;