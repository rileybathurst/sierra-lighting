import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          url
          description
          image
          ogImage
          twitterImage
          openingHours
          telephone
          email
          logo
          areaServed
          paymentAccepted
          itemType
          priceRange
        }
      }
    }
  `)

  return data.site.siteMetadata
}