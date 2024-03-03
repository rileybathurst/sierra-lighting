import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          defaultDescription
          defaultImage
          defaultImageAlt
          openingHours
          telephone
          email
          logo
          areaServed
          author
          paymentAccepted
          itemType
          priceRange
          alternateName
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
