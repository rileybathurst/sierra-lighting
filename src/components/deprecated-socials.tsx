import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

function DeprecatedSocials({ instagram, facebook, pinterest }: { instagram: string; facebook: string; pinterest: string }): React.JSX.Element {

  // console.log(pinterest, facebook, instagram);

  const data = useStaticQuery(graphql`
      query socialQuery {
        allStrapiSite{
          nodes {
            id
            service
            link
            icon
          }
        }
      }
    `);

  let facebookFormatted = '';
  if (facebook) {
    if (facebook.includes('facebook.com/')) {
      facebookFormatted = facebook.split('facebook.com/')[1];
    }
    if (facebook.includes('/')) {
      facebookFormatted = facebookFormatted.split('/')[0];
    }
    if (!facebookFormatted) {
      facebookFormatted = facebook;
    }
  }

  let instagramFormatted = '';
  if (instagram) {
    if (instagram.includes('instagram.com/')) {
      // instagramFormatted = instagramFormatted.replace('instagram.com/', '');
      instagramFormatted = instagram.split('instagram.com/')[1];
    }
    if (instagram.includes('/')) {
      instagramFormatted = instagramFormatted.split('/')[0];
    }
    if (!instagramFormatted) {
      instagramFormatted = instagram;
    }
  }

  // console.log('instagramFormatted', instagramFormatted);

  let pinterestFormatted = '';
  if (pinterest) {
    if (pinterest.includes('pinterest.com/')) {
      pinterestFormatted = pinterest.split('pinterest.com/')[1];
    }
    if (pinterest.includes('/')) {
      pinterestFormatted = pinterestFormatted.split('/')[0];
    }
    if (!pinterestFormatted) {
      pinterestFormatted = pinterest;
    }
  }

  function validateSanitizeSocialSVG(svgString: string): string | null {
    const trimmedSvg = svgString.trim();
    if (!trimmedSvg.startsWith('<svg')) return null;

    return trimmedSvg.replace(/<title[\s\S]*?<\/title>/gi, '');
  }

  return (
    <ul className="socials">{[
      { id: 'instagram', username: instagramFormatted },
      { id: 'facebook', username: facebookFormatted },
      { id: 'pinterest', username: pinterestFormatted }].filter((social) => social.username).map((social) => {
        const site = data.allStrapiSite.nodes.find((node: { service: string }) => node.service === social.id);

        return (
          <li key={social.id}>
            <a
              href={`${site.link}${social.username}`}
              title={site.service}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* biome-ignore lint/security/noDangerouslySetInnerHtml: social SVG markup is controlled content from Strapi */}
              <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: validateSanitizeSocialSVG(site.icon) || '' }} />
              <span className="sr-only">{site.service}</span>
            </a >
          </li >
        )
      })}
    </ul >
  )
}

export default DeprecatedSocials;







