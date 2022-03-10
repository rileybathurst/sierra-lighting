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

        <p className="breadcrumbs">
          <Link to="/">Home</Link>&nbsp;
          / <Link to="/wedding">Wedding</Link>&nbsp;
          / <Link to="/venues">Wedding Venues</Link>&nbsp;
          / {venue.name}
        </p>
        <hr />

        <article className="single">
          <h1>{venue.name}</h1>
          <hr />
          <p>{venue.description}</p>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default VenueView;
