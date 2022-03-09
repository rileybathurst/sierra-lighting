import * as React from "react";
import { Link } from "gatsby";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const VenueView = ({ venue }) => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main className="measure">
        <article className="single">
          <h1>{venue.name}</h1>
          <p>{venue.description}</p>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default VenueView;
