import React from "react";
import Card from "../components/card";
import type { CardType, CardTypeOmitBreadcumb } from "../types/card-type";
import type { ImageType } from "../types/image-type";

type ImageCheckTypes = CardTypeOmitBreadcumb & {
  breadcrumb: CardType["breadcrumb"];
  residentialHero?: ImageType;
  commercialHero?: ImageType;
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
