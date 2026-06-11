// TODO: organize by light group

import React from 'react';
import { Link, graphql } from "gatsby";
// import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Header from '../components/header';
import Footer from '../components/footer';
import SEO from '../components/seo';
import type { CardType } from '../types/card-type';
import Card from '../components/card';
import Start from '../components/start';
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

type ServiceProjectsTypes = {
  data: {
    strapiService: {
      id: string;
      name: string;
      slug: string;
      excerpt: string;
      projects: (CardType & {
        themes?: {
          id: string;
        }[];
      })[];
    };
    allStrapiTheme: {
      nodes: {
        id: string;
        title: string;
        slug: string;
        excerpt: string;
      }[];
    };
  };
}

const ServiceLightView = ({ data }: ServiceProjectsTypes) => {
  const projects = data.strapiService.projects.toReversed();
  const projectsByThemeId = new Map<string, ServiceProjectsTypes['data']['strapiService']['projects']>();
  const ungroupedProjects: ServiceProjectsTypes['data']['strapiService']['projects'] = [];

  for (const project of projects) {
    const themeIds = project.themes?.map((theme) => theme.id).filter(Boolean) ?? [];

    if (themeIds.length === 0) {
      ungroupedProjects.push(project);
      continue;
    }

    for (const themeId of themeIds) {
      const themeProjects = projectsByThemeId.get(themeId) ?? [];
      themeProjects.push(project);
      projectsByThemeId.set(themeId, themeProjects);
    }
  }

  const hasThemedProjects = data.allStrapiTheme.nodes.some(
    (theme) => (projectsByThemeId.get(theme.id) ?? []).length > 0,
  );

  return (
    <React.Fragment>
      <Header />

      <main>
        <h1>Projects for {data.strapiService.name}</h1>
        <p>{data.strapiService.excerpt}</p>
        <Start />
        <hr />

        {hasThemedProjects && (
          <div className='condor'>
            <h2>Start With A Specific Theme</h2>
            <ul>
              {data.allStrapiTheme.nodes.map((theme) => (
                <li key={theme.id}>
                  <a href={`#${theme.slug}`}>{theme.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

      </main>

      {
        data.allStrapiTheme.nodes.map((theme) => {
          const themeProjects = projectsByThemeId.get(theme.id) ?? [];

          if (themeProjects.length === 0) {
            return null;
          }

          return (
            <section key={theme.id} id={theme.slug}>
              <div className='condor'>
                <h2>{theme.title}</h2>
                <p>{theme.excerpt}</p>
              </div>
              <section className='deck'>
                {themeProjects.map((project) => (
                  <Card
                    key={`${theme.id}-${project.id}`}
                    {...project}
                    breadcrumb='project'
                  />
                ))}
              </section>
              <hr className='condor' />
            </section>
          );
        })
      }

      {
        ungroupedProjects.length > 0 && (
          <section id="other-projects">
            {hasThemedProjects && (
              <div className='condor'>
                <h2>Other Projects</h2>
              </div>
            )}
            <section className='deck'>
              {ungroupedProjects.map((project) => (
                <Card
                  key={`ungrouped-${project.id}`}
                  {...project}
                  breadcrumb='project'
                />
              ))}
            </section>
          </section>
        )
      }

      <hr className='stork' />

      <Breadcrumbs>
        <Breadcrumb><Link to={`/${data.strapiService.slug}`}>{data.strapiService.name} Lighting</Link></Breadcrumb>
        <Breadcrumb>Lights</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </React.Fragment >
  );
};

export default ServiceLightView;

export const query = graphql`
  query ServiceProjectsTemplate(
      $slug: String!,
  ) {

    strapiService(slug: {eq: $slug}) {
      id
      name
      slug
      excerpt

      projects {
          ...projectCard

        themes {
          id
        }
      }
    }

    allStrapiTheme {
      nodes {
        id
        title
        slug
        excerpt
      }
    }

  }
`

export const Head = ({ data }: ServiceProjectsTypes) => {
  return (
    <SEO
      title={`${data.strapiService.name} projects completed by Sierra Lighting`}
      // description={data.strapiService.excerpt}
      url={`${data.strapiService.slug}/projects`}
      breadcrumbs={[
        {
          name: data.strapiService.name,
          item: data.strapiService.slug
        },
        {
          name: `${data.strapiService.name} Projects`,
          item: `${data.strapiService.slug}/projects`
        }
      ]}
    // TODO: image
    />
  )
}
