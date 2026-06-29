// TODO: test function
// TODO: use test functions to understand the use of the pinterest link
// * but also as an idea I can start to bring other places

import * as React from "react"

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";

const HelloPage = () => {

  React.useEffect(() => {
    async function fetchHello() {
      const response = await fetch("/.netlify/functions/hello");
      const text = await response.text();
      console.log(text);
    }

    fetchHello();
  }, []);

  return (
    <React.Fragment>
      <Header />

      <main>
        <h1>Hello</h1>
      </main >
      <Footer />

    </React.Fragment>
  )
}

export default HelloPage

export const Head = () => {
  return (
    <SEO />
  )
}