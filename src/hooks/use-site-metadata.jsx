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
          defaultImage
          defaultImageAlt
          openingHours
          telephone
          email
          logo
          author
          paymentAccepted
          itemType
          priceRange
          alternateName
          slogan

          geo {
            latitude
            longitude
            geoRadius
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
