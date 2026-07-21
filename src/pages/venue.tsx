// heavyhanded way of not grabbing blue venue

import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import StateAbbreviation from "../components/state-abbreviation";
import type { CardType } from "../types/card-type";

type VenueNode = {
	id: string;
	area: {
		id: string;
		name: string;
		slug: string;
		state: "california" | "nevada";
		tagline: string;
		featured: boolean;

		region?: {
			name: string;
			slug: string;
		};
	} & CardType;
}

const VenuePage = () => {
	const { allStrapiVenue } = useStaticQuery(graphql`

		query VenuesQuery {
			allStrapiVenue(
				filter: {slug: {ne: "blue"}}
			)
			{
				nodes {
					...venueCard

					area {
						id
						name
						slug
						state
						tagline
						featured
						region {
							name
							slug
						}
					}
				}
			}
		}
	`);

	const venueSet = new Set<string>();
	for (const venue of allStrapiVenue.nodes) {
		venueSet.add(venue.area.slug);
	}
	const venueArray: string[] = Array.from(venueSet);

	return (
		<>
			<Header />
			<main>
				<h1>Wedding venues we create lighting at</h1>
			</main>

			{venueArray.map((area) => (
				<div key={area}>
					<div className="above-deck">
						<hr />
						{allStrapiVenue.nodes
							.filter((venue: VenueNode) => venue.area.slug === area)
							.slice(0, 1)
							.map((venuesArea: VenueNode) => (
								<React.Fragment key={venuesArea.id}>
									{venuesArea.area.featured ?
										<h4 className="crest">
											{venuesArea.area.tagline}
										</h4>
										:
										<h4 className="crest">
											<Link to={`/areas/${venuesArea.area.region?.slug}`}>
												{venuesArea.area?.region?.name}
											</Link>
										</h4>
									}
									<h3>
										{venuesArea.area.featured ?
											<Link to={`/areas/${venuesArea.area.slug}`}>
												{venuesArea.area.name},&nbsp;
												<StateAbbreviation state={venuesArea.area.state} />
											</Link>
											:
											<React.Fragment>
												{venuesArea.area.name},&nbsp;
												<StateAbbreviation state={venuesArea.area.state} />
											</React.Fragment>
										}
									</h3>
								</React.Fragment>
							))}
					</div>
					<div className="deck">
						{allStrapiVenue.nodes
							.filter((venue: VenueNode) => venue.area.slug === area)
							.map((venue: CardType) => (
								<Card
									key={venue.id}
									{...venue}
									breadcrumb="venue"
								/>
							))}
					</div>
				</div>
			))}
			<Footer />
		</>
	);
};

export default VenuePage;

// TODO: strapi data
export const Head = () => {
	return (
		<SEO
			title="Wedding venues we create lighting at"
			// TODO: query this
			description="The natural beauty of the Lake Tahoe area makes the perfect backdrop for a wedding. Check out these Tahoe wedding venues that range from rustic to glamorous."
			// TODO: grab a good one from a featured venue? maybe name the query
			// image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/vendors-og-sierra_lighting.jpg"
			url="venue"
		/>
	);
};
