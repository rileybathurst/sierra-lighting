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
				collaborator {
				industry
				slug
				}
			}

			project_single_use_links {
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
			<Hero
				image={data.strapiProject.image}
				gallery={data.strapiProject.gallery}
				badge={false}
			/>

			<main className="stork">
				<article>
					<h1>{data.strapiProject.title}</h1>
					{data.strapiProject.couple ? (
						<h2 className="font-serif">{data.strapiProject.couple}</h2>
					) : null}
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


			{data.strapiProject.testimonial ?
				<React.Fragment>
					<hr className="pelican" />
					<div className="stork">
						<Testimonial {...data.strapiProject.testimonial} />
					</div>
				</React.Fragment>
			: null}

			{/* // TODO: use media queries to deal with a single vendor looking really weird */}
			{data.strapiProject.venue ||
				data.strapiProject.area ||
				data.strapiProject.vendors.length > 0 ||
				data.strapiProject.team ||
				data.strapiProject.project_single_use_links ? (
				<React.Fragment>
					<hr className="pelican" />
					<div className="attributes">
						{data.strapiProject.venue ? (
							<section className="attribute">
								<h3 className="crest">Venue</h3>
								<h4 className="range">
									<Link
										to={`/venue/${data.strapiProject.venue.slug}`}
										className="link--subtle"
									>
										{data.strapiProject.venue.name}
									</Link>
								</h4>

								{data.strapiProject.venue?.area ? (
									data.strapiProject.venue.area?.region ? (
										<p>
											<Link
												to={`/areas/${data.strapiProject.venue.area.region.slug}`}
												className="link--subtle"
											>
												{data.strapiProject.venue.area.name},{" "}
                        <StateAbbreviation
                          state={data.strapiProject.venue.area.state}
                        />
											</Link>
											<br />
										</p>
									) : (
									<p>
										<Link
											to={`/areas/${data.strapiProject.venue.area.slug}`}
											className="link--subtle"
										>
											{data.strapiProject.venue.area.name},{" "}
											<StateAbbreviation
												state={data.strapiProject.venue.area.state}
											/>
										</Link>
									</p>
									)
								) : null}
							</section>
						) : null}

						{data.strapiProject.area ? (
							<React.Fragment>
								{/* <Attribute
									category="area"
									slug={data.strapiProject.area[0].slug}
									name={`${data.strapiProject.area[0].name}, ${data.strapiProject.area[0].state}`}
								/> */}

								<section className="attribute">
									<h3 className="crest">Area</h3>
									<h4 className="range">

										{data.strapiProject.area.region ? (
											<React.Fragment>
												<Link
													key={data.strapiProject.area.region.slug}
													to={`/areas/${data.strapiProject.area.region.slug}`}
													className="link--subtle"
												>
													{data.strapiProject.area.region.name}
												</Link>
												<br />
											</React.Fragment>
										) : (
										<Link
											key={data.strapiProject.area.slug}
											to={`/areas/${data.strapiProject.area.slug}`}
											className="link--subtle"
										>
											{data.strapiProject.area.name},{" "}
											<StateAbbreviation
												state={data.strapiProject.area.state}
											/>
										</Link>
										)}
									</h4>
								</section>
							</React.Fragment>
						) : null}

{/* // TODO: project/waterside-wedding/?= having multiple needs a better way of holding the service to the name and more space from the other  */}
{/* // TODO: sometimes vendors have a different role project/waterside-wedding/?= louise and third did the planning not the floral this is a big deal to them */}
{/* // TODO: florists shouldnt be plural im not sure which others are like this */}
						{data.strapiProject.vendors.length > 0 ? (
							<section className="attribute">
								<h3 className="crest">Vendor{data.strapiProject.vendors.length > 1 ? 's' : null}</h3>
								{data.strapiProject.vendors.map((vendor) => (
									<div key={vendor.id}>
										<h4 className="range">
											{/* // TODO these could kinda be attached so the hover state is nicer */}
											<Link
												to={`/vendor/${vendor.slug}`}
												className="link--subtle"
											>
												{vendor.name}
											</Link>
										</h4>
										<p>
											<Link
												// TODO: this isnt the right link it should be to the service not the vendor
                        to={`/vendor/${vendor.collaborator.slug}`}
												className="link--subtle"
											>
												<span className="capitalize">{vendor.collaborator.industry}</span>
												<br />
											</Link>
										</p>
									</div>
								))}
							</section>
						) : null}

						{data.strapiProject.project_single_use_links ? (
							<section className="attribute">
								{/* // ? by definition this cant have a title <h3 className="crest"></h3> */}
								<div className="">
									{data.strapiProject.project_single_use_links.map((link) => (
										<div key={link.id}>
										<h4 className="range">
										{/* // TODO these could kinda be attached so the hover state is nicer */}
                    {link.link ? (
                      link.link.startsWith("http") ? (
                        <a
                          href={link.link}
                          className="link--subtle"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                      ) : (
                      <Link
                        to={`/vendor/${link.link}`}
                        className="link--subtle"
                      >
											{link.name}
										</Link>
                      )
                    ) : (
                      link.name
                    )}
									</h4>
									<p>
                    {link.service_link ? (
                      link.service_link.startsWith("http") ? (
                        <a
                          href={link.service_link}
                          className="link--subtle"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="capitalize">{link.service}</span>
                        </a>
                      ) : (
                        <Link
                          to={`/vendor/${link.link}`}
                          className="link--subtle"
                        >
                          <span className="capitalize">{link.service}</span>
                          <br />
                        </Link>
                      )
                    ) : (
                      <span className="capitalize">{link.service}</span>
                    )}
									</p>
									</div>
									))}
								</div>
							</section>
						) : null}

						{data.strapiProject.team ? (
							<React.Fragment>
								{/* I removed team we haven't really used it in this way but keep it incase we bring it back */}
								{/* <Attribute
									category="team"
									slug={data.strapiProject.area[0].slug}
									name={`${data.strapiProject.area[0].name}, ${data.strapiProject.area[0].state}`}
								/> */}

								<section className="attribute">
									<h3 className="crest">Team</h3>
									<div className="">
										{data.strapiProject.team.map((team) => (
											<h4
												key={team.slug}
												className="range last-ampersand inline"
											>
												<Link
													to={`/team/${team.slug}`}
													className="link--subtle"
												>
													{team.name}
												</Link>
											</h4>
										))}
									</div>
								</section>
							</React.Fragment>
						) : null}
					</div>
				</React.Fragment>
			) : null}

			{/* // TODO: when more than 3 this can get messy */}
			{data.strapiProject.lights ? (
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
			)}

			{/* // TODO: this design need love */}
			{data.additional.nodes ? (
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
			) : null}

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
