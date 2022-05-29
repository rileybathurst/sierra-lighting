import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../src/components/seo";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import StrShort from "../src/components/StrShort";
import Website from "../src/components/website";
import TestimonialRanking from "../src/components/testimonial-ranking";

import FacebookIcon from "../src/images/facebook-icon";
import InstagramIcon from "../src/images/instagram-icon";
import PinterestIcon from "../src/images/pinterest-icon";

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

function IfProjects(props) {
  if (props.projects.length > 0) {
    return (
      <div className="measure">
        <h3>Projects we have collaborated on</h3>
        <hr />
      </div>
    )
  } else {
    return null
  }
}

const VendorView = ({ vendor, other }) => {

  return (
    <>
      {/* // TODO this whole page needs to be rebuilt to grab other vendors by service */}

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

      <main>
        <article className="single">
          <div className="measure">
            <h1>{vendor.name}</h1>
            <p>{vendor.description}</p>

          </div>

          <IfProjects projects={vendor.projects} />

          <div className="deck">
            {vendor.projects.map((project) => (
              <div key={project.id} className="card">

                <GatsbyImage
                  image={
                    project?.image?.localFile?.childImageSharp
                      ?.gatsbyImageData
                  }
                  alt={project.image?.alternativeText}
                  className=""
                />

                <div className="paper"></div>
                <div className="content">
                  <hr />
                  <h2 className="mixta">
                    <Link to={`/vendor/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>
                  <p>{project.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="measure">
            <hr />
            <Website website={vendor.website} />

            {/* // TODO these can get too long http://localhost:8000/vendor/blancabrandon */}
            <Social
              instagram={vendor.instagram}
              facebook={vendor.facebook}
              pinterest={vendor.pinterest}
            />
          </div>

        </article>

        {/* // TODO this needs to be behind an if statement */}
        <div className="measure">
          <hr />
          <ul className='testimonials'>
            {vendor.testimonials.map((testimonial) => (
              <li key={vendor.id} className='testimonial'>
                <figure>
                  <blockquote>
                    <h3 className='sr-only'>{testimonial.title}</h3>
                    {/* // TODO stars */}
                    <TestimonialRanking stars={testimonial.stars} />
                    <p className='testimonial--quote_mark range'>&ldquo;</p>
                    <p>{testimonial.review}</p>
                    <figcaption>
                      <h4 className='range'>{testimonial.customer}</h4>
                      <p className='crest'><strong>{testimonial.vendor.name}</strong> - {testimonial.position}</p>
                    </figcaption>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>

          {/* // TODO this needs to be behind an if */}
          <h3 className='crest'>Hear what other customers say about us</h3>
          <h4 className='range'><Link to="/testimonials" className="link--subtle">More Reviews</Link></h4>
        </div>
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
        <h5 className="range"><Link to="/vendors" className="link--subtle">View all other vendors</Link></h5>
      </div>

      <Footer />
    </>
  );
};

export default VendorView;
