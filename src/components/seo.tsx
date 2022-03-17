// https://www.gatsbyjs.com/docs/add-seo-component/

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

// Im not sure what the rules on what goes here vs in the array?
const SEO = ({
  title,
  description,
  image,
  titleColor,
  itemType,
  lang
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
    defaultType,
    // itemtype,
    // can't have .anything secondary level
    // titleColor,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    ogImage: ogImage,
    twitterImage: twitterImage,
    url: `${siteUrl}${pathname}`,
    openingHours: `${openingHours}`,
    telephone: telephone,
    areaServed: areaServed,
    paymentAccepted: paymentAccepted,
    itemType: itemType,
    titleColor: titleColor || defaultType,
  };

  return (
    <>
      <Helmet
        title={seo.title}
        titleTemplate={titleTemplate}
        htmlAttributes={{
          lang: 'en-US',
          // capitalization here
          // https://react-cn.github.io/react/docs/tags-and-attributes.html
          itemScope: undefined, // has empty brackets needs no brackets // maybe this does work?
          // itemScope: "", // same as undefined
          // itemScope, // errors with itemScope is not defined
          // itemScope: true, // just shows true
          // itemScope: "itemscope", // just shows true
          // itemScope: null, // has empty brackets needs no brackets
          // dangerouslySetInnerHTML{ itemScope: undefined }, // I dont know how to use this
          // itemScope: "itemscope",


          itemType: `${seo.itemType}`,
        }}
      >
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.ogImage} />
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
          <meta name="openingHours" content={seo.openingHours} />
        )}
        {seo.telephone && <meta name="telephone" content={seo.telephone} />}
        {seo.areaServed && <meta name="areaServed" content={seo.areaServed} />}
        {seo.paymentAccepted && (
          <meta name="paymentAccepted" content={seo.paymentAccepted} />
        )}
        {/* {seo.location && <meta name="location" content={seo.streetAddress + ', ' + seo.addressLocality + ', ' + seo.addressRegion + ', ' + seo.postalCode} />} */}
        {/* the layer down version of this didn't want to work so remove the wrapper */}



        {/* Google Tag Manager */}
        {/*         <script>(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NFVF3W7');</script> */}
        {/* End Google Tag Manager */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            // "@type": "Recipe",
          })}
        </script>


      </Helmet>

      {/* 🚨 this needs to be off in production */}
      <div className="seo-showcase">
        <p><span className="key">Title</span> = <span className={seo.titleColor}>{seo.title}</span></p>
        <p><span className="key">Description</span> = <span className={seo.titleColor}>{seo.description}</span></p>
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
  itemType: PropTypes.string,
  titleColor: PropTypes.string,
};

SEO.defaultProps = {
  lang: `en`,
  itemType: `https://schema.org/WebPage`,
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
