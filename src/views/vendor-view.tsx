import * as React from "react";
import { Link } from "gatsby";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import FacebookIcon from "../images/facebook-icon";
import InstagramIcon from "../images/instagram-icon";
import PinterestIcon from "../images/pinterest-icon";

const VendorView = ({ vendor, other }) => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />

      <p className="breadcrumbs measure">
        <Link to="/">Home</Link>&nbsp;
        / <Link to="/vendors">Vendors</Link>&nbsp;/
        <p>{vendor.service}</p> / &nbsp;
        {vendor.name}
      </p>
      <hr className="measure" />

      <main className="measure">
        <article className="single">
          <h1>{vendor.name}</h1>
          <p>{vendor.description}</p>
          <p><a href={`http://${vendor.website}`} target='_blank' rel="noopener noreferrer">{vendor.website}</a></p>

          <hr />

          {/* // * garbage naming */}
          <div className="footer-social">
            <ul className="measured">
              {/* // ! this needs if statements and checks on if name or full link I think name is better so I can use it cleanly */}
              <li><a href={`http://${vendor.instagram}`} target="_blank" rel="noopener noreferrer"><InstagramIcon />{vendor.instagram}</a></li>
              <li><a href={`http://${vendor.facebook}`} target="_blank" rel="noopener noreferrer"><FacebookIcon /> {vendor.facebook}</a></li>
              <li><a href={`http://${vendor.pinterest}`} target="_blank" rel="noopener noreferrer"><PinterestIcon />{vendor.pinterest}</a></li>
            </ul>
          </div>

        </article>
      </main>


      <div className="measure">
        <hr />
        <h4>Other Wedding Vendors</h4>
      </div>

      <div className="deck measure">
        {other.nodes.map((other) => (
          <div key={other.id} className="card">

            {/* <GatsbyImage
              image={
                other?.venueImage?.localFile?.childImageSharp
                  ?.gatsbyImageData
              }
              alt={other.venueImage?.alternativeText}
              className=""
            /> */}

            <div className="paper"></div>
            <div className="content">
              <hr />
              <h3 className="crest">Byline</h3>
              <h2 className="mixta">
                <Link to={`/vendor/${other.slug}`}>
                  {other.name}
                </Link>
              </h2>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default VendorView;
