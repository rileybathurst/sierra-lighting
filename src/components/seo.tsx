// https://www.gatsbyjs.com/docs/add-seo-component/

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image"

/* export function SnowyRoof() {
  return <StaticImage
    src={seo.image} // seo is undefined here
    alt="christmas lights display on an entrance with a snowy roof in Incline village nevada"
    className="snowyroof" />
} */

function ScopeBool(props) {
  const ScopeItem = props.itemScope;
  if (ScopeItem) {
    return (
      <>
        undefined
      </>
    );
  }
  else return null;
}

// Im not sure what the rules on what goes here vs in the array?
const SEO = ({
  title,
  description,
  image,
  titleColor,
  itemScope,
  itemType,

}) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const {
    defaultTitle,
    titleTemplate,
    siteUrl,
    defaultDescription,
    defaultImage,
    ogImage,
    twitterImage,
    telephone,
    openingHours,
    areaServed,
    paymentAccepted,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    ogImage: image,
    twitterImage: twitterImage,
    url: `${siteUrl}${pathname}`,
    openingHours: `${openingHours}`,
    telephone: telephone,
    areaServed: areaServed,
    paymentAccepted: paymentAccepted,
    itemScope: itemScope,
    itemType: itemType,
    titleColor: titleColor,
  };

  return (
    <>
      <Helmet
        title={seo.title}
        titleTemplate={titleTemplate}
        htmlAttributes={{
          lang: 'en-US',
          // itemScope: undefined, // as was before boolean
          itemScope: `${seo.itemScope}`, // this seems to be working

          itemType: `${seo.itemType}`,
        }}
      >

        {/* Im sure theres a way to do this with a query */}
        <meta itemProp="name" content="Sierra Lighting" />

        <meta name="description" content={seo.description} />
        <meta name="image" itemProp="image" content={seo.ogImage} />
        <meta property="og:type" content="website" />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {/* {(article ? true : null) && <meta property="og:type" content="article" />} */}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.ogImage} />}

        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}

        <meta name="twitter:card" content="summary_large_image" />
        {seo.image && <meta name="twitter:image" content={seo.twitterImage} />}

        {seo.openingHours && (
          <meta name="openingHours" itemProp="openingHours" content={seo.openingHours} />
        )}
        {seo.telephone && <meta name="telephone" itemProp="telephone" content={seo.telephone} />}
        {seo.areaServed && <meta name="areaServed" content={seo.areaServed} />}
        {seo.paymentAccepted && (
          <meta name="paymentAccepted" content={seo.paymentAccepted} />
        )}
      </Helmet>

      {/* 🚨 this needs to be off in production */}
      <div className="seo-showcase">
        <p><span className="key">Title</span> = <span className={seo.titleColor}>{seo.title}</span></p>
        <p><span className="key">Description</span> = <span className={seo.titleColor}>{seo.description}</span></p>
        {/* // ? why does this need to be ogImage? */}
        {/* // regular image doubles the url */}
        <p><span className="key">Image</span> = </p>
        <img src={seo.ogImage} alt="seo checking" />
      </div>
    </>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  ogImage: PropTypes.string,
  twitterImage: PropTypes.string,
  article: PropTypes.bool,
  openingHours: PropTypes.string,
  telephone: PropTypes.string,
  faxNumber: PropTypes.string,
  areaServed: PropTypes.string,
  paymentAccepted: PropTypes.string,
  location: PropTypes.string,
  slogan: PropTypes.string,
  gsv: PropTypes.string,
  itemScope: PropTypes.bool,
  itemType: PropTypes.string,
  titleColor: PropTypes.string,
};

SEO.defaultProps = {
  lang: `en`,
  itemType: `https://schema.org/LocalBusiness`,
  title: null,
  description: null,
  image: null,
  ogImage: null,
  twitterImage: null,
  article: false,
  openingHours: null,
  telephone: null,
  areaServed: null,
  paymentAccepted: null,
  itemScope: false,
  titleColor: null,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        ogImage: image
        twitterImage: image
        openingHours
        telephone
        areaServed
        paymentAccepted
        itemType
        defaultType: titleColor
      }
    }
  }
`;
