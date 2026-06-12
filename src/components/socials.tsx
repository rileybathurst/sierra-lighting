// TODO: do some work on the real colors

import * as React from 'react';
import type { SocialTypes } from '../types/social-types';

function validateSanitizeSocialSVG(svgString: string): string | null {
  if (!svgString.trim().startsWith('<svg')) return null;

  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, 'image/svg+xml');

  if (doc.querySelector('parsererror')) return null;

  // Gatsby has an issue with inline SVG <title> tags and can break the page SEO title.
  doc.querySelectorAll('title').forEach((titleNode) => {
    titleNode.remove();
  });

  // console.log('Sanitized SVG:', new XMLSerializer().serializeToString(doc.documentElement));

  return new XMLSerializer().serializeToString(doc.documentElement);
}

function Socials({ services }: { services: SocialTypes[] }): React.JSX.Element {

  return (
    <ul className="socials">
      {services.map((social) => {
        const sanitizedSVG = validateSanitizeSocialSVG(social.site.icon);

        return (
          <li key={social.id}>
            <a
              href={`${social.site.link}${social.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {sanitizedSVG ? (
                /* biome-ignore lint/security/noDangerouslySetInnerHtml: social SVG markup is controlled content from Strapi */
                <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: sanitizedSVG }} />
              ) : null}
              <span className="sr-only">{social.site.service}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Socials;
