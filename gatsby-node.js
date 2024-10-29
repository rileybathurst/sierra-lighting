const path = require('node:path');

exports.onPostBuild = ({ reporter }) => {
  reporter.info('Your Gatsby site has been built!')
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const getServices = await graphql(`
    query {
      allStrapiService {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  for (const { node } of getServices.data.allStrapiService.edges) {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve("src/templates/service.tsx"),
      context: {
        slug: node.slug,
      },
    })
  }

  // * Im also using /christmas-lights/ which might be replaced with a node query before here
  const getServiceLights = await graphql(`
    query {
      allStrapiService {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  for (const { node } of getServiceLights.data.allStrapiService.edges) {
    createPage({
      path: `/${node.slug}/lights/`,
      component: path.resolve("src/templates/service-lights.tsx"),
      context: {
        slug: node.slug,
      },
    })
  }

  const getVenues = await graphql(`
    query {
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
  `)

  for (const { node } of getVenues.data.allStrapiVenue.edges) {
    createPage({
      path: `/venue/${node.slug}`,
      component: path.resolve("src/templates/venue.tsx"),
      context: {
        slug: node.slug,
        area: node.area.slug,
      },
    })
  }

  // * /vendor/photography/
  const getVendorServices = await graphql(`
    query {
      allStrapiVendor {
        edges {
          node {
            service
          }
        }
      }
    }
  `)

  for (const { node } of getVendorServices.data.allStrapiVendor.edges) {
    createPage({
      path: `/vendor/${node.service}`,
      component: path.resolve("src/templates/vendorservice.tsx"),
      context: {
        service: node.service,
      },
    })
  }

  // * /vendor/envyeventmanagement/
  const getVendors = await graphql(`
    query {
      allStrapiVendor {
        edges {
          node {
            slug
            service
          }
        }
      }
    }
  `)

  for (const { node } of getVendors.data.allStrapiVendor.edges) {
    createPage({
      path: `/vendor/${node.slug}`,
      component: path.resolve("src/templates/vendor.tsx"),
      context: {
        slug: node.slug,
        service: node.service,
      },
    })
  }

  const getAreas = await graphql(`
    query {
      allStrapiArea(filter: {featured: {eq: true}}) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  for (const { node } of getAreas.data.allStrapiArea.edges) {
    createPage({
      path: `/areas/${node.slug}`,
      component: path.resolve("src/templates/areas.tsx"),
      context: {
        slug: node.slug,
      },
    })
  }

  const getLookBooks = await graphql(`
    query {
      allStrapiService {
        edges {
          node {
            slug
            lookbook {
              id
            }
          }
        }
      }
    }
  `)

  // console.log('🦄');
  // console.log(getLookBooks);
  // console.log(getLookBooks.data.allStrapiService.edges);

  // this isnt looped
  // console.log(getLookBooks.data.allStrapiService.edges.node?.lookbook);

  for (const { node } of getLookBooks.data.allStrapiService.edges) {

    console.log('🦄');
    console.log(node);
    console.log(node?.lookbook);

    if (node?.lookbook) {

      console.log('🦖');
      console.log(`/${node.slug}/lookbook/`);

      createPage({
        path: `/${node.slug}/2/lookbook/`,
        component: path.resolve("src/templates/lookbook.tsx"),
        context: {
          slug: node.slug,
        },
      })
    }
  }
}