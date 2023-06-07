import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const TopBar = () => {

  const {strapiTopbar} = useStaticQuery(graphql`
  query TopBarQuery {
    strapiTopbar {
      id
      title
    }
  }
`)

  return (
    <div className="top-bar">
      <h2>{strapiTopbar.title}</h2>
      <hr />
    </div>
  );
};

export default TopBar;
