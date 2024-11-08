// http://localhost:8000/ideas/?light=roof&light=wrap
// * removed from the SEO while testing / buildimg /static/robots.txt

import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import type { CardType } from "../types/card-type";

type LocationTypes = {
  location: {
    pathname: string;
    search: string;
  }
}
const IdeasPage = ({ location }: LocationTypes) => {

  // console.log(location.search);

  const startingSearchParams = new URLSearchParams(location.search);

  const data = useStaticQuery(graphql`
    query IdeasQuery {

      allStrapiLight {
        nodes {
          ...lightCard
        }
      }
    }
  `)

  const IdeasSearch: string[] = [];
  for (const [key, value] of startingSearchParams.entries()) {
    IdeasSearch.push(value);
  }

  // console.log(IdeasSearch);

  // const [searchParams, setSearchParams] = useState<string[]>(IdeasSearch);
  // TODO: next step is do this live with atate but give me a second

  const nextSearchParams = new URLSearchParams();

  for (const light of IdeasSearch) {
    nextSearchParams.append('light', light);
  }

  // console.log(nextSearchParams);
  // console.log(nextSearchParams.toString());

  return (
    <>

      <Header />

      <main className="stork">

        <h1>Ideas</h1>
      </main>

      <div className="deck">

      </div>

      <div className="deck">
        {data.allStrapiLight.nodes
          .filter((light: CardType) => IdeasSearch.includes(light.slug))
          .map((light: CardType) => (
            <div
              key={light.id}
            >
              <Card
                {...light}
                breadcrumb="light"
              />
              <p>
                <Link to={`/ideas/?${nextSearchParams.toString()}`} onClick={(e) => {
                  e.preventDefault();
                  nextSearchParams.delete('light', light.slug);
                  window.location.href = `/ideas/?${nextSearchParams.toString()}`;
                }}>
                  Remove
                </Link>
              </p>
            </div>
          ))}
      </div>

      <div className="stork">
        <h2>Add</h2>
      </div>

      <ul className="stork">
        {data.allStrapiLight.nodes
          .filter((light: CardType) => !IdeasSearch.includes(light.slug))
          .map((light: CardType) => (
            <li key={light.id}>
              <Link to={`/ideas/?${nextSearchParams.toString()}&light=${light.slug}`}>
                Add {light.slug}
              </Link>
            </li>
          ))}
      </ul>

      <Footer />

    </>
  )
}

export default IdeasPage
