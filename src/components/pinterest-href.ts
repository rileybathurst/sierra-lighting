import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export const pinterestHref = (imageSources?: { srcSet: string }[]) => {
  
  const data = useStaticQuery(graphql`
  query pinterestHrefQuery {
    strapiAbout {
      url
    }

    strapiSocialSite(service: {eq: "pinterest"}) {
      id
      svg
    }
  }
`);

  const siteUrl = data.strapiAbout.url;
  if (!imageSources || imageSources.length === 0) {
    throw new Error(
      "Expected gatsbyImageData.images.sources to be defined with at least one entry",
    );
  }

  const largestImageFromSrcSet = imageSources[0].srcSet
    .split(",")
    .at(-1)
    ?.trim()
    ?.split(" ")[0];
  const mediaPath = largestImageFromSrcSet;
  if (!mediaPath) {
    throw new Error("Expected a valid srcSet image URL for Pinterest media");
  }

  const mediaUrl = new URL(mediaPath, `${siteUrl}/`).toString();
  console.log(mediaUrl);
  return (
    <div>
      <a href={`https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(mediaUrl)}`} target="_blank" rel="noopener noreferrer">
        <span dangerouslySetInnerHTML={{ __html: data.strapiSocialSite.svg }} />
      </a>
    </div>
  );
};
