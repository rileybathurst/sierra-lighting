// https://ntietz.com/blog/that-boolean-should-probably-be-something-else/
// Changing this to be more clear to anyone later

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