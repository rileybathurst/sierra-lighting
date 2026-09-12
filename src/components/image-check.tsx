import type { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import Card from "../components/card";
import type { CardType } from "../types/card-type";

type ImageCheckTypes = CardType & {
  residentialHero?: {
    localFile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    alternativeText: string;
  };
  commercialHero?: {
    localFile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    alternativeText: string;
  };
};
const ImageCheck = ({
  breadcrumb,
  excerpt,
  query,
  image,
  title,
  slug,
  residentialHero,
  commercialHero,
}: ImageCheckTypes) => {
  let cardImage = image;
  if (query === "residential" && residentialHero) {
    cardImage = residentialHero;
  } else if (query === "commercial" && commercialHero) {
    cardImage = commercialHero;
  }

  return (
    <Card
      title={title}
      slug={slug}
      excerpt={excerpt ?? ""}
      breadcrumb={breadcrumb}
      query={query}
      image={cardImage}
    />
  );
};

export default ImageCheck;
