const path = require(`path`)

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
}); // makeRequests

// Create blog pages dynamically
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getVenues = makeRequest(graphql, `
    {
      allStrapiVenue {
        edges {
          node {
            slug

            area {
              slug
            }
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each partner resorts.
    result.data.allStrapiVenue.edges.forEach(({ node }) => {
      createPage({
        path: `/venue/${node.slug}`,
        component: path.resolve(`src/templates/venue.tsx`),
        context: {
          slug: node.slug,
          area: node.area.slug
        },
      })
    })
  }); // .then(result)







  // does this work doing both queries in the same place?
  const getVendorServices = makeRequest(graphql, `
    {
      allStrapiVendor {
        edges {
          node {
            service
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each partner resorts.
    result.data.allStrapiVendor.edges.forEach(({ node }) => {
      createPage({
        path: `/vendors/${node.service}`,
        component: path.resolve(`src/templates/vendorservice.tsx`),
        context: {
          service: node.service
        },
      })
    })
  }); // .then(result)

  // Query for blog nodes to use in creating pages.
  return Promise.all([
    getVenues,
    getVendorServices
  ])
}