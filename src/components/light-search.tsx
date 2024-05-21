import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import * as JsSearch from "js-search"

import Card from "./card"

function ResultList(props) {

  // console.log(props);

  if (props.results.length) {
    return (
      <>
        <h3 className="stork">Search Results</h3>
        <div className="deck">
          {props.results.map(result => (
            <Card
              key={result.id}
              card={result}
              breadcrumb="light"
            />
          ))}
        </div>

        <hr className="stork" />
        <h3 className="stork">All Lights</h3>
      </>
    )
  }

  if (props.searchQuery === "") {
    /* return (
      <h3 className="stork">Please enter a search query</h3>
    ) */
    return null;
  }

  return (
    <>
      <h3 className="stork">Nothing found in the search</h3>
      <hr className="stork" />
      <h3 className="stork">All Lights</h3>
    </>
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

  allStrapiLight.nodes.map((node) => {
    search.addDocuments(node);
    return null;
  })

  search.addIndex('name');
  search.addIndex('slug');

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function SearchData(e) {
    // console.log(e.target.value);
    setSearchQuery(e.target.value);
    setSearchResults(search.search(searchQuery));
    return null;
  }

  const handleSubmit = event => {
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