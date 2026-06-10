// TODO: do some work on the real colors

import React from 'react';
import type { SocialTypes } from '../types/social-types';

function Socials({ services }: { services: SocialTypes[] }): React.JSX.Element {

  return (
    <ul className="socials">
      {services.map((social) => {
        return (
          <li key={social.id}>
            <a
              href={`${social.site.link}${social.username}`}
              title={social.site.service}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* biome-ignore lint/security/noDangerouslySetInnerHtml: social SVG markup is controlled content from Strapi */}
              <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: social.site.svg }} />
              <span className="sr-only">{social.site.service}</span>
            </a>
          </li>
        );
      })}
    </ul>
  )
}

export default Socials;
