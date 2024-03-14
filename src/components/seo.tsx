// Moving to the new version I lost the SEOShowcase component I still kind of want to rebuild that

// https://www.gatsbyjs.com/docs/add-seo-component/

import React from "react";
import { Script } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata";

// https://blog.spotibo.com/meta-description-length/
// less than 120 characters is good
// more than 160 characters is bad

/* // TODO this could be behind a state flag
function DescLength(props: { desc: any; }) {
  const desc = props.desc;
  const length = desc.length;

  if (length >= 160) {
    return <span className="bad key">{length} = Too long</span>;
  } else if (length >= 120) {
    return <span className="good key">{length} = Great</span>;
  } else {
    return <span className="bad key">{length} = Too Short</span>;
  }
} */

/* function IfSeoImage(props: { image: string | undefined; }) {
  // TODO: this could be a ternary
  if (props.image) {

    let imagealt = props.image ? props.image : 'seo checking';

    return (
      <>
        {/* // TODO: I should do more with the alt
<img src={props.image} alt={imagealt} />
      </>
    )
  } else {
  return null;
}
} */

interface SEO {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

// Im not sure what the rules on what goes here vs in the array?
export const SEO = (SE0: SEO) => {

  const {
    siteUrl,
    defaultDescription,
    defaultImage,
    defaultImageAlt,
    telephone,
    email,
    openingHours,
    areaServed,
    paymentAccepted,
  } = useSiteMetadata()

  const seo = {
    title: SE0.title,
    description: SE0.description || defaultDescription,
    image: SE0.image || defaultImage,
    imageAlt: SE0.imageAlt || defaultImageAlt,
    url: SE0.url || siteUrl,
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
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={seo.image} />
      <meta name="openingHours" itemProp="openingHours" content={openingHours} />
      <meta name="telephone" itemProp="telephone" content={telephone} />
      <meta name="paymentAccepted" itemProp="paymentAccepted" content={paymentAccepted} />

      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "LocalBusiness",
            "name": "${seo.title}",
            "url": "${siteUrl}${seo.url}",
            "siteurl": "${siteUrl}",
            "description": "${seo.description}",
            "image": "${seo.image}",
            "openingHours": "${openingHours}",
            "paymentAccepted": "${paymentAccepted}",
            "telephone": "${telephone}"
            "email": ${email}",
          }
        `}
      </Script>
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
