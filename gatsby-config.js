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
    'project',
    'team',
    'affiliation',
    'image-grab',
    'light-group',
    'service',
    'process',
    'showcase',
    'quality',
    'lookbook',
  ],
  singleTypes: [
    'topbar',
    'season',
    'about',
    'hero',
    'area-exploratrion',
    'minimum'
  ],
  remoteFileHeaders: {
    Referer: "http://45.79.101.19:1343",
  },
};

module.exports = {
  graphqlTypegen: true,
  /*   siteMetadata: {
      title: "Sierra Lighting",
      siteTitle: "Sierra Lighting",
      siteUrl: "https://sierra.lighting/",
      url: "https://sierra.lighting", // No trailing slash allowed!
      slogan: 'Dependable wedding, event, landscape and Christmas light installation',
      defaultImage: 'https://sierralighting.s3.us-west-1.amazonaws.com/sierra-lighting-og_image.jpg',
      defaultImageAlt: 'Sierra Lighting created a beautiful holiday light display', // TODO: wedding
      openingHours: 'Mo, Tu, We, Th, Fr, Sa, Su 08:00-18:00',
      telephone: '(775) 525-1898', // nevada number
      email: 'info@sierra.lighting',
      logo: '/images/icon.png',
      author: 'Sierra Lighting',
      paymentAccepted: 'Cash check venmo credit card',
      itemType: 'LocalBusiness',
      priceRange: '$1000-2500',
      alternateName: 'Sierra Christmas Lights', // TODO: add this to the schema
      geo: {
        latitude: "39.32817",
        longitude: "-120.18404",
        geoRadius: "80470",
      },
    }, */
  plugins: [
    // TODO: check in on the update
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GA, // Google Analytics / GA
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: [
          ],
          delayOnRouteUpdate: 0,
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-import`),
          require("autoprefixer"),
          require("postcss-nested"),
        ],
      },
    },
    "gatsby-plugin-image",
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
    {
      resolve: "gatsby-source-strapi",
      options: strapiConfig,
    },
    {
      resolve: 'gatsby-plugin-csp',
      options: {
        mergeSecurityHeaders: true, // ? testing june 18 2022 csp issue // boolean to turn off the default security headers
        mergeScriptHashes: false, // you can disable scripts sha256 hashes
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        directives: {
          "script-src": "'self' 'unsafe-inline' use.typekit.net www.google-analytics.com www.googletagmanager.com https://d3ey4dbjkt2f6s.cloudfront.net/",
          "style-src": "'self' 'unsafe-inline' use.typekit.net https://d3ey4dbjkt2f6s.cloudfront.net/",
          "font-src": "'self' 'unsafe-inline' use.typekit.net data:",
          "img-src": "'self' p.typekit.net https://www.google-analytics.com *.mux.com data: about:", // I think use.typekit.net is a tracking pixel
          "connect-src": "'self' data:  https://www.google-analytics.com/ *.mux.com *.litix.io",
          "media-src": "'self' data: https://www.google-analytics.com/ *.mux.com"
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
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: process.env.SENTRY_DSN, // this is the default
      },
    },
  ]
};