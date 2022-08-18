require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    'area',
    'testimonial',
    'vendor',
    'venue',
    'light',
    'far',
    'topbar',
    'project',
    'team',
    'affiliation',
  ],
  singleTypes: [],
};

module.exports = {
  siteMetadata: {
    title: "Sierra Lighting",
    siteUrl: "https://sierra.lighting",
    url: "https://sierra.lighting", // No trailing slash allowed!
    description:
      "Dependable holiday, landscape and events light installation in Reno, Truckee, Lake Tahoe, Carson City and Minden.", // 📣
    image: 'https://sierralighting.s3.us-west-1.amazonaws.com/sierra-lighting-og_image.jpg', // 📣 Path to your image you placed in the 'static' folder
    ogImage: 'https://sierralighting.s3.us-west-1.amazonaws.com/sierra-lighting-og_image.jpg', // 📣
    twitterImage: 'https://sierralighting.s3.us-west-1.amazonaws.com/sierra-lighting-og_image.jpg', // 📣
    openingHours: 'Mo, Tu, We, Th, Fr, Sa, Su 08:00-18:00',
    telephone: '(775) 525-1898', // nevada number
    email: 'sierrachristmaslights@gmail.com',
    logo: '/images/icon.png',
    areaServed: 'tahoe', // Im doing a lot with this in seo.tsx
    author: 'Sierra Lighting',
    paymentAccepted: 'Cash check venmo credit card',
    itemType: 'LocalBusiness',
    priceRange: '$500-1500',
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-PSZ3PWKQSC",
      head: true,
    }
  },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      defaults: {
        formats: [`auto`, `webp`],  //, this was off to get under a ram limit bug on netlify it seems to be working May '22
        placeholder: `dominantColor`,
        quality: 50,
        breakpoints: [300, 750, 1080, 1366, 1920],
        backgroundColor: `transparent`,
        tracedSVGOptions: {},
        blurredOptions: {},
        jpgOptions: {},
        pngOptions: {},
        webpOptions: {},
        avifOptions: {},
      }
    }
  },
    "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
    'gatsby-plugin-netlify',
  {
    resolve: "gatsby-source-strapi",
    options: strapiConfig,
  },
  {
    resolve: `gatsby-plugin-csp`,
    options: {
      mergeSecurityHeaders: true, // ? testing june 18 2022 csp issue // boolean to turn off the default security headers
      mergeScriptHashes: false, // you can disable scripts sha256 hashes
      mergeStyleHashes: false, // you can disable styles sha256 hashes
      directives: {
        "script-src": "'self' 'unsafe-inline' use.typekit.net www.google-analytics.com https://d3ey4dbjkt2f6s.cloudfront.net/",
        "style-src": "'self' 'unsafe-inline' use.typekit.net https://d3ey4dbjkt2f6s.cloudfront.net/",
        "font-src": "'self' 'unsafe-inline' use.typekit.net data:",
        "img-src": "'self' p.typekit.net https://www.google-analytics.com data: about:", // I think use.typekit.net is a tracking pixel
        "connect-src": "'self' data:  https://www.google-analytics.com/"
        // you can add your directives or override defaults
      }
    }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Sierra Lighting`,
      short_name: `Sierra Lighting`,
      start_url: `/`,
      background_color: `#fffaf2`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: "src/images/sierra-lighting-icon.svg",
    },
  },
  {
    resolve: "gatsby-plugin-web-font-loader",
    options: {
      typekit: {
        id: process.env.TYPEKIT_ID,
      },
    },
  },
  ]
};