// TODO: I havent moved to the new SEO so I cant use this yet 

interface StrapiTopBarTypes {
  title: string;
}

import { graphql, useStaticQuery } from "gatsby"

export const useStrapiTopBar = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiTopbar {
        title
      }
    }
  `)

  const strapiTopbar: StrapiTopBarTypes = data.strapiTopbar
  return strapiTopbar
}