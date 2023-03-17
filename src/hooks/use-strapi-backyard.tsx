import { graphql, useStaticQuery } from "gatsby"

export const useStrapiBackyard = () => {
  const { strapiImageGrab } = useStaticQuery(graphql`
    query {
      strapiImageGrab(title: {eq: "Backyard"}) {
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