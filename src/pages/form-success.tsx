import { graphql, Link } from "gatsby";
import * as React from "react";
import { useIsWithinBusinessHours } from "../components/business-hours";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import { SEO } from "../components/seo";
import type { HeroSEOImageType } from "../types/hero-seo-image-type";

type FormSuccessPageTypes = {
  data: {
    strapiForm: {
      thanks: string;
      minimum: string;
      outsideHours: string;
      hero: HeroSEOImageType;
    };
  };
};
const FormSuccessPage = ({ data }: FormSuccessPageTypes) => {
  const isWithinBusinessHours = useIsWithinBusinessHours();

  return (
    <React.Fragment>
      <Header />

      <Hero image={data.strapiForm.hero} />

      <main>
        <h1>Thanks - Form Success</h1>

        {isWithinBusinessHours ? (
          <p>
            {data.strapiForm.thanks}
            <br />
            <Link to="/">Head to our home page.</Link>
          </p>
        ) : (
          <h2>{data.strapiForm.outsideHours}</h2>
        )}
      </main>
      <Footer quote={false} />
    </React.Fragment>
  );
};

export default FormSuccessPage;

export const Head = ({ data }: FormSuccessPageTypes) => {
  return (
    <SEO
      title="Form Success"
      image={data.strapiForm.hero}
      description={data.strapiForm.thanks}
      url="form-success"
    />
  );
};

export const query = graphql`
  query FormSuccessPage {
    strapiForm {
      thanks
      minimum
      outsideHours
      
      
      hero {
        ...heroSEOImageFragment
      }
    }
  }
`;
