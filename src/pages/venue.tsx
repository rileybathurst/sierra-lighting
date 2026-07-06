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
		fragment venueAreaInfo on STRAPI_VENUE {
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

		query VenuesQuery {
			allStrapiVenue(
				filter: {slug: {ne: "blue"}}
			)
			{
				nodes {
				...venueCard
				...venueAreaInfo
				}
			}
		}
	`);

	const venueSet = new Set<string>();
	for (const venue of allStrapiVenue.nodes) {
		venueSet.add(venue.area.slug);
	}
	const venueArray: string[] = Array.from(venueSet);

	console.log("venueNodes", allStrapiVenue.nodes.map((venue: VenueNode) => venue.area.featured));

	return (
		<>
			<Header />
			<main>
				<h1 className="kilimanjaro">Wedding venues we create lighting at</h1>
			</main>

			{venueArray.map((area) => (
				<div key={area}>
					<hr className="stork" />
					<div className="stork">
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
											<>
												{venuesArea.area.name},&nbsp;
												<StateAbbreviation state={venuesArea.area.state} />
											</>
										}
									</h3>
								</React.Fragment>
							))}
					</div>
					<div className="deck">
						{allStrapiVenue.nodes
							.filter((venue: VenueNode) => venue.area.slug === area)
							.map((venue: VenueNode) => (
								<Card key={venue.id} {...venue.area} breadcrumb="venue" />
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
			description="The natural beauty of the Lake Tahoe area makes the perfect backdrop for a wedding. Check out these Tahoe wedding venues that range from rustic to glamorous."
			// TODO: grab a good one from a featured venue? maybe name the query
			// image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/vendors-og-sierra_lighting.jpg"
			url="venue"
		/>
	);
};
