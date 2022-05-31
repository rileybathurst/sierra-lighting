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

  const getVendors = makeRequest(graphql, `
  {
    allStrapiVendor {
      edges {
        node {
          slug
          service
        }
      }
    }
  }
  `).then(result => {
    result.data.allStrapiVendor.edges.forEach(({ node }) => {
      createPage({
        path: `/vendor/${node.slug}`,
        component: path.resolve(`src/templates/vendor.tsx`),
        context: {
          slug: node.slug,
          service: node.service
        },
      })
    })
  }); // .then(result)

  // Query for blog nodes to use in creating pages.
  return Promise.all([
    getVenues,
    getVendors,
    getVendorServices
  ])
}



/*  // * this was trying to create the vendors page without having to manually make each service on the enum
  I havent been able to make it work yet
  does this work doing both queries in the same place?
  const getVendorServicesLoop = makeRequest(graphql, `
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
    Create pages for each partner resorts.
    result.data.allStrapiVendor.edges.forEach(({ node }) => {
      createPage({
        path: `/vendorsloop`,
        component: path.resolve(`src/templates/vendorserviceloop.tsx`),
        context: {
          service: node.service
        },
      })
    })
  }); // .then(result) */