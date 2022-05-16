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
        path: `/avenuescheck/${node.slug}`,
        component: path.resolve(`src/templates/venuescheck.tsx`),
        context: {
          slug: node.slug,
          area: node.area.slug
        },
      })
    })
  }); // .then(result)

  // Query for blog nodes to use in creating pages.
  return Promise.all([
    getVenues
  ])
}