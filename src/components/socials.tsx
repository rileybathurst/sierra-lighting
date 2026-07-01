// TODO: do some work on the real colors

import * as React from 'react';
import SVG from 'react-inlinesvg';
import type { SocialTypes } from '../types/social-types';

function Socials({ services }: { services: SocialTypes[] }): React.JSX.Element {

  return (
    <ul className="socials">
      {services.map((social) => {
        // const sanitizedSVG = validateSanitizeSocialSVG(social.site.icon);

        return (
          <li key={social.id}>
            <a
              href={`${social.site.link}${social.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.site.icon ? (
                <SVG src={social.site.icon} aria-hidden="true" />
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
