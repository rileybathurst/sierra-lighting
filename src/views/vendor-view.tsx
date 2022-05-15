// TODO there is an option we could at time loading into this

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
  if (props.website) {

    let str = props.website;
    const DoesNotInclude = !str.includes('https://');
    console.log(DoesNotInclude);

    if (DoesNotInclude) {
      return (
        <p>
          {/* Im having problem making sure this always the same and pushing to the external */}
          {process.env.NODE_ENV === "development" ? (
            <div className="seo-showcase">
              <p className="key">
                Starts with &nbsp;
                {props.website}
              </p>

            </div>
          ) : null}

          <a href={`https://${props.website}`}
            target="_blank"
            rel="noopener noreferrer">
            <StrShort str={props.website} />
          </a>
        </p>
      )
    } else {
      // the link is fine just run it as is
      return (
        <p>
          {process.env.NODE_ENV === "development" ? (
            <div className="seo-showcase">
              <p className="key">
                Starts with &nbsp;
                {props.website}
              </p>
            </div>
          ) : null}
          <a href={props.website}
            target="_blank"
            rel="noopener noreferrer">
            <StrShort str={props.website} />
          </a>
        </p>
      )
        ;
    }
  } else {
    return null;
  }
}

function Instagram(props) {
  if (props.instagram) {

    // this can get messy with https:// www. or all the things its always a guess and check
    if (props.instagram.includes('instagram.com/')) {
      // console.log('instagram is fine');
      return (
        <li>
          <a href={props.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
            @<StrShort str={props.instagram} />
            {/* {props.instagram} */}
          </a>
        </li>
      )
    } else {
      // console.log('instagram aint fine');
      // console.log(props.instagram);
      return (
        <li>
          <a href={`https://instagram.com/${props.instagram}`} target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
            @<StrShort str={props.instagram} />
            {/* {props.instagram} */}
          </a>
        </li>
      )
    }
  } else {
    return null
  }
}
function Facebook(props) {
  if (props.facebook) {
    if (props.facebook.includes('facebook.com/')) {
      return (
        <li>
          <a href={props.facebook} target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
            <StrShort str={props.facebook} />
            {/* {props.facebook} */}
          </a>
        </li>
      )
    } else {
      return (
        <li>
          <a href={`https://facebook.com/${props.facebook}`} target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
            <StrShort str={props.facebook} />
          </a>
        </li>
      )
    }
  } else {
    return null
  }
}
function Pinterest(props) {
  if (props.pinterest) {
    if (props.pinterest.includes('pinterest.com/')) {
      return (
        <li>
          <a href={props.pinterest} target="_blank" rel="noopener noreferrer">
            <PinterestIcon />
            <StrShort str={props.pinterest} />
          </a>
        </li>
      )
    } else {
      return (
        <li>
          <a href={`https://pinterest.com/${props.pinterest}`} target="_blank" rel="noopener noreferrer">
            <PinterestIcon />
            <StrShort str={props.pinterest} />
          </a>
        </li>
      )
    }
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
            <Link itemProp="item" to={`/vendors/${vendor.service}`}>
              <span itemProp="name" className="first-capital">{vendor.service}</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="3" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{vendor.name}</span>
            <meta itemProp="position" content="4" />
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

          {/* // TODO these can get too long http://localhost:8000/vendor/blancabrandon */}
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

      <div className="measure">
        <span className="crest">Even More?</span>
        <h5 className="range"><Link to="/vendors">View all other vendors</Link></h5>
      </div>

      <Footer />
    </>
  );
};

export default VendorView;
