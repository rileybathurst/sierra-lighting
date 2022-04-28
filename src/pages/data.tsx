import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const DataPage = () => {

  const data = useStaticQuery(graphql`
    query DataQuery {
      allStrapiFar {
        nodes {
          question
        }
      }
    }
  `)

  const more = { data }
  console.log(more);

  let more2 = data.allStrapiFar.nodes
  console.log(more2);

  return (
    <header>
      <h1>hey</h1>
    </header>
  )
}

export default DataPage