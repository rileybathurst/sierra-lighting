// TODO: This query took more than 15s to run — which might indicate you're querying too much or have some unoptimized code:

import React, { useState, useId } from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as JsSearch from "js-search"

import Card from "./card"
import type { CardType } from "../types/card-type";

function isSearchableCard(card: Partial<CardType> | null | undefined): card is CardType {
  return Boolean(card?.id && card?.name && card?.slug);
}

interface ResultListTypes {
  searchQuery: string;
  results: CardType[];
}

const ResultList: React.FC<ResultListTypes> = ({ searchQuery, results }) => {
  if (results.length) {
    return (
      <>
        <h3 className="above-deck">Search Results</h3>
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
    <h3 className="main">Nothing found in the search</h3>
  )
};

const LightSearch = () => {
  const inputId = useId();
  const [searchQuery, setSearchQuery] = useState("");
  // TODO: this is a weird duplicate type can it be removed
  const [searchResults, setSearchResults] = useState<CardType[]>([] as CardType[]);

  const { allStrapiLight } = useStaticQuery(graphql`
    query SearchQuery {
      allStrapiLight {
        nodes {
          ...lightCard
        }
      }
    }
  `);

  const searchableLights = React.useMemo(
    () => allStrapiLight.nodes.filter(isSearchableCard),
    [allStrapiLight.nodes],
  );

  // Initialize search instance and add documents/indexes
  const search = React.useMemo(() => {
    const s = new JsSearch.Search('id');
    s.addIndex('name');
    s.addIndex('slug');
    s.addDocuments(searchableLights);
    return s;
  }, [searchableLights]);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setSearchResults(value ? (search.search(value) as CardType[]) : []);
  };

  return (
    <div className="main">
      <form
        onSubmit={handleSubmit}
      >
        <label htmlFor={inputId}>
          Or enter your search here
        </label>
        <input
          id={inputId}
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Enter your search here"
        />
      </form>
      <ResultList
        searchQuery={searchQuery}
        results={searchResults}
      />
    </div>
  )
}

export default LightSearch