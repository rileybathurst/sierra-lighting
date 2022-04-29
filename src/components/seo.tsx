// https://www.gatsbyjs.com/docs/add-seo-component/

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

// TODO something about titles

// https://blog.spotibo.com/meta-description-length/
// less than 120 characters is good
// more than 160 characters is bad
function DescLength(props) {
  const desc = props.desc;
  const length = desc.length;
  if (length <= 120) {
    return <span className="good key">{length} = good</span>;
  } else if (length > 120 && length <= 160) {
    return <span className="ok key">{length} = ok</span>;
  } else {
    return <span className="bad key">{length} = bad</span>;
  }
}

function GetMeta(props) {
  const link = props.link;
  console.log(link);

  const img = new Image();
  img.src = link;

  console.log(img.naturalWidth);

  if (img.naturalWidth == 1200) {
    return <span className="good key">width: {img.naturalWidth} = good</span>;
  } else {
    return <span className="bad key">width: {img.naturalWidth} = bad</span>;
  }
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
        {seo.url && <meta property="og:url" itemProp="URL" content={seo.url} />} {/* // ! this isnt there yet */}
        {/* {(article ? true : null) && <meta property="og:type" content="article" />} */}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" itemProp="image" content={seo.ogImage} />}

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
        <meta name="areaServed" itemProp="areaServed" content={seo.areaServed} />
        {seo.paymentAccepted && (
          <meta name="paymentAccepted" itemProp="paymentAccepted" content={seo.paymentAccepted} />
        )} {/* // ! check this is running */}

        // ? check if this works or helps or whatever
        // * I think I am going with areaServed over this
        {/*         <meta itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">Truckee</span>,
          <span itemProp="addressRegion">CA</span>
          <span itemProp="postalCode">96161</span>
        </meta>

        <meta itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">RENO</span>,
          <span itemProp="addressRegion">NV</span>
        </meta> */}


      </Helmet>
      {/* 🚨 this needs to be off in production */}
      {/* {process.env.NODE_ENV === "production" ? ( */}
      {process.env.NODE_ENV === "development" ? (
        <div className="seo-showcase">
          <p key="title"><span className="key">Title</span> = <span className={seo.titleColor}>{seo.title}</span></p>
          <p key="description"><span className="key">Description</span> = <span className={seo.titleColor}>{seo.description}</span></p>
          <p>Description charachter length = <DescLength desc={seo.description} /></p>
          {/* // ? why does this need to be ogImage? */}
          {/* // regular image doubles the url */}
          <p key="image"><span className="key">Image</span> = <GetMeta link={seo.ogImage} /></p>
          <img src={seo.ogImage} alt="seo checking" />
        </div>
      ) : null}

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
