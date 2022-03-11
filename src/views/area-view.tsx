import * as React from "react";
import { Link } from "gatsby";

import ReactMarkdown from "react-markdown";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

function ReactDescription(props) {
  if (props.desc) {
    return <ReactMarkdown children={props.byline} />;
  } else {
    return null;
  }
}

const AreaView = ({ area }) => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main className="measure">
        <article className="single">
          <h1>{area.name}</h1>
          {/* <ReactMarkdown children={area.description.data.description} /> */}
          <ReactDescription desc={area.description.data.description} />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default AreaView;
