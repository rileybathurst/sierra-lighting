import { graphql, useStaticQuery } from "gatsby"

export const useStrapiWreath = () => {
  const { strapiImageGrab } = useStaticQuery(graphql`
    query {
      strapiImageGrab(title: {eq: "Wreath"}) {
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  return strapiImageGrab
}