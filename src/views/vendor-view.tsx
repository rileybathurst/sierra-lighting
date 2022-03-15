import * as React from "react";
import { Link } from "gatsby";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const VendorView = ({ vendor }) => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />

      <p className="breadcrumbs measure">
        <Link to="/">Home</Link>&nbsp;
        / <Link to="/vendors">Vendors</Link>&nbsp;
        / {vendor.name}
      </p>
      <hr className="measure" />

      <main className="measure">
        <article className="single">
          <h1>{vendor.name}</h1>
          <p>{vendor.description}</p>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default VendorView;
