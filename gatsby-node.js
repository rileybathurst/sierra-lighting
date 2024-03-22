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

  const getServices = makeRequest(graphql, `
    {
      allStrapiService {
        edges {
          node {
            slug
          }
        }
      }
    }
    `).then(result => {

    result.data.allStrapiService.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/service.tsx`),
        context: {
          slug: node.slug,
        },
      })
    })
  }); // .then(result)

  // why did I do this?
  // this is slightly different that what it currently does
  // it should actuall be service lights
  // at the moment its just lights
  // ! Still working on this
  const getServiceLights = makeRequest(graphql, `
    {
      allStrapiService {
        edges {
          node {
            slug
          }
        }
      }
    }
    `).then(result => {

    result.data.allStrapiService.edges.forEach(({ node }) => {
      createPage({
        path: `${node.slug}/lights/`,
        component: path.resolve(`src/templates/service-lights.tsx`),
        context: {
          slug: node.slug,
        },
      })
    })
  }); // .then(result)

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

  // * Im creating this twice to do
  // vendors aka vendor/twinefloralco
  // vendorservice aka vendors/floral

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

    result.data.allStrapiVendor.edges.forEach(({ node }) => {
      createPage({
        path: `/vendors/${node.service}`,
        component: path.resolve(`src/templates/vendorservice.tsx`),
        context: {
          service: node.service
        },
      })
    })
  }); // .then(result) */

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
  });

  const getLookbook = makeRequest(graphql, `
    {
      allStrapiLookbook {
        edges {
          node {
            spread
          }
        }
      }
    }
    `).then(result => {
    result.data.allStrapiLookbook.edges.forEach(({ node }) => {
      createPage({
        path: `/lookbook/${node.spread}`,
        component: path.resolve(`src/templates/lookbook-spread.tsx`),
        context: {
          spread: node.spread
        },
      })
    })
  });

  const getAreas = makeRequest(graphql, `
    {
      allStrapiArea {
        edges {
          node {
            slug
            featured
          }
        }
      }
    }
    `).then(result => {
    result.data.allStrapiArea.edges.forEach(({ node }) => {
      if (node.featured === true) {
        createPage({
          path: `/areas/${node.slug}`,
          component: path.resolve(`src/templates/areas.tsx`),
          context: {
            slug: node.slug
          },
        })
      }
    })

    // }
  });

  // const getServices = makeRequest(graphql, `

  // Query for blog nodes to use in creating pages.
  return Promise.all([
    getServices,
    getServiceLights,
    getVenues,
    getVendors,
    getVendorServices,
    getLookbook,
    getAreas,
    // getLights
  ])
}



/*  // TODO: this was trying to create the vendors page without having to manually make each service on the enum
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
        path: `/ vendorsloop`,
        component: path.resolve(`src / templates / vendorserviceloop.tsx`),
        context: {
          service: node.service
        },
      })
    })
  }); // .then(result) */