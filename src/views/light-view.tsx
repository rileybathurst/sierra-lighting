import * as React from "react";
import { Link } from "gatsby";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const LightView = ({ light }) => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main className="measure">
        <article className="single">
          <h1>{light.name}</h1>
          <p>{light.description}</p>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default LightView;
