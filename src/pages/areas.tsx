import * as React from "react"
import { Link } from 'gatsby';

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import AreaList2 from "../lists/area-list-2";

const AreasPage = () => {
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
