type TestimonialTypes = {
	id?: React.Key;
	customer: string;
	stars?: number;
	review: string;
	slug?: string;
	link?: string;
	position?: string;
	platform?: string;
	vendor?: {
		name: string;
		slug: string;

		collaborator?: {
			slug: string;
		}
	};
    project?: {
        title: string;
        slug: string;
    };
};

export default TestimonialTypes;