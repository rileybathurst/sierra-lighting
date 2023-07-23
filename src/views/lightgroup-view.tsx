import * as React from "react";
import { Link } from "gatsby";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Badges from "../components/badges"
import Card from "../components/card";
import { CardType } from "../types/card";

const LightGroupView = ({
  lightgroup,
  other
}) => {
  return (
    <>
      <Seo
      // title={`${light.name} | Sierra Lighting`}
      // description={light?.excerpt}
      // image={light?.image?.localFile?.url}
      />

      <Header />

      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="first-capital">
            <Link itemProp="item" to="/lights">
              <span itemProp="name">Lights</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{lightgroup.name}</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main className="measure">
        <h1>
          {lightgroup.name}
        </h1>
        <p>{lightgroup.excerpt}</p>
        {/* <Badges
          outdoor={lightgroup.outdoor}
          wedding={lightgroup.wedding}
          residentialchristmas={lightgroup.residentialchristmas}
          commercialchristmas={lightgroup.commercialchristmas}
        /> */}
        {/* // ! should uses be a content group */}

      </main>

      <section className="deck">
        {lightgroup.lights.map((light: CardType) => (
          <div key={light.id}>
            <Card
              card={light}
              breadcrumb="light"
            />
          </div>
        ))}
      </section>

      <section className="measure">
        <hr />
        <h2>Other Light Groups</h2>
        <ul>
          {other.nodes.map((lightgroup) => (
            <li key={lightgroup.id}>
              <Link to={`/light-group/${lightgroup.slug}`}>
                {lightgroup.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </>
  );
};

export default LightGroupView;
