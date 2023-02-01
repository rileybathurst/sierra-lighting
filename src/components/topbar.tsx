import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

const TopBar = () => {
  return (
    <>
      <div className="top-bar">
        <h2>
          <StaticQuery
            query={query}
            render={data => (
              <>
                {
                  data.strapiTopbar.title
                  // all is also only as its a single
                }
              </>
            )}
          />
          {/* </Link> */}
        </h2 >
        <hr />
      </div >
    </>
  )
}

export default TopBar

const query = graphql`
  query TopBarQuery {
    strapiTopbar {
      id
      title
    }
  }
`

// change this seasonally
// Currently Booking Weddings, Events, and Bistro Lights
// Now booking Christmas Lights