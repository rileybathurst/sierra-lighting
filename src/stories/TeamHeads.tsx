// this is the Name.jsx file
import React from "react";
import PropTypes from "prop-types";
import { faker } from '@faker-js/faker';

export const TeamHeads = () => {
	return (
		<div className="team-heads spin">
			{Array.from({ length: faker.number.int({ min: 1, max: 6 }) }).map(() => (
				<a
					href={`/team/${faker.string.uuid()}`}
					key={faker.string.uuid()}
				>
					<svg
						width="100"
						height="100"
						viewBox="0 0 100 100"
					>
						<title>{`${faker.company.name()} ${faker.company.name()}`}</title>
						<circle
							cx="50"
							cy="50"
							r="40"
							fill="currentColor"
							stroke="currentColor"
							strokeWidth="2"
						/>
					</svg>
					<p>{faker.person.firstName()}</p>
				</a>
			))}
		</div>

	);
};

TeamHeads.propTypes = {
	primary: PropTypes.bool,
};

TeamHeads.defaultProps = {
	primary: false,
};
