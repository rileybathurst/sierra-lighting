// TODO: do some work on the real colors

import * as React from 'react';
import type { SocialTypes } from '../types/social-types';

function validateSanitizeSocialSVG(svgString: string): string | null {
  const trimmedSvg = svgString.trim();
  if (!trimmedSvg.startsWith('<svg')) return null;

  return trimmedSvg.replace(/<title[\s\S]*?<\/title>/gi, '');
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
