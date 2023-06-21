// TODO: this page doesnt work yet

import React, { useEffect } from 'react';
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const JobberPage = () => {
  return (
    <>
      <Seo
        title="Jobber Form"
        description="testing the jobber form"
      />
      <Header />

      <Helmet>
        <link rel="stylesheet" media="screen" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" />
        <script
          src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"
          clienthub_id="9449c385-032f-4676-9f9f-c718b18a7811"
          form_url="https://clienthub.getjobber.com/client_hubs/9449c385-032f-4676-9f9f-c718b18a7811/public/work_request/embedded_work_request_form">
        </script>
      </Helmet>

      <main className="measure">
        <h2 className="crest">Jobber Form</h2>
        <h1 className="mixta">This should automoatically add to Bex?.</h1>

        <div id="9449c385-032f-4676-9f9f-c718b18a7811"></div>

      </main>
      <Footer />
    </>
  )
}

export default JobberPage