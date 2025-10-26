import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { SEO } from "../components/seo";
import Season from "../components/season";
import Header from "../components/header";
import Footer from "../components/footer";
import ReactMarkdown from "react-markdown";

type processTypes = {
	id: React.Key;
	name: string;
	markdown: {
		data: {
			markdown: string;
		};
	};
};
function ProcessDetail({ id, name, markdown }: processTypes) {
	return (
		<li key={id}>
			<h3>{name}</h3>
			<div className="react-markdown">
				<ReactMarkdown>{markdown.data.markdown}</ReactMarkdown>
			</div>
		</li>
	);
}

const ProcessPage = () => {
	const data = useStaticQuery(graphql`
    query ProcessQuery {
      holiday: allStrapiProcess(
        filter: {services: {elemMatch: {slug: {eq: "residential"}}}},
        sort: {order: ASC}
        ) {
        nodes {
          ...process
        }
      }
      
      wedding: allStrapiProcess(
        filter: {services: {elemMatch: {slug: {eq: "wedding"}}}},
        sort: {order: ASC}
        ) {
        nodes {
          ...process
        }
      }
    }
  `);

	// TODO: needs the adjective component
	// const ready = 'Ready to bring your vision to life ? Get started with a free estimate today and let us illuminate your wedding or event with an unforgettable lighting display!';

	const xmas = "Christmas or Holiday lights installation";
	const wedding = "Wedding, Commercial or Social Event lights installation";

	const [seasonRadio, setSeasonRadio] = useState(Season());

	function seasonSwitcher(e: React.ChangeEvent<HTMLInputElement>) {
		setSeasonRadio(e.target.value);
    // console.log('season switched', e.target.value);
		return null;
	}

	return (
		<>
			<Header />

			<main className="stork">
				<h1 className="denali">
					Our Process for professional lighting installation
				</h1>

				<form className="process-switch">
					<label className={seasonRadio === "wedding" ? "current" : undefined}>
						<input
							type="radio"
							name="season"
							value="wedding"
							onChange={seasonSwitcher}
							checked={seasonRadio === "wedding"}
						/>
						{wedding}
					</label>
					<label className={seasonRadio === "xmas" ? "current" : undefined}>
						<input
							type="radio"
							name="season"
							value="xmas"
							onChange={seasonSwitcher}
							checked={seasonRadio === "xmas"}
						/>
						{xmas}
					</label>
				</form>

				<p>
				Ready to bring your vision to life? Get started with a free estimate
				today and let us illuminate your home or business with an unforgettable
				lighting display!
        </p>
        <hr />
        <ol>
        {seasonRadio === "wedding" ?
          data.wedding.nodes.map((process: processTypes) => (
            <ProcessDetail key={process.id} {...process} />
          )) : (
            data.holiday.nodes.map((process: processTypes) => (
              <ProcessDetail key={process.id} {...process} />
            ))
          )
        }
        </ol>
			</main>

			<Footer />
		</>
	);
};

export default ProcessPage;

export const Head = () => {
	return (
		<SEO
			title="Our process for professional wedding or christmas lights installation"
			// TODO: needs a new description now
			description="Learn how Sierra Lighting can help you create memorable lighting with our design process."
			image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/services-og-sierra_lighting.jpg"
		/>
	);
};
