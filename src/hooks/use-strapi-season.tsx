import { graphql, useStaticQuery } from "gatsby"

interface StrapiSeasonTypes {
  wedding: boolean;
}

export const useStrapiSeason = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiSeason {
        wedding
      }
    }
  `)

  const strapiSeason: StrapiSeasonTypes = data.strapiSeason.wedding;
  return strapiSeason;
}