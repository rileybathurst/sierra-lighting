import * as React from "react";
import { Link } from "gatsby";

import ReactMarkdown from "react-markdown";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

function ReactDescription(props) {
  if (props.desc) {
    return <ReactMarkdown children={props.desc.data.description} />;
  } else {
    return null;
  }
}

const AreaView = ({ area }) => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />

      {/* // ? these are breadcrumbs but we are maybe using additional microdata for location */}
      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link> /&nbsp;
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/faqs">
              <span itemProp="name">{area.state}</span></Link>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>


      <main className="measure">
        <article className="single" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <h1 itemProp="addressLocality">{area.name}, {area.state}</h1>
          {/* // TODO: the state needs to be changed to the abreviation */}
          <ReactDescription desc={area.description} />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default AreaView;
