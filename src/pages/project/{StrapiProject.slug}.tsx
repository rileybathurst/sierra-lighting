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
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

type ProjectPageTypes = {
	data: {
		strapiProject: {
			id: React.Key;
			title: string;
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
			} | null;

			team: {
				id: React.Key;
				name: string;
				slug: string;
			}[];

			vendors: {
        id: React.Key;
				name: string;
				slug: string;
				service: string;
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
        } | null;
			};

			services: {
				name: string;
				slug: string;
			}[];
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
        }
      }

      services {
        name
        slug
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

/* // TODO: testing removed
testimonial {
  id
  customer
  position
  review
  vendor {
    name
    slug
  }
} */

// console.log(data)

const ProjectPage = ({ data }: ProjectPageTypes) => {
	return (
		<>
			<Header />

			{/* // TODO: the hero gallery need specific lights like the lookbook */}
			<Hero image={data.strapiProject.image} gallery={data.strapiProject.gallery} badge={false} />

			<main className="stork">
				<article>
					<h1>{data.strapiProject.title}</h1>
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

			{/* // * no testimonials currently link to projects so this breaks
      {data.strapiProject.testimonial ?
        <>
          <hr className="pelican" />
          <div className="stork">
            <Testimonial {...project.testimonial} />
          </div>
        </>
        : null} */}

			{/* // TODO: use media queries to deal with a single vendor looking really weird */}
			{data.strapiProject.venue ||
			data.strapiProject.area ||
			data.strapiProject.vendors.length > 0 ||
			data.strapiProject.team ? (
				<>
					<hr className="pelican" />
					<div className="attributes">
						{data.strapiProject.venue ? (
							<>
								{/* <Attribute
                  category="venue"
                  slug={data.strapiProject.venue.slug}
                  name={data.strapiProject.venue.name}
                /> */}

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
										<p>
											<Link
												to={`/areas/${data.strapiProject.venue.area.slug}`}
												className="link--subtle"
											>
												{data.strapiProject.venue.area.name},{" "}
												<StateAbbreviation state={data.strapiProject.venue.area.state} />
											</Link>
										</p>
									) : null}
								</section>
							</>
						) : null}

						{data.strapiProject.area ? (
							<>
								{/* <Attribute
                  category="area"
                  slug={data.strapiProject.area[0].slug}
                  name={`${data.strapiProject.area[0].name}, ${data.strapiProject.area[0].state}`}
                /> */}

								<section className="attribute">
									<h3 className="crest">Area</h3>
									<h4 className="range">
										<Link
											key={data.strapiProject.area.slug}
											to={`/areas/${data.strapiProject.area.slug}`}
											className="link--subtle"
										>
											{data.strapiProject.area.name},{" "}
											<StateAbbreviation state={data.strapiProject.area.state} />
										</Link>
									</h4>
								</section>
							</>
						) : null}

						{data.strapiProject.vendors.length > 0 ? (
							<section className="attribute">
								{/* // ? I dont think this needs to be titled anymore */}
								{/* <h3 className="crest">Vendor{data.strapiProject.vendors.length > 1 ? 's' : null}</h3> */}
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
												to={`/vendor/${vendor.slug}`}
												className="link--subtle"
											>
												<span className="capitalize">{vendor.service}</span>
												<br />
											</Link>
										</p>
									</div>
								))}
							</section>
						) : null}

						{data.strapiProject.team ? (
							<>
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
							</>
						) : null}
					</div>
				</>
			) : null}

			{/* 3 featured lights or other projects */}
			{data.triptych.nodes ? (
				<>
					<div className="stork">
						<hr />
						<h3>{data.strapiProject.title} uses these lights</h3>
					</div>
					<section className="deck">
						{data.triptych.nodes.map((light) => (
							<Card key={light.id} {...light} breadcrumb="light" />
						))}
					</section>
				</>
			) : (
				<>
					<div className="stork">
						<hr />
						<h4>Other Projects</h4>
					</div>

					<div className="deck">
						{data.allStrapiProject.nodes.map((project) => (
							<Card key={project.id} {...project} breadcrumb="project" />
						))}
					</div>
				</>
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
