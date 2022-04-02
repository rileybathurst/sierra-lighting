import * as React from "react";
import { Link } from "gatsby";

// import ReactMarkdown from "react-markdown";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

/* function ReactDescription(props) {
  if (props.desc) {
    return <ReactMarkdown children={props.desc.data.description} />;
  } else {
    return null;
  }
} */

const TeamView = ({ team }) => {
  return (
    <>
      {/* // TODO image and description */}
      <Seo title="Sierra Lighting" />
      <Header />

      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/team">
              <span itemProp="name">team</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="2" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{team.name}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
        <hr />
      </div>


      <main className="measure">
        <article className="single" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <h1 itemProp="addressLocality">{team.name}</h1>
          {/* // TODO: the state needs to be changed to the abreviation */}
          {/* <ReactDescription desc={area.description} /> */}
        </article>
      </main>
      <Footer />
    </>
  );
};

export default TeamView;
