// https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
// https://www.erichowey.dev/writing/load-more-button-and-infinite-scroll-in-gatsby/

import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

const MorePage = () => {

  const data = useStaticQuery(graphql`
    query MoreQuery {
      allStrapiFar {
        nodes {
          id
          question
          answer
        }
      }
    }
  `)

  const more = { data }
  console.log(more);

  let allNews = data.allStrapiFar.nodes
  console.log(allNews);

  // State for the list
  const [list, setList] = useState([...allNews.slice(0, 2)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(allNews.length > 2)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allNews.length
      const nextResults = isMore
        ? allNews.slice(currentLength, currentLength + 2)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < allNews.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line */

  return (
    <div>
      <h1>Load more demo</h1>
      <div>
        {list.map((article) => (
          <div key={article.id}>
            <h3>{article.question}</h3>
            <p>{article.answer}</p>
          </div>
        ))}
      </div>
      {hasMore ? (
        <button onClick={handleLoadMore}>Load More</button>
      ) : (
        <p>No more results</p>
      )}
    </div>
  )
}

export default MorePage