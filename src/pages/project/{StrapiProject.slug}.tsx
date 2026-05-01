// TODO: run this through gatsby-node to get the service in the url
// TODO: This query took more than 15s to run — which might indicate you're querying too much or have some unoptimized code:

import * as React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/seo";
import type { IGatsbyImageData } from "gatsby-plugin-image";
import type { CardType } from "../../types/card-type";
import Header from "../../components/header";
import Footer from "../../components/footer";
import StateAbbreviation from "../../components/state-abbreviation";
import Card from "../../components/card";
import Start from "../../components/start";
import Hero from "../../components/hero";
import ReactMarkdown from "react-markdown";
import { Link } from "gatsby";
import { Breadcrumbs, Breadcrumb } from "react-aria-components";
import Testimonial from "../../components/testimonial";
import type TestimonialTypes from "../../types/testimonial-types";
import type VideoTypes from "../../types/video-types";
import MuxPlayer from "@mux/mux-player-react";
import Attribute from "../../components/attribute";

type ProjectPageTypes = {
	data: {
		strapiProject: {
			id: React.Key;
			title: string;
			couple?: string;
			description: {
				data: {
					description: string;
				};
			};
			excerpt: string;
			slug: string;

			ogimage: string;
			image: {
				localFile: {
					childImageSharp: {
						gatsbyImageData: IGatsbyImageData;
					};
					url: string;
				};
				alternativeText: string;
			};
			gallery: {
				localFile: {
					childImageSharp: {
						gatsbyImageData: IGatsbyImageData;
					};
					url: string;
				};
				alternativeText: string;
			}[];

			lights: CardType[];

			area: {
				name: string;
				state: "california" | "nevada";
				slug: string;

				region?: {
					name: string;
					slug: string;
					id: React.Key;
				};
			};

			team: {
				id: React.Key;
				name: string;
				slug: string;
			}[];

			vendors: {
				id: React.Key;
				name: string;
				slug: string;
				collaboratorAncillary?: string;
				collaborator: {
					industry: string;
					slug: string;
				};
			}[];

			project_single_use_links: {
				id: React.Key;
				name: string;
				link?: string;
				service: string;
				service_link?: string;
			}[];

			venue: {
				name: string;
				slug: string;
				id: React.Key;

				area: {
					id: React.Key;
					name: string;
					state: "california" | "nevada";
					slug: string;

					region?: {
						name: string;
						slug: string;
						id: React.Key;
					};
				};
			};

			services: {
				name: string;
				slug: string;
			}[];

			testimonial: TestimonialTypes | null;

			video: VideoTypes;
		};

		triptych: {
			nodes: CardType[];
		};
		additional: {
			nodes: {
				id: React.Key;
				name: string;
				slug: string;
			}[];
		};
		allStrapiProject: {
			nodes: CardType[];
		};
	};
};

export const query = graphql`
    query ProjectQuery($slug: String!) {
		strapiProject(slug: { eq: $slug }) {
			id
			title
			couple
			description {
				data {
					description
				}
			}
			excerpt
			slug
			ogimage

			image {
				localFile {
					childImageSharp {
						gatsbyImageData
					}
					url
					}
				alternativeText
			}

			gallery {
				localFile {
					childImageSharp {
						gatsbyImageData
					}
					url
				}
				alternativeText
			}

			lights {
				...lightCard
			}

			area {
				name
				state
				slug

				region {
					id
					name
					slug
				}
			}

			teams {
				id
				name
				slug
			}

			vendors {
				id
				name
				slug
				collaboratorAncillary
				collaborator {
					industry
					slug
				}
			}

			project_single_use_links {
				id
				name
				link
				service
			}

			venue {
				id
				name
				slug 
				
				area {
					id
					name
					state
					slug

          region {
            id
            name
            slug
          }
				}
			}

			services {
				name
				slug
			}

			# // TODO: fragment
			testimonial {
				id
				customer
				position
				review
				vendor {
					name
					slug
				}
			}

			video {
			...videoFragment
			}
		}

		triptych: allStrapiLight(limit: 3, filter: {projects: {elemMatch: {slug: {eq: $slug}}}}) {
			nodes {
				...lightCard
			}
		}

		additional: allStrapiLight(skip: 3, filter: {projects: {elemMatch: {slug: {eq: $slug}}}}) {
			nodes {
				id
				name
				slug
			}
		}

		allStrapiProject(filter: {slug: {nin: [$slug] }}) {
			nodes {
				title
				id
				slug
				excerpt

				image {
					localFile {
						childImageSharp {
							gatsbyImageData(
								breakpoints: [111, 165, 222, 444, 880]
								width: 222
							)
						}
					}
					alternativeText
				}
			}
		}
	}
`;


const ProjectPage = ({ data }: ProjectPageTypes) => {
	return (
		<>
			<Header />

			{/* // TODO: the hero gallery need specific lights like the lookbook */}
			{/* // TODO: This needs to be both. and I need to deal with the difference in heights in video and just in photo */}
			{data.strapiProject.video ?
				<MuxPlayer
					streamType="on-demand"
					playbackId={data.strapiProject.video.mux}
					className='hero-video'
				/>
				:
				<Hero
					image={data.strapiProject.image}
					gallery={data.strapiProject.gallery}
					badge={false}
				/>
			}

			<main className="stork">
				<article>
					<h1>{data.strapiProject.title}</h1>
					{data.strapiProject.couple && (
						<h2 className="font-serif">{data.strapiProject.couple}</h2>
					)}
					{data.strapiProject.description ? (
						<div className="react-markdown">
							<ReactMarkdown>
								{data.strapiProject.description.data.description}
							</ReactMarkdown>
						</div>
					) : (
						<p>{data.strapiProject.excerpt}</p>
					)}
				</article>

				<hr />
				<h3>Interested in a project like this</h3>
				<Start path={`project ${data.strapiProject.slug}`} />
			</main>


			{data.strapiProject.testimonial &&
				<React.Fragment>
					<hr className="pelican" />
					<div className="stork">
						<Testimonial {...data.strapiProject.testimonial} />
					</div>
				</React.Fragment>
			}

			{data.strapiProject.venue ||
				data.strapiProject.area ||
				data.strapiProject.vendors.length > 0 ||
				data.strapiProject.project_single_use_links ? (
				<React.Fragment>
					<hr className="pelican" />
					<div className="attributes">
						{data.strapiProject.venue && (
							<Attribute
								venue={{
									name: data.strapiProject.venue.name,
									link: `/venue/${data.strapiProject.venue.slug}`
								}}
							/>
						)}

						{/* // TODO: this one is a little more complex with the slug not always being direct */}
						{data.strapiProject.area &&
							<Attribute
								area={{
									name: `${data.strapiProject.area.name}, ${StateAbbreviation({ state: data.strapiProject.area.state })}`,
									link: data.strapiProject.area.region ?
										`/areas/${data.strapiProject.area.region.slug}`
										:
										`/areas/${data.strapiProject.area.slug}`
								}}
							/>
						}

						{/* // TODO: project/waterside-wedding/?= having multiple needs a better way of holding the service to the name and more space from the other  */}
						{/* // TODO: sometimes vendors have a different role project/waterside-wedding/?= louise and third did the planning not the floral this is a big deal to them */}
						{/* // TODO: florists shouldnt be plural im not sure which others are like this */}
						{data.strapiProject.vendors.length > 0 ? (
							data.strapiProject.vendors.map((vendor) => (
								vendor.collaborator?.industry ? (
									<Attribute
										key={String(vendor.id)}
										{...{
											[vendor.collaborator.industry]: {
												name: vendor.name,
												link: `/vendor/${vendor.collaborator.slug}/${vendor.slug}`
											}
										}}
									/>
								) : vendor.collaboratorAncillary ? (
									<Attribute
										key={String(vendor.id)}
										{...{
											[vendor.collaboratorAncillary]: {
												name: vendor.name,
												link: `/vendor/${vendor.slug}`
											}
										}}
									/>
								) : null
							))
						) : null}

						{data.strapiProject.project_single_use_links && (
							data.strapiProject.project_single_use_links.map((singleLink) => (
								<Attribute
									key={String(singleLink.id)}
									{...{
										[singleLink.service]: {
											name: singleLink.name,
											link: singleLink.link
										}
									}}
								/>
							))
						)}


					</div>
				</React.Fragment >
			) : null
			}

			{/* // * this is looking for video to not show it its a negative check */}
			{
				data.strapiProject.video &&
				<React.Fragment>
					<hr className="pelican" />
					<Hero
						image={data.strapiProject.image}
						gallery={data.strapiProject.gallery}
						badge={false}
					/>
				</React.Fragment>
			}

			{/* // TODO: when more than 3 this can get messy */}
			{/* // TODO: this is too low with lots of vendors move it up */}
			{
				data.strapiProject.lights ? (
					<>
						<div className="stork">
							<hr />
							<h3>{data.strapiProject.title} uses these lights</h3>
						</div>
						<section className="deck">
							{data.strapiProject.lights.map((light) => (
								<Card key={light.id} {...light} breadcrumb="light" />
							))}
						</section>
					</>
				) : (
					<React.Fragment>
						{/* // TODO: there essentially cant be no lights we would just  */}
						<div className="stork">
							<hr />
							<h4>Other Projects</h4>
						</div>

						<div className="deck">
							{data.allStrapiProject.nodes.map((project) => (
								<Card key={project.id} {...project} breadcrumb="project" />
							))}
						</div>
					</React.Fragment>
				)
			}

			{/* // TODO: this design need love */}
			{
				data.additional.nodes ? (
					<div className="stork">
						<section className="attribute">
							<ul>
								{data.additional.nodes.map((light) => (
									<li key={light.id} className="range denali">
										<Link to={`/light/${light.slug}`}>{light.name}</Link>
									</li>
								))}
							</ul>
						</section>
					</div>
				) : null
			}

			<hr className="stork" />

			{/* // ? can a project have multiple services? I kinda doubt it and should be in the breadcrumb */}
			<Breadcrumbs>
				<Breadcrumb>
					<Link to="/projects/">Project</Link>
				</Breadcrumb>
				<Breadcrumb>{data.strapiProject.title}</Breadcrumb>
			</Breadcrumbs>

			<Footer />
		</>
	);
};

export default ProjectPage;

type ProjectPageHeadTypes = {
	data: {
		strapiProject: {
			title: string;
			excerpt: string;
			ogimage: string;
			slug: string;
		};
	};
};
export const Head = ({ data }: ProjectPageHeadTypes) => {
	return (
		<SEO
			title={`${data.strapiProject.title}`}
			description={data.strapiProject?.excerpt}
			image={data.strapiProject?.ogimage}
			url={`project/${data.strapiProject.slug}`}
			breadcrumbs={[
				{
					name: "Project",
					item: "project",
				},
				{
					name: data.strapiProject.slug,
					item: `project/${data.strapiProject.slug}`,
				},
			]}
		/>
	);
};
