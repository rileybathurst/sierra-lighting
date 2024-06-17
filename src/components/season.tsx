import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

function Season() {
  const { strapiSeason } = useStaticQuery(graphql`
    query {
      strapiSeason {
        wedding
      }
    }
  `)

  if (strapiSeason.wedding) {
    return 'wedding'

  }
  return 'wedding'
}

export default Season