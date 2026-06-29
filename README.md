# Sierra Lighting

Sierra Lighting marketing site built with Gatsby + React + TypeScript, with Strapi as the CMS.

## Stack

- Gatsby 5
- React 18
- TypeScript (strict mode)
- Strapi via `gatsby-source-strapi`
- PostCSS
- Storybook 10
- Netlify Functions (`netlify/functions`)

## Content Model

Content is sourced from Strapi.

- Collection types include services, projects, areas, lights, venues, vendors, testimonials, team, and more.
- Single types include about, hero, season, feedback, topbar, and other site-level settings.

Most pages query content directly with GraphQL, and additional dynamic routes are created in `gatsby-node.ts`.

## Routing and Dynamic Pages

The build process creates pages such as:

- `/{service-slug}`
- `/{service-slug}/lights/`
- `/{service-slug}/projects/`
- `/{service-slug}/lookbook/` (only when a service has lookbooks)
- `/venue/{slug}`
- `/areas/{slug}` (featured areas)
- `/vendor/{collaborator-slug}/{vendor-slug}`

Vendor redirect behavior:

- `/vendor/{vendor-slug}` redirects to `/vendor/{collaborator-slug}/{vendor-slug}` when collaborator data exists.

## Netlify Functions

Functions live in `netlify/functions`:

- `hello.mts`: simple hello response
- `log-click.mts`: stores click logs in Turso (`pinterest` table)

Frontend test pages exist for function calls:

- `/hello`
- `/click`

When testing functions locally, use Netlify CLI dev mode if you need `/.netlify/functions/*` endpoints.

## Storybook

Start Storybook:

```bash
npm run storybook
```

Build static Storybook:

```bash
npm run build-storybook
```

Storybook is configured with:

- React Webpack 5 framework
- SWC compiler addon
- TS path support via `tsconfig-paths-webpack-plugin`
- Gatsby module mock in `.storybook/__mocks__/gatsby.js`

## Deploy

Primary production site:

- https://sierra.lighting

Deployment target is Netlify (adapter and functions are included in the project dependencies).

## Troubleshooting

- Build fails while sourcing Strapi content:
	- Check `STRAPI_API_URL` and `STRAPI_TOKEN`.
- Google reviews count not showing in footer:
	- Check `GATSBY_GOOGLE_MAPS_API_KEY`.
- Netlify click logging fails:
	- Check `TURSO_KEY` and Turso table availability.
- `fullstart` fails:
	- It depends on `blc` and `pa11y` being available in your environment.
