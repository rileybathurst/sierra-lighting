// TODO: im getting a @type organization error for address but not sure from where

import React from "react";
import { Script, useStaticQuery, graphql } from "gatsby";

interface BreadcrumbsTypes {
  [key: number]: {
    name: string;
    item: string;
  };
}[]

interface SEO {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  breadcrumbs?: BreadcrumbsTypes;
}

// this has a 0 thats kinda confusing
// can we remove that
export const SEO = (SE0: SEO) => {

  const data = useStaticQuery(graphql`
    query SEOQuery {
      
      strapiAbout {
        businessName
        url
        slogan
        defaultImage
        defaultImageAlt
        openingHours
        telephone
        email
        paymentAccepted
        alternateName
        alternateName
        geoLatitude
        geoLongitude
        geoRadius

        addressLocality
        addressRegion
        postalCode
      }

      strapiTopbar {
        title
        link
      }
    }
  `);

  // I could probably pass it two arguments instead but for now
  function Breadcrumbs(breadcrumbs: BreadcrumbsTypes) {

    // console.log(breadcrumbs);
    // console.log(Object.entries(breadcrumbs).length);
    if (!Object.entries(breadcrumbs).length) return null;

    // console.log(rest);

    // auto format is weird on here dont manually fix it
    // (key) + 1 js counts from 0 breadcrumbs count from 1
    return (
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              ${Object.entries(breadcrumbs).map(([key, breadcrumb]) => {
          return `{
                    "@type": "ListItem",
                    "position": ${Number.parseInt(key) + 1},
                    "name": "${breadcrumb.name}",
                    "item": "${data.strapiAbout.url}/${breadcrumb.item}"
                  }`
        })}
            ]
          }
        `}
      </Script>
    );
  }

  return (
    <>
      <title>{SE0.title ? `${SE0.title} | ${data.strapiAbout.businessName}` : `${data.strapiAbout.businessName} | ${data.strapiTopbar.title}`}</title>
      <meta name="description" content={SE0.description ? SE0.description : data.strapiAbout.slogan} />
      <meta name="image" itemProp="image" content={SE0.image} />

      {/* OG */}
      <meta property="og:type" content="website" />
      <meta property="og:url" itemProp="URL" content={SE0.url} />
      <meta property="og:title" content={SE0.title} />
      <meta property="og:description" content={SE0.description} />
      <meta property="og:image" itemProp="image" content={SE0.image} />

      {/* Twitter */}
      {/* is this twitter I really cant see anyone caring about this for sierra */}
      {/* TODO: do research into who uses other than og: */}
      <meta name="twitter:title" content={SE0.title} />
      <meta name="twitter:description" content={SE0.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={SE0.image} />

      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "LocalBusiness",
            "name": "${data.strapiAbout.businessName}",
            "description": "${data.strapiAbout.slogan}",
            "url": "${data.strapiAbout.url}",
            "alternateName": "${data.strapiAbout.alternateName}",
            "image": "${data.strapiAbout.defaultImage}",
            "openingHours": "${data.strapiAbout.openingHours}",
            "paymentAccepted": "${data.strapiAbout.paymentAccepted}",
            "telephone": "${data.strapiAbout.telephone}",
            "email": "${data.strapiAbout.email}",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "${data.strapiAbout.geoLatitude}",
              "longitude": "${data.strapiAbout.geoLongitude}"
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "${data.strapiAbout.geoLatitude}",
                "longitude": "${data.strapiAbout.geoLongitude}"
              },
              "geoRadius": "${data.strapiAbout.geoRadius}"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "${data.strapiAbout.addressLocality}",
              "addressRegion": "${data.strapiAbout.addressRegion}",
              "postalCode": "${data.strapiAbout.postalCode}",
              "addressCountry": "US"
              }
          }
        `}
      </Script>

      <Breadcrumbs
        {...SE0.breadcrumbs}
      />

      {SE0.children}
    </>
  );
};

export default SEO;
