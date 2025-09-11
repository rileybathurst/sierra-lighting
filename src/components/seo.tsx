// TODO: im getting a @type organization error for address but not sure from where

import React from "react";
import { Script, useStaticQuery, graphql } from "gatsby";
import type VideoTypes from "../types/video-types";
import Season from "./season";

type BreadcrumbsTypes = {
  url: string;
  breadcrumbs: {
    name: string;
    item: string;
  }[];
}
const Breadcrumbs: React.FC<BreadcrumbsTypes> = ({ url, breadcrumbs }) => {

  if (!Object.entries(breadcrumbs).length) return null;

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
                "item": "${url}/${breadcrumb.item}"
              }`
      }).join(',\n')}
            ]
          }
        `}
    </Script>
  );
}

type VideoMuxTypes = {
  videos: VideoTypes[];
  pageUrl: string;
  url: string;
  businessName: string;
}
const VideoMux: React.FC<VideoMuxTypes> = ({ videos, pageUrl, url, businessName }) => {
  if (videos.length === 0) return null;

  return (
    <>
      {videos.map((video) => (
        <Script type="application/ld+json" key={video.mux}>
          {`
              {
                "@context": "https://schema.org",
                "@type": "VideoObject",
                "name": "${video.name}",
                "contentURL": "https://stream.mux.com/${video.mux}.m3u8",
                "description": "${video.description} for ${businessName}",
                "embedUrl": "${url}/${pageUrl}",
                "uploadDate": "${new Date(video.publishedAt).toISOString()}",
                "thumbnailUrl": "https://image.mux.com/${video.mux}/thumbnail.png?width=428&height=242&time=${video.thumbnailTime}"
                }
            `}
        </Script>
      ))}
    </>
  );
}

type SEOtypes = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  breadcrumbs?: BreadcrumbsTypes;
  videos?: VideoTypes[] | null;
}
export const SEO = (SEO: SEOtypes) => {

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

        defaultXmas
        defaultXmasLink
        defaultWedding
        defaultWeddingLink
      }

      allStrapiService {
        nodes {
          name
        }
      }

      allStrapiArea(filter: {featured: {eq: true}}) {
        nodes {
          name
          areas {
            name
          }
        }
      }

    }
  `);

  // console.log(data.allStrapiService.nodes.map((service) => service.name).join(' lighting installation, '));
  // console.log(data.allStrapiArea.nodes.map((area) => area.name).join(', '));
  
  const SeasonalTopbar = (() => {
    if (data.strapiTopbar.title && data.strapiTopbar.default) {
      return data.strapiTopbar.title;
    } else if (Season() === 'xmas') {
      return data.strapiTopbar.defaultXmas;
    } else if (Season() === 'wedding') {
      return data.strapiTopbar.defaultWedding;
    } else {
      console.error('No topbar title set in Strapi');
      return '';
    }
  })();

  return (
    <>
      <title>{SEO.title ? `${SEO.title} | ${data.strapiAbout.businessName}` : `${data.strapiAbout.businessName} | ${SeasonalTopbar}`}</title>
      <meta name="description" content={SEO.description ? SEO.description : data.strapiAbout.slogan} />
      <meta name="image" itemProp="image" content={SEO.image} />

      {/* OG */}
      <meta property="og:type" content="website" />
      <meta property="og:url" itemProp="URL" content={SEO.url} />
      <meta property="og:title" content={SEO.title} />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:image" itemProp="image" content={SEO.image} />

      {/* Twitter */}
      {/* is this twitter I really cant see anyone caring about this for sierra */}
      {/* TODO: do research into who uses other than og: */}
      <meta name="twitter:title" content={SEO.title} />
      <meta name="twitter:description" content={SEO.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={SEO.image} />

      {/* "about": "Creating ${data.allStrapiService.nodes.map((service) => service.name).join(' lighting installation, ')} lighting installations in ${data.allStrapiArea.nodes.map((area) => area.name).join(', ')}", */}

      {/* // ! https://schema.org/keywords */}
      {/* // TODO: about seems like the place to add diversity / LGBTQ+ information */}
      {/* additional info about smart home / timers etc */}

      {/* // TODO: 
      https://schema.org/ContactPoint
      https://schema.org/skills
      https://schema.org/knowsAbout
      https://schema.org/foundingDate
      https://schema.org/foundingLocation
      https://schema.org/Service
      // */}

      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "LocalBusiness",
            "name": "${data.strapiAbout.businessName}",
            "about": "Creating professional ${data.allStrapiService.nodes.map((service) => service.name).join(' lighting installation, ')} lighting installations in ${data.allStrapiArea.nodes.map((area) => area.name).join(', ')}",
            "slogan": "${data.strapiAbout.slogan}",
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
        url={data.strapiAbout.url}
        breadcrumbs={SEO.breadcrumbs ?? []}
      />

      {SEO.videos && (
        <VideoMux
          videos={SEO.videos}
          pageUrl={SEO.url}
          url={data.strapiAbout.url}
          businessName={data.strapiAbout.businessName}
        />
      )}

      {SEO.children}
    </>
  );
};

export default SEO;
