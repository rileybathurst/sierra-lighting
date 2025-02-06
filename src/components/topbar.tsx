import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const TopBar = () => {

  // TODO: this should have the season quote to default
  const { strapiTopbar } = useStaticQuery(graphql`
  query TopBarQuery {
    strapiTopbar {
      title
      link
    }
  }
`)

  return (
    <div className="top-bar">
      <h2><Link to={`/${strapiTopbar.link}`}>{strapiTopbar.title}</Link></h2>
      <hr />
    </div>
  );
};

export default TopBar;
