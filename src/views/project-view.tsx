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

const ProjectView = ({ project }) => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main className="measure">
        <article className="single">
          <h1>{project.title}</h1>
          <ReactDescription desc={project.description} />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default ProjectView;
