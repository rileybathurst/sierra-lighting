import * as React from "react"
import { Link } from 'gatsby';

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import AreaList2 from "../lists/area-list-2";

const AreasPage = () => {
  return (
    <>
      <Seo
        title="Sierra Lighting"
        description="Sierra Chistmas Lights installs holiday lights in the Reno, Truckee, Tahoe, Carson area. Quality, hassle free displays that are guaranteed all season long! Experienced. Professional. Insured."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/areas-og-sierra_lighting.jpg"
      />

      <Header />

      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Service Areas</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main className="measure">
        <h1>Service Areas</h1>
        <div className="areas__page">
          {/* <AreaList /> */}
          <AreaList2 />
        </div>
      </main>

      <Footer />

    </>
  )
}

export default AreasPage
