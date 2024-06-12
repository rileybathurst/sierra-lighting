import { graphql, useStaticQuery } from "gatsby";

interface SiteMetadataTypes {
  title: string;
  siteTitle: string;
  url: string;
  siteUrl: string;
  defaultImage: string;
  defaultImageAlt: string;
  openingHours: string;
  telephone: string;
  email: string;
  logo: string;
}

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

  const siteMetadata: SiteMetadataTypes = data.site.siteMetadata;
  return siteMetadata;
};
