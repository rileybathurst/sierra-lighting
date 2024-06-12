// Moving to the new version I lost the SEOShowcase component I still kind of want to rebuild that

// https://www.gatsbyjs.com/docs/add-seo-component/

import React from "react";
import { Script } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata";

interface SEO {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  breadcrumbs?: {
    one: {
      name: string;
      item: string;
    };
    two: {
      name: string;
      item: string;
    };
  };
}

// Im not sure what the rules on what goes here vs in the array?
export const SEO = (SE0: SEO) => {

  // TODO: shift everything to this
  interface BreadcrumbsTypes {
    one: {
      name: string;
      item: string;
    };
    two: {
      name: string;
      item: string;
    };
  }
  function Breadcrumbs({ one, two }: BreadcrumbsTypes) {

    if (!one) return null;

    return (
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "${one.name}",
                "item": "/${one.item}"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "${two.name}",
                "item": "/${one.item}/${two.item}"
              }
            ]
          }
        `}
      </Script>
    );
  }

  const {
    siteTitle,
    siteUrl,
    slogan,
    defaultImage,
    defaultImageAlt,
    telephone,
    email,
    openingHours,
    paymentAccepted,
    alternateName,
    geo,
  } = useSiteMetadata()

  // Do I need this maybe I just inline everything
  const seo = {
    title: SE0.title,
    // TODO: combine with
    // title: `SE0.title | siteTitle`,
    // but also needs a ? : if theres no specific one sent in make it
    // `siteTitle | topbar`
    // I might need to bring this in from a hook as Im not really querying here
    // but also might start queries here instead I dont see why I couldnt
    description: SE0.description || slogan,
    image: SE0.image || defaultImage,
    imageAlt: SE0.imageAlt || defaultImageAlt,
    url: SE0.url || siteUrl,
    breadcrumbs: SE0.breadcrumbs,
  };

  return (
    <>
      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />
      <meta name="image" itemProp="image" content={seo.image} />

      {/* OG */}
      <meta property="og:type" content="website" />
      <meta property="og:url" itemProp="URL" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" itemProp="image" content={seo.image} />

      {/* Twitter */}
      {/* is this twitter I really cant see anyone caring about this for sierra */}
      {/* TODO: do research into who uses other than og: */}
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={seo.image} />

      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "LocalBusiness",
            "name": "${siteTitle}",
            "alternateName": "${alternateName}",
            "url": "${siteUrl}",
            "image": "${defaultImage}",
            "description": "${slogan}",
            "openingHours": "${openingHours}",
            "paymentAccepted": "${paymentAccepted}",
            "telephone": "${telephone}",
            "email": "${email}"
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "${geo.latitude}",
              "longitude": "${geo.longitude}"
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "${geo.latitude}",
                "longitude": "${geo.longitude}"
              },
              "geoRadius": "${geo.geoRadius}"
            },
          }
          `}
      </Script>

      <Breadcrumbs {...seo.breadcrumbs} />

      {SE0.children}
      {/*
        // Rebuild this sometime
        <div className="seo-showcase">
        <h1>SEO Showcase</h1>
        <p key="title"><span className="key">Title</span> = {seo.title}</p>
        <p key="description"><span className="key">Description</span> = {seo.description}</p>
        <p>Description charachter length = <DescLength desc={seo.description} /></p>
        // ? why does this need to be ogImage?
        // regular image doubles the url
        <p key="image"><span className="key">Image</span> = <GetMeta image={seo.ogImage} /></p>
        <IfSeoImage image={seo.ogImage} />
      </div> */}
    </>
  );
};

export default SEO;
