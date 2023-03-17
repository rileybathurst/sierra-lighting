import { graphql, useStaticQuery } from "gatsby"

export const useStrapiIndoorWedding = () => {
  const { strapiImageGrab } = useStaticQuery(graphql`
    query {
      strapiImageGrab(title: {eq: "IndoorWedding"}) {
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