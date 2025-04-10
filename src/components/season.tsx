import { graphql, useStaticQuery } from "gatsby"

function Season() {
  const { strapiSeason } = useStaticQuery(graphql`
    query {
      strapiSeason {
        wedding
      }
    }
  `)

  console.log('strapiSeason', strapiSeason)

  if (strapiSeason.wedding) {
    return 'wedding'
  }
  return 'xmas'
}

export default Season