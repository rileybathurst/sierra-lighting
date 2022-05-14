import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import StrShort from "../components/StrShort";

import FacebookIcon from "../images/facebook-icon";
import InstagramIcon from "../images/instagram-icon";
import PinterestIcon from "../images/pinterest-icon";

function Website(props) {
  let str = props.website;

  // <StrLengths str={str} />

  if (props.website) {
    return (
      <p>
        <a href={`${props.website}`}
          target='_blank'
          rel="noopener noreferrer"
          className="hover-back"
        >
          <StrShort str={props.website} />
        </a>
      </p>
    )
  } else {
    return null;
  }
}

function Instagram(props) {
  if (props.instagram) {
    return (
      <li>
        <a href={`http://${props.instagram}`} target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
          <StrShort str={props.instagram} />
          {/* {props.instagram} */}
        </a>
      </li>
    )
  } else {
    return null
  }
}
function Facebook(props) {

  if (props.facebook) {
    return (
      <li>
        <a href={`http://${props.facebook}`} target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
          {props.facebook}
        </a>
      </li>
    )
  } else {
    return null
  }
}
function Pinterest(props) {
  if (props.pinterest) {
    return (
      <li>
        <a href={`http://${props.pinterest}`} target="_blank" rel="noopener noreferrer">
          <PinterestIcon />
          {props.pinterest}
        </a>
      </li>
    )
  } else {
    return null
  }
}

function Social(props) {
  if (props.instagram || props.facebook || props.pinterest) {
    return (
      <div className="footer-social">
        <hr />
        <ul className="measured">
          <Instagram instagram={props.instagram} />
          <Facebook facebook={props.facebook} />
          <Pinterest pinterest={props.pinterest} />

        </ul>
      </div>
    )
  } else {
    return null
  }
}

const VendorView = ({ vendor, other }) => {
  return (
    <>
      <Seo
        title={`${vendor.name} | Sierra Lighting`}
        description={vendor.excerpt}
        image={vendor?.profile?.localFile?.url}
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
            <Link itemProp="item" to="/vendors">
              <span itemProp="name">Vendors</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="2" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{vendor.name}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
        <hr />
      </div>

      <GatsbyImage
        image={
          vendor?.profile?.localFile?.childImageSharp
            ?.gatsbyImageData
        }
        alt={vendor.profile?.alternativeText}
        className="poster"
      />

      <main className="measure">
        <article className="single">
          <h1>{vendor.name}</h1>
          <p>{vendor.description}</p>
          <hr />
          <Website website={vendor.website} />

          <Social
            instagram={vendor.instagram}
            facebook={vendor.facebook}
            pinterest={vendor.pinterest}
          />

        </article>
      </main>


      <div className="measure">
        <hr />
        <h4>Other Wedding Vendors</h4>
      </div>

      <div className="deck measure">
        {other.nodes.map((other) => (
          <div key={other.id} className="card">

            <GatsbyImage
              image={
                other?.profile?.localFile?.childImageSharp
                  ?.gatsbyImageData
              }
              alt={other.profile?.alternativeText}
              className=""
            />

            <div className="paper"></div>
            <div className="content">
              <hr />
              <h2 className="mixta">
                <Link to={`/vendor/${other.slug}`}>
                  {other.name}
                </Link>
              </h2>
              <p>{other.excerpt}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default VendorView;
