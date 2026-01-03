import * as React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../../components/seo";
import type { GatsbyImageType } from "../../types/gatsby-image";
import type { CardType } from "../../types/card-type";

import { Breadcrumbs, Breadcrumb } from "react-aria-components";
// import Markdown from "react-markdown";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/card";
import Start from "../../components/start";
import Hero from "../../components/hero";
import Collage from "../../components/collage";
import type { CollageType } from "../../types/collage-type";

interface AliasTypes {
	alias: string;
}
function Aliases({ alias }: AliasTypes) {
	// this combines with a specific regex in strapi
	// testing with market lights
	// console.log(light.alias);
	const split = alias.split("\n").map((line: string) => line.replace("- ", ""));

	return (
		<>
			<h3 className="kilimanjaro">Also known as:</h3>
			<ul>
				{split.map((aka: string) => {
					return (
						<li key={aka} className="capitalize">
							{aka}
						</li>
					);
				})}
			</ul>
			<hr />
		</>
	);
}

export const query = graphql`
	query LightQuery($slug: String!) {
		strapiLight(slug: { eq: $slug }) {
			id
			name
			slug
			excerpt
			description

			services {
				...collageFragment
			}

			light_groups {
				id
				name
				slug

				lights {
				...lightCard
				}
			}

			alias

			image {
				localFile {
					url
					childImageSharp {
						gatsbyImageData(
						breakpoints: [960, 1920]
						width: 960
						)
					}
				}
				alternativeText
				caption
			}

			detail {
				localFile {
					url
					childImageSharp {
						gatsbyImageData(
						breakpoints: [960, 1920]
						width: 960
						)
					}
				}
				alternativeText
			}

			projects {
				...projectCard
			}

			altGallery {
				localFile {
					url
					childImageSharp {
						gatsbyImageData(
						breakpoints: [960, 1920]
						width: 960
						)
					}
				}
				alternativeText
			}
		}


		inConnection: allStrapiLightConnection(
			filter: {
				starting_light: {slug: {eq: $slug}}
			}
		) {
			nodes {
				name
				excerpt
				ending_light {
					...lightCard
				}
			}
		}
		
		outConnection: allStrapiLightConnection(
			filter: {
				ending_light: {slug: {eq: $slug}}
			}
		) {
			nodes {
				name
				excerpt
				starting_light {
					...lightCard
				}
			}
		}

		allStrapiLight(limit: 3, filter: {slug: {nin: [$slug] }}) {
			nodes {
				...lightCard
			}
		}

		holiday: allStrapiProcess(
			filter: {services: {elemMatch: {slug: {eq: "residential"}}}},
			sort: {order: ASC}
			) {
			nodes {
				id
				name
			}
		}
		
		wedding: allStrapiProcess(
			filter: {services: {elemMatch: {slug: {eq: "wedding"}}}},
			sort: {order: ASC}
			) {
			nodes {
				id
				name
			}
		}

		allStrapiProject(
			filter: {lights: {elemMatch: {slug: {in: [$slug]}}}},
			sort: {updatedAt: DESC},
			limit: 3
			) {
			nodes {
				...projectCard
			}
		}

		strapiAbout {
			url
		}

	}
`;

type ConnectionType = {
	name: string;
	excerpt: string;
	starting_light?: CardType;
	ending_light?: CardType;
};

type LightPageTypes = {
	data: {
		strapiLight: {
			id: React.Key;
			name: string;
			slug: string;
			excerpt?: string | null;
			description?: string | null;
			services: CollageType["services"];
			light_groups?: {
				id: React.Key;
				name: string;
				slug: string;
				lights: CardType[];
			}[];
			alias?: string | null;
			image?: GatsbyImageType | null;
			detail?: GatsbyImageType | null;
			altGallery?: GatsbyImageType[] | null;
			projects?: CardType[] | null;
		};
		allStrapiLight: {
			nodes: CardType[];
		};
		allStrapiProject: {
			nodes: CardType[];
		};
		wedding: {
			nodes: {
				id: React.Key;
				name: string;
			}[];
		};
		holiday: {
			nodes: {
				id: React.Key;
				name: string;
			}[];
		};
		strapiAbout: {
			url: string;
		};

		inConnection: {
			nodes: ConnectionType[];
		};
		outConnection: {
			nodes: ConnectionType[];
		};
	};
};
const LightPage = ({ data }: LightPageTypes) => {
	process.env.NODE_ENV === "development"
		? data.strapiLight.image
			? null
			: console.warn(`${data.strapiLight.name} image is missing`)
		: null;

	process.env.NODE_ENV === "development"
		? data.strapiLight.image?.alternativeText
			? null
			: console.warn(`${data.strapiLight.name} image has no alt`)
		: null;
	// console.log(projects);

	let holidayLight = false;
	let weddingLight = false;

	if (
		data.strapiLight.services.every(
			(service) =>
				service.slug === "residential" || service.slug === "commercial",
		)
	) {
		// console.log('this is a holiday light');
		holidayLight = true;
	} else {
		// console.log('this is a wedding light');
		weddingLight = true;
	}

	const lightConnections = [
		...data.inConnection.nodes,
		...data.outConnection.nodes,
	];

	return (
		<>
			<Header />

			<Hero
				image={data.strapiLight.image ? data.strapiLight.image : undefined}
				name={data.strapiLight.name}
				detail={data.strapiLight.detail ? data.strapiLight.detail : undefined}
				gallery={data.strapiLight?.altGallery ? data.strapiLight?.altGallery : undefined}
				badge={true}
			/>

			<main>
				<article className="stork">
					<h1 className="denali">
						{data.strapiLight.name}
						{holidayLight ? (
							<span> For Christmas Lighting</span>
						) : null}
						{weddingLight ? (
							<span> For Wedding Lighting</span>
						) : null}
					</h1>

					{data.strapiLight.alias ? (
						<Aliases alias={data.strapiLight.alias} />
					) : null}

					<p>{data.strapiLight.description}</p>
					<hr />
					<Start path={data.strapiLight.slug} />
				</article>
			</main>

			{lightConnections.length > 0 ? (
				<section>
					<hr className="stork" />
					<h3 className="stork">Ways to make your {data.strapiLight.name} shine</h3>
					<div className="deck">
						{lightConnections.map((connection) => {
							const light = connection.starting_light || connection.ending_light;
							return (
								light && (
									<Card
										key={connection.name}
										{...light}
										excerpt={connection.excerpt}
										breadcrumb="light"
									/>
								)
							);
						})}
					</div>
				</section>
			) : null}

			{/* // TODO: this isnt a card but its a little something closer to the idea, needs a new name possibly on a layering device */}
			<hr className="stork" />
			<section className="">
				<h3 className="stork crest">We use {data.strapiLight.name} for</h3>

				<Collage services={data.strapiLight.services} />
			</section>

			<section className="stork">
				<hr />
				<h3>
					<Link to="/process">Learn more about our process</Link>
				</h3>
				<ol>
					{data.strapiLight.services.every(
						(service) =>
							service.slug === "residential" || service.slug === "commercial",
					)
						? data.holiday.nodes.map((process) => {
							return <li key={process.id}>{process.name}</li>;
						})
						: data.wedding.nodes.map((process) => {
							return <li key={process.id}>{process.name}</li>;
						})}
				</ol>

				{/* // TODO: design this in storybook  */}
				<h3 className="stork kilimanjaro capitalize">
					<Link to="/faqs">Frequently Asked Questions</Link>
				</h3>
			</section>

			{/* // TODO: atleast one of these divs is just a react fragment but dont break the css by just removing stuff */}
			{data.strapiLight.light_groups ? (
				<div>
					{data.strapiLight.light_groups.map((group) => {
						return (
							<div key={group.id}>
								<hr className="stork" />
								<h3 className="stork">Other Lights in {group.name}</h3>

								<div className="deck">
									{group.lights
										.filter(
											(lightSlug) => lightSlug.slug !== data.strapiLight.slug,
										)
										.map((light: CardType) => (
											<Card key={light.id} {...light} breadcrumb="light" />
										))}
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<>
					<hr className="stork" />
					<h3 className="stork">Other Lights</h3>
					<div className="deck">
						{data.allStrapiLight.nodes.map((light: CardType) => (
							<Card key={light.id} {...light} breadcrumb="light" />
						))}
					</div>
				</>
			)}

			{/* // TODO: if more than 3 */}
			{data.allStrapiProject.nodes.length > 0 ? (
				<>
					<div className="stork">
						<hr />
						<h3>Projects Using {data.strapiLight.name}</h3>
					</div>

					<div className="deck">
						{data.allStrapiProject.nodes.map((project: CardType) => (
							<Card key={project.id} {...project} breadcrumb="project" />
						))}
					</div>
				</>
			) : null}

			<hr className="stork" />

			<Breadcrumbs>
				<Breadcrumb>
					<Link to="/lights/">Lights</Link>
				</Breadcrumb>
				<Breadcrumb>{data.strapiLight.name}</Breadcrumb>
			</Breadcrumbs>

			<Footer />
		</>
	);
};

export default LightPage;

// TODO: might need a image default variable here

export const Head = ({ data }: LightPageTypes) => {
	let aliasString = "";

	if (data.strapiLight.alias) {
		// console.log(data.strapiLight.alias)
		const alias = data.strapiLight.alias;
		aliasString = alias
			.split("\n")
			.map((item) => item.trim().replace(/^- /, ""))
			.map((item) => item.charAt(0).toUpperCase() + item.slice(1))
			.join(" | ");
		// console.log(aliasString);
	}

	let processString = "";
	// console.log(data.wedding.nodes);

	if (
		data.strapiLight.services.every(
			(service) =>
				service.slug === "residential" || service.slug === "commercial",
		)
	) {
		for (const process of data.holiday.nodes) {
			processString += ` | ${process.name}`;
		}
	} else {
		for (const process of data.wedding.nodes) {
			processString += ` | ${process.name}`;
		}
	}

	// console.log(processString);

	return (
		<>
			<SEO
				title={`
				${data.strapiLight.name}
				${data.strapiLight.alias ? ` | ${aliasString}` : ""}
				${data.strapiLight.services.every((service) => service.slug === "residential" || service.slug === "commercial") ? "christmas light installation" : "weddings light instalation"}
       	 `}
				// TODO: needs the aliases in the SEO
				description={`${data.strapiLight?.excerpt} ${processString}`} // TODO: add some info about styles i.e. 'modern, rustic, etc.' they might be just a number of tags
				image={data.strapiLight?.image?.localFile?.url}
				url={`light/${data.strapiLight.slug}`}
				breadcrumbs={[
					{
						name: "Light",
						item: "lights",
					},
					{
						name: data.strapiLight.name,
						item: `light/${data.strapiLight.slug}`,
					},
				]}
			/>
			{/*       <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "Offer",
            "name": "${data.strapiLight.name} ${data.strapiLight.alias ? ` | ${aliasString}` : ''} ${data.strapiLight.services.every(service => service.slug === 'residential' || service.slug === 'commercial') ? ('for christmas lights') : ('for weddings')}",
            "description": "${data.strapiLight.excerpt} ${processString}",
            "image": "${data.strapiLight?.image?.localFile?.url}",
            "url": "${data.strapiAbout.url}/light/${data.strapiLight.slug}"
          }
        `}
      </Script> */}
		</>
	);
};
