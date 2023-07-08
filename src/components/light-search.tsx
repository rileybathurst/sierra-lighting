import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import * as JsSearch from "js-search"

import Card from "./card"

function ResultList(props) {

  // console.log(props);

  if (props.results.length) {
    return (
      <>
        <h3 className="measure">Search Results</h3>
        <ul className="deck">
          {props.results.map(result => (
            <div key={result.id}>
              <Card
                card={result}
              />
            </div>
          ))}
        </ul>

        <hr className="measure" />
        <h3 className="measure">All Lights</h3>
      </>
    )
  } else if (props.searchQuery === "") {
    /* return (
      <h3 className="measure">Please enter a search query</h3>
    ) */
    return null;
  } else {
    return (
      <>
        <h3 className="measure">Nothing found in the search</h3>
        <hr className="measure" />
        <h3 className="measure">All Lights</h3>
      </>
    )
  }
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

  var search = new JsSearch.Search('id');

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
        className="measure"
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