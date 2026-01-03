const path = require(`path`);

import type { GatsbyNode } from 'gatsby';

exports.onPostBuild = (({ reporter }) => {
  reporter.info('Your Gatsby site has been built!')
}) as GatsbyNode['onPostBuild'];

exports.createPages = (async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const getServices = await graphql<{
    allStrapiService: { edges: { node: { slug: string } }[] }
  }>(`
    query {
      allStrapiService {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (!getServices.data) {
    reporter.panicOnBuild(`GraphQL query for services failed: ${JSON.stringify(getServices.errors)}`);
    return;
  }

  for (const { node } of getServices.data.allStrapiService.edges) {
    if (!node || !node.slug) {
      reporter.warn(`Skipping service page creation because node.slug is missing or node is null: ${JSON.stringify(node)}`);
      continue;
    }

    createPage({
      path: `/${node.slug}`,
      component: path.resolve("src/templates/service.tsx"),
      context: {
        slug: node.slug,
      },
    });
  }

  // * Im also using /christmas-lights/ which might be replaced with a node query before here
  const getServiceLights = await graphql<{
    allStrapiService: { edges: { node: { slug: string } }[] }
  }>(`
    query {
      allStrapiService {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (!getServiceLights.data) {
    reporter.panicOnBuild(`GraphQL query for service lights failed: ${JSON.stringify(getServiceLights.errors)}`);
    return;
  }

  for (const { node } of getServiceLights.data.allStrapiService.edges) {
    if (!node || !node.slug) {
      reporter.warn(`Skipping service-lights page creation because node.slug is missing or node is null: ${JSON.stringify(node)}`);
      continue;
    }

    createPage({
      path: `/${node.slug}/lights/`,
      component: path.resolve("src/templates/service-lights.tsx"),
      context: {
        slug: node.slug,
      },
    });
  }

  const getServiceProjects = await graphql<{
    allStrapiService: { edges: { node: { slug: string } }[] }
  }>(`
    query {
      allStrapiService {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (!getServiceProjects.data) {
    reporter.panicOnBuild(`GraphQL query for service projects failed: ${JSON.stringify(getServiceProjects.errors)}`);
    return;
  }

  for (const { node } of getServiceProjects.data.allStrapiService.edges) {
    if (!node || !node.slug) {
      reporter.warn(`Skipping service-lights page creation because node.slug is missing or node is null: ${JSON.stringify(node)}`);
      continue;
    }

    createPage({
      path: `/${node.slug}/projects/`,
      component: path.resolve("src/templates/service-projects.tsx"),
      context: {
        slug: node.slug,
      },
    });
  }

  const getVenues = await graphql<{
    allStrapiVenue: { edges: { node: { slug: string; area: { slug: string } } }[] }
  }>(`
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
  `);

  if (!getVenues.data) {
    reporter.panicOnBuild(`GraphQL query for venues failed: ${JSON.stringify(getVenues.errors)}`);
    return;
  }

  for (const { node } of getVenues.data.allStrapiVenue.edges) {
    if (!node || !node.slug) {
      reporter.warn(`Skipping venue page creation because node.slug is missing or node is null: ${JSON.stringify(node)}`);
      continue;
    }

    createPage({
      path: `/venue/${node.slug}`,
      component: path.resolve("src/templates/venue.tsx"),
      context: {
        slug: node.slug,
        area: node.area ? node.area.slug : undefined,
      },
    });
  }

  // * /vendor/envyeventmanagement/
  const getVendors = await graphql<{
    allStrapiVendor: { edges: { node: { slug: string; collaborator: { slug: string } } }[] }
  }>(`
    query {
      allStrapiVendor {
        edges {
          node {
            slug
            collaborator {
              slug
            }
          }
        }
      }
    }
  `);

  if (!getVendors.data) {
    reporter.panicOnBuild(`GraphQL query for vendors failed: ${JSON.stringify(getVendors.errors)}`);
    return;
  }

  for (const { node } of getVendors.data.allStrapiVendor.edges) {
    if (!node || !node.slug) {
      reporter.warn(`Skipping vendor page creation because node.slug is missing or node is null: ${JSON.stringify(node)}`);
      continue;
    }

    createPage({
      path: `/vendor/${node.slug}`,
      component: path.resolve("src/templates/vendor.tsx"),
      context: {
        slug: node.slug,
        collaborator: node.collaborator ? node.collaborator.slug : undefined,
      },
    });
  }

  const getAreas = await graphql<{
    allStrapiArea: { edges: { node: { slug: string } }[] }
  }>(`
    query {
      allStrapiArea(filter: {featured: {eq: true}}) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (!getAreas.data) {
    reporter.panicOnBuild(`GraphQL query for areas failed: ${JSON.stringify(getAreas.errors)}`);
    return;
  }

  for (const { node } of getAreas.data.allStrapiArea.edges) {

    if (!node || !node.slug) {
      reporter.warn(`Skipping area page creation because node.slug is missing or node is null: ${JSON.stringify(node)}`);
      continue;
    }

    createPage({
      path: `/areas/${node.slug}`,
      component: path.resolve("src/templates/areas.tsx"),
      context: {
        slug: node.slug,
      },
    });
  }
  
  const getLookBooks = await graphql<{
    allStrapiService: { edges: { node: { slug: string; lookbooks?: { id: string }[] } }[] }
  }>(`
    query {
      allStrapiService {
        edges {
          node {
            slug
            lookbooks {
              id
            }
          }
        }
      }
    }
  `);

  if (!getLookBooks.data) {
    reporter.panicOnBuild(`GraphQL query for lookbooks failed: ${JSON.stringify(getLookBooks.errors)}`);
    return;
  }

  for (const { node } of getLookBooks.data.allStrapiService.edges) {
    if (!node || !node.slug) {
      reporter.warn(`Skipping lookbook page creation because node.slug is missing or node is null: ${JSON.stringify(node)}`);
      continue;
    }

    if (node.lookbooks && node.lookbooks.length > 0) {
      createPage({
        path: `/${node.slug}/lookbook/`,
        component: path.resolve("src/templates/lookbook.tsx"),
        context: {
          slug: node.slug,
        },
      });
    }
  }
}) as GatsbyNode['createPages'];