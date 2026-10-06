// * single just for this page as the template doesn't fit

import { graphql } from "gatsby";
import * as React from "react";
import Markdown from "react-markdown";
import Footer from "../components/footer";
import Header from "../components/header";
import { SEO } from "../components/seo";

type PermanentTypes = {
  data: {
    strapiPermanent: {
      explanation: {
        data: {
          explanation: string;
        };
      };
      excerpt: string;
    };
  };
};
const PermanentPage = ({ data }: PermanentTypes) => {

  console.log(data.strapiPermanent.explanation.data.explanation);

  return (
    <React.Fragment>
      <Header />
      {/* // * the markdown super changes the spacing so im removing it to style it with css */}
      {/* <main className="react-markdown"> */}
      <main>
        <Markdown>{data.strapiPermanent.explanation.data.explanation}</Markdown>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default PermanentPage;

export const Head = ({
  data
}: PermanentTypes) => {
  return <SEO title="Permanent" description={data.strapiPermanent.excerpt} />;
};

export const query = graphql`
    query PermanentQuery {
      strapiPermanent {
        explanation {
          data {
            explanation
          }
        }
        excerpt
      }
    }
  `;