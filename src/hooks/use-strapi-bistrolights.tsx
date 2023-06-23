import { graphql, useStaticQuery } from "gatsby"

export const useStrapiBistroLights = () => {
  const { strapiImageGrab } = useStaticQuery(graphql`
    query {
      strapiImageGrab(title: {eq: "BistroLights"}) {
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                breakpoints: [624, 1248]
                width: 1248
              )
            }
          }
        }
      }
    }
  `)

  return strapiImageGrab
}