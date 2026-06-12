// ! this page needs love

import * as React from "react"
import { Link, graphql } from "gatsby"

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import type { ImageWithAspectType } from "../types/image-with-aspect-type";

type FormSuccessPageTypes = {
  data: {
    strapiForm: {
      thanks: string;
      minimum: string;
      hero: ImageWithAspectType;
    }
  }
}
const FormSucessPage = ({ data }: FormSuccessPageTypes) => {
  return (
    <React.Fragment>
      <Header />

      <Hero
        image={data.strapiForm.hero}
      />

      <main className="stork">
        <h1>Thanks - Form Success</h1>
        <p>for getting in touch we will get back to you ASAP<br />
          <Link to="/">Head to our home page.</Link>
        </p>
      </main>
      <Footer
        quote={false}
      />
    </React.Fragment>
  )
}

export default FormSucessPage

export const Head = ({ data }: FormSuccessPageTypes) => {
  return (
    <SEO
      title='Form Success'
      image={data.strapiForm.hero.localFile.url}
      description="Thanks for getting in touch we will get back to you ASAP. Head to our home page."
      url="form-success"
    />
  )
}

export const query = graphql`
  query FormSuccessPage {
    strapiForm {
      thanks
      minimum
      hero {
        ...imageWithAspectFragment
      }
    }
  }
`