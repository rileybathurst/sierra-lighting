import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as JsSearch from "js-search"

import Card from "./card"
import type { CardType } from "../types/card-type";

interface ResultListTypes {
  searchQuery: string;
  results: CardType[];
}
function ResultList({ searchQuery, results }: ResultListTypes) {
  if (results.length) {
    return (
      <>
        <h3 className="stork">Search Results</h3>
        <div className="deck">
          {results.map(result => (
            <Card
              key={result.id}
              {...result}
              breadcrumb="light"
            />
          ))}
        </div>
      </>
    )
  }

  if (searchQuery === "") {
    return null;
  }

  return (
    <h3 className="stork">Nothing found in the search</h3>
  )
}

function LightSearch() {

  const { allStrapiLight } = useStaticQuery(graphql`
    query SearchQuery {
      allStrapiLight {
        nodes {
          ...lightCard
        }
      }
    }
  `)

  const search = new JsSearch.Search('id');

  allStrapiLight.nodes.map((cards: CardType[]) => {
    search.addDocuments(cards);
  })

  search.addIndex('name');
  search.addIndex('slug');

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<CardType[]>([] as CardType[]);

  function SearchData(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
    setSearchResults(search.search(searchQuery));

    console.log(search.search(searchQuery));
  }

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="stork"
      >
        <div>
          <label htmlFor="Search">
            Or enter your search here
          </label>
          <input
            id="Search"
            value={searchQuery}
            onChange={SearchData}
            placeholder="Enter your search here"
          />
        </div>
      </form>
      <ResultList
        searchQuery={searchQuery}
        results={searchResults}
      />
    </>
  )
}

export default LightSearch