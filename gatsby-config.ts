require("dotenv").config({
  path: ".env",
});

const strapiConfig = {
  accessToken: process.env.STRAPI_TOKEN,
  apiURL: process.env.STRAPI_API_URL,
  collectionTypes: [
    "affiliation",
    "area",
    "bulb",
    "collaborator",
    "far",
    "form",
    "image-grab",
    "job",
    "keyword",
    "light",
    "light-connection",
    "light-group",
    "lookbook",
    "process",
    "project",
    "quality",
    "service",
    "showcase",
    "site",
    "team",
    "testimonial",
    // "vendor",
    {
      singularName: "vendor",
      queryParams: {
        // Strapi REST equivalent: populate[0]=social&populate[1]=social.site
        populate: [
          "social",
          "social.site",
          "collaborator",
          "profile",
          "testimonials",
          "projects",
        ],
      },
    },
    "venue",
    "video",
  ],
  remoteFileHeaders: {
    Referer: process.env.STRAPI_API_URL,
  },
  singleTypes: [
    {
      singularName: "about",
      queryParams: {
        // Strapi REST equivalent: populate[0]=social&populate[1]=social.site
        populate: ["social", "social.site"],
      },
    },
    // "about",
    "area-exploratrion",
    "error",
    "feedback",
    "hero",
    "lookbook-description",
    "minimum",
    "safety",
    "season",
    "topbar",
    "vendor-description",
    "work",
  ],
};

module.exports = {
  graphqlTypegen: true,

  // * gatsby-plugin-sitemap needs this
  siteMetadata: {
    siteUrl: "https://sierra.lighting",
  },
  plugins: [
    /* {
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
          exclude: [],
          delayOnRouteUpdate: 0,
        },
      },
    }, */
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
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-strapi",
      options: strapiConfig,
    },
    {
      resolve: "gatsby-plugin-csp",
      options: {
        // mergeSecurityHeaders: true, // this is default why am I even writing it
        mergeScriptHashes: false, // you can disable scripts sha256 hashes
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        directives: {
          "script-src":
            "'self' 'unsafe-inline' www.google-analytics.com www.googletagmanager.com gstatic.com *.gstatic.com https://d3ey4dbjkt2f6s.cloudfront.net/ https://assets.pinterest.com/",
          "style-src":
            "'self' 'unsafe-inline' fonts.googleapis.com https://d3ey4dbjkt2f6s.cloudfront.net/",
          "font-src": "'self' 'unsafe-inline' data:",
          "img-src":
            "'self' https://www.google-analytics.com https://www.googletagmanager.com *.mux.com https://log.pinterest.com/ data: about:", // I think use.typekit.net is a tracking pixel
          "connect-src":
            "'self' data:  https://www.google-analytics.com/ https://places.googleapis.com/ *.mux.com *.litix.io",
          "media-src":
            "'self' data: https://www.google-analytics.com/ *.mux.com blob:",
          // you can add your directives or override defaults
          "frame-src": "'self' https://assets.pinterest.com/",
        },
      },
    },
    // 29 June 2026
    // with gatsby-plugin-csp on
    // community plugin hasnt been touched in 4 years
    // https://developer.mozilla.org/en-US/observatory/analyze?host=Sierra.lighting
    // B: Score 75/100 Tests Passed 8 / 10
    // Content Security Policy (CSP)
    // −20 Failed
    // Content Security Policy (CSP) implemented unsafely. This includes 'unsafe-inline' or data: inside script-src, overly broad sources such as https: inside object-src or script-src, or not restricting the sources for object-src or script-src.
    // Remove unsafe-inline and data: from script-src, overly broad sources from object-src and script-src, and ensure object-src and script-src are set.

    // Subresource Integrity
    // −5 Failed
    // Subresource Integrity (SRI) not implemented, but all external scripts are loaded over HTTPS.
    // Add SRI to external scripts.

    /*     {
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
    }, */
    // Im pretty sure this is putting in the char utf-8 meta tag in the head of the page but I was having issues with it so I moved it to gatsby-ssr

    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: process.env.SENTRY_DSN, // this is the default
      },
    },
  ],
};
