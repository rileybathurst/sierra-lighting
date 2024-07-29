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

  // * gatsby-plugin-sitemap needs this
  siteMetadata: {
    siteUrl: 'https://www.sierralighting.com',
  },
  plugins: [
    // TODO: check in on the update
    {
      resolve: "gatsby-plugin-google-gtag",
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
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("postcss-import"),
          require("autoprefixer"),
          require("postcss-nested"),
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          //, TODO: check as this was off to get under a ram limit bug on netlify it seems to be working May '22
          formats: ["auto", "webp"],
          placeholder: "dominantColor",
          quality: 50,
          breakpoints: [300, 750, 1080, 1366, 1920],
          backgroundColor: "transparent",
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
          "script-src": "'self' 'unsafe-inline' use.typekit.net www.google-analytics.com www.googletagmanager.com https://d3ey4dbjkt2f6s.cloudfront.net/ gstatic.com",
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
      // ? can you query for this?
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Sierra Lighting",
        short_name: "Sierra Lighting",
        start_url: "/",
        background_color: "#fffaf2",
        // TODO: check this white isnt a theme color
        theme_color: "#fff",
        display: "standalone",
        icon: "src/images/sierra-lighting-icon.svg",
      },
    },
    // TODO: this has way more fonts than I'm running
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