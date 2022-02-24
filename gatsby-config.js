module.exports = {
  siteMetadata: {
    title: "Sierra Lighting",
    siteUrl: "https://sierra.lighting",
    url: "https://sierra.lighting", // No trailing slash allowed!
    description:
      "Dependable holiday, landscape and events light installation in Reno, Truckee, Lake Tahoe, Carson City and Minden.", // 📣
    image: 'src/images/sierra-lighting-og_image.jpg', // 📣 Path to your image you placed in the 'static' folder
    ogImage: 'src/images/sierra-lighting-og_image.jpg', // 📣
    twitterImage: 'src/images/sierra-lighting-og_image.jpg', // 📣
    openingHours: 'Mo, Tu, We, Th, Fr 09:00-17:00', // 📣
    telephone: '(530)542-2662', // 📣
    faxNumber: '(530)542-2661', // 📣
    logo: '/images/icon.png', // ⏰
    areaServed: 'Tahoe, California', // 📣
    author: 'Sierra Lighting',
    paymentAccepted: 'Cash',
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
      options: {
        apiURL: "http://45.79.101.19:1340/api",
        collectionTypes: [
          "testimonials",
        ],
        queryLimit: 1000,
      },
    },
  ]
};