// TODO: do some work on the real colors
// TODO: if a profile string or the full url

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import type { SocialTypes } from '../types/social-types';

type AllStrapiSocialNode = {
  service: string;
  link?: string;
  svg?: string;
};

type SocialsQueryType = {
  allStrapiSocialSites: {
    nodes: AllStrapiSocialNode[];
  };
};

void React;

function SocialIcons({ services }: { services: SocialTypes[] }): React.JSX.Element {

  // ! this is now it about.socials
  const { allStrapiSocialSite } = useStaticQuery<SocialsQueryType>(graphql`
      query SocialsQuery {
        allStrapiSocialSite {
          nodes {
            service
            link
            svg
          }
        }
      }
    `)

  const socialByService = new Map<string, AllStrapiSocialNode>(
    allStrapiSocialSite.nodes.map((node) => [node.service.toLowerCase(), node])
  );

  return (
    <ul className="socials">
      {services.map((social) => {
        const matchedSocial = socialByService.get(social.service.toLowerCase());

        if (!matchedSocial?.svg || !social.username) {
          return null;
        }

        const href = social.username.startsWith('http')
          ? social.username
          : `${matchedSocial.link || ''}${social.username}`;
        // biome-ignore lint/security/noDangerouslySetInnerHtml: social SVG markup is controlled content from Strapi
        const icon = <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: matchedSocial.svg }} />;

        return (
          <li key={social.service}>
            <a
              href={href}
              title={social.service}
              target="_blank"
              rel="noreferrer"
            >
              {icon}
              <span className="sr-only">{social.service}</span>
            </a>
          </li>
        );
      })}
    </ul>
  )
}

export default SocialIcons;
