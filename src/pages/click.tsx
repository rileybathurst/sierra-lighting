// TODO: test function
// TODO: use test functions to understand the use of the pinterest link
// * but also as an idea I can start to bring other places

import * as React from "react"

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";

const HelloPage = () => {

  return (
    <React.Fragment>
      <Header />

      <main>
        <h1>Hello</h1>
        <button type="button" onClick={async () => {
          const response = await fetch("/.netlify/functions/log-click", {
            method: "POST",
            body: JSON.stringify({ date: new Date().toISOString(), image: "https://www.pinterest.com/pin/123456789/" }),
          });
          if (response.ok) {
            console.log("Pinterest entry logged successfully");
          } else {
            console.error("Failed to log Pinterest entry");
          }
        }}>
          Log Click
        </button>
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