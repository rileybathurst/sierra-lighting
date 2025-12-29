type IdOnly = {
    id: React.Key;
    key?: undefined
};

type KeyOnly = {
    id?: undefined;
    key: React.Key;
};

type BaseTestimonialTypes = {
	customer: string;
	stars: number;
	review: string;
	title: string;
	slug?: string;
	link?: string;
	position?: string;
	platform?: string;
	vendor?: {
		name: string;
		slug: string;
	};
    project?: {
        title: string;
        slug: string;
    };
};

type TestimonialTypes = BaseTestimonialTypes & ( IdOnly | KeyOnly);

export default TestimonialTypes;