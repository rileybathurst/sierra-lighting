import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteTitle
          url
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
          slogan
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
