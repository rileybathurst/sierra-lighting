import * as React from "react";
import { Link } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";
// import Badges from "../components/badges"
import Card from "../components/card";
import { CardType } from "../types/card-type";

const LightGroupView = ({
  lightgroup,
  other
}) => {
  return (
    <>
      <Header />

      <div className="stork">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="capitalize">
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

      <main className="stork">
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
          <Card
            key={light.id}
            card={light}
            breadcrumb="light"
          />
        ))}
      </section>

      <section className="stork">
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
