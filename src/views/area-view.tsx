import * as React from "react";
import { Link } from "gatsby";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const AreaView = ({ area }) => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main className="measure">
        <article className="single">
          <h1>{area.name}</h1>
          {/* this needs to be formatted */}
          <p>{area.description.data.description}</p>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default AreaView;
