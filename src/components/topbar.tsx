import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Season from "./season";

const TopBar = () => {

  const { strapiTopbar } = useStaticQuery(graphql`
  query TopBarQuery {
    strapiTopbar {
      title
      link
      default

      defaultXmas
      defaultXmasLink
      defaultWedding
      defaultWeddingLink
    }
  }
`)

  const SeasonalTopbar = (() => {
    if (strapiTopbar.title && strapiTopbar.default) {
      return strapiTopbar.title;
    } else if (Season() === 'xmas') {
      return strapiTopbar.defaultXmas;
    } else if (Season() === 'wedding') {
      return strapiTopbar.defaultWedding;
    } else {
      console.error('No topbar title set in Strapi');
    return '';
    }
  })();

  const SeasonalTopbarLink = (() => {
    if (strapiTopbar.link && strapiTopbar.title && strapiTopbar.default) {
      return strapiTopbar.link;
    } else if (Season() === 'xmas') {
      return strapiTopbar.defaultXmasLink;
    } else if (Season() === 'wedding') {
      return strapiTopbar.defaultWeddingLink;
    } else {
      console.log('No topbar link set in Strapi');
    return '';
    }
  })();

  return (
    <div className="top-bar">
      <h2>
        {SeasonalTopbarLink ? <Link to={`/${SeasonalTopbarLink}`}>
          {SeasonalTopbar}
        </Link> : null}
      </h2>
      <hr />
    </div>
  );
};

export default TopBar;
