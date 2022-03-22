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
    openingHours: 'Mo, Tu, We, Th, Fr 09:00-17:00', // 📣
    telephone: '(775) 525-1898', // nevada number
    email: 'sierrachristmaslights@gmail.com',
    logo: '/images/icon.png', // 📣
    areaServed: 'Tahoe, California', // 📣
    author: 'Sierra Lighting',
    paymentAccepted: 'Cash',
    itemType: 'LocalBusiness',

    titleColor: 'red', // testing
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-PSZ3PWKQSC"
    }
  }, "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp",
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
        mergeScriptHashes: false, // you can disable scripts sha256 hashes
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        directives: {
          "script-src": "'self' 'unsafe-inline' www.google-analytics.com",
          "style-src": "'self' 'unsafe-inline' use.typekit.net",
          "img-src": "'self' data:"
          // you can add your directives or override defaults
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NFVF3W7 ",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
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
  ]
};