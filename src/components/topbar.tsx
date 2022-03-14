import * as React from "react"
import { Helmet } from "react-helmet"
import { Link, StaticQuery, graphql } from "gatsby"

import Logo from "../images/logo";
import Menu from "./menu";
import BigBoy from "./bigboy";

const TopBar = () => {
  return (
    <>
      <div className="top-bar">
        <h2>
          {/* <Link to="/" title="home"> */}

          <StaticQuery
            query={query}
            render={data => (
              <>
                {
                  data.allStrapiTopbar.nodes.map(top => (
                    <>
                      {top.title}
                    </>
                  ))
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
    allStrapiTopbar {
      nodes {
      title
    }
  }
}`