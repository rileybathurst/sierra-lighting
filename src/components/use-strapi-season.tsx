import { graphql, useStaticQuery } from "gatsby"

export const useStrapiSeason = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiSeason {
        wedding
      }
    }
  `)

  return data.strapiSeason.wedding
}