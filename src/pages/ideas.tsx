// http://localhost:8000/ideas/?light=roof&light=wrap
// * removed from the SEO while testing / buildimg /static/robots.txt

import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import { SEO } from "../components/seo";
import type { CardType } from "../types/card-type";

type LocationTypes = {
  location: {
    pathname: string;
    search: string;
  };
};
const IdeasPage = ({ location }: LocationTypes) => {
  // console.log(location.search);

  const startingSearchParams = new URLSearchParams(location.search);

  const { allStrapiLight } = useStaticQuery(graphql`
    query IdeasQuery {

      allStrapiLight {
        nodes {
          ...lightCard
        }
      }
    }
  `);

  const IdeasSearch: string[] = [];
  for (const [value] of startingSearchParams.entries()) {
    IdeasSearch.push(value);
  }

  // console.log(IdeasSearch);

  // const [searchParams, setSearchParams] = useState<string[]>(IdeasSearch);
  // TODO: next step is do this live with atate but give me a second

  const nextSearchParams = new URLSearchParams();

  for (const light of IdeasSearch) {
    nextSearchParams.append("light", light);
  }

  // console.log(nextSearchParams);
  // console.log(nextSearchParams.toString());

  return (
    <>
      <Header />

      <main className="above-deck">
        <h1>Ideas</h1>
      </main>

      <div className="deck">
        {allStrapiLight.nodes
          .filter((light: CardType) => IdeasSearch.includes(light.slug ?? ""))
          .map((light: CardType) => (
            <div key={light.id}>
              {/* // ? should this be a React.fragment wrapping */}
              <Card {...light} breadcrumb="light" />
              <p>
                <Link
                  to={`/ideas/?${nextSearchParams.toString()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    nextSearchParams.delete("light", light.slug ?? "");
                    window.location.href = `/ideas/?${nextSearchParams.toString()}`;
                  }}
                >
                  Remove
                </Link>
              </p>
            </div>
          ))}
      </div>

      <h2 className="main">Add</h2>

      <ul className="main">
        {allStrapiLight.nodes
          .filter((light: CardType) => !IdeasSearch.includes(light.slug ?? ""))
          .map((light: CardType) => (
            <li key={light.id}>
              <Link
                to={`/ideas/?${nextSearchParams.toString()}&light=${light.slug ?? ""}`}
              >
                Add {light.slug ?? ""}
              </Link>
            </li>
          ))}
      </ul>

      <Footer />
    </>
  );
};

export default IdeasPage;

export const Head = () => {
  return <SEO title="Ideas" />;
};
