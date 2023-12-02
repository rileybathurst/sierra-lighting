import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const TopBar = () => {

  const { strapiTopbar } = useStaticQuery(graphql`
  query TopBarQuery {
    strapiTopbar {
      id
      title
    }
  }
`)

  return (
    <div className="top-bar">
      <h2><Link to="/contact">{strapiTopbar.title}</Link></h2>
      <hr />
    </div>
  );
};

export default TopBar;
