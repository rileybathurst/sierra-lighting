import * as React from "react";
import { Link } from "gatsby";
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import type { CardType } from "../types/card-type";

const LightGroupView = ({
  lightgroup,
  other
}) => {
  return (
    <>
      <Header />

      <main className="stork">
        <h1>{lightgroup.name}</h1>
        <p>{lightgroup.excerpt}</p>
      </main>

      <section className="deck">
        {lightgroup.lights.map((light: CardType) => (
          <Card
            key={light.id}
            {...light}
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

      <hr className="stork" />

      <Breadcrumbs>
        <Breadcrumb><Link to="/lights/">Light Group</Link></Breadcrumb>
        <Breadcrumb>{lightgroup.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
};

export default LightGroupView;
