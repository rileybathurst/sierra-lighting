// https://ntietz.com/blog/that-boolean-should-probably-be-something-else/
import { graphql, useStaticQuery } from "gatsby"

function Season() {
  const { strapiSeason } = useStaticQuery(graphql`
    query {
      strapiSeason {
        season
      }
    }
  `)

  // console.log('strapiSeason', strapiSeason.season)

  return strapiSeason.season
}

export default Season