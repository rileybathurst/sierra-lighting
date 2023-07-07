import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as JsSearch from "js-search"

function Type(props) {
  // console.log(props);
  return null;
}

function ResultList(props) {

  // console.log(props);

  if (props.results.length) {
    return (
      <ul className="deck">
        {props.results.map(result => (
          <li key={result.id}>
            {/* // * specifically doent have a prop has a spread instead */}
            <Type {...result} />
          </li>
        ))}
      </ul>
    )
  } else {
    return (
      <>Nothing found in the search</>
    )
  }
}

function LightSearch() {

  var theGreatGatsby = {
    isbn: '9781597226769',
    title: 'The Great Gatsby',
    author: {
      name: 'F. Scott Fitzgerald'
    },
    tags: ['book', 'inspirational']
  };
  var theDaVinciCode = {
    isbn: '0307474275',
    title: 'The DaVinci Code',
    author: {
      name: 'Dan Brown'
    },
    tags: ['book', 'mystery']
  };
  var angelsAndDemons = {
    isbn: '074349346X',
    title: 'Angels & Demons',
    author: {
      name: 'Dan Brown',
    },
    tags: ['book', 'mystery']
  };

  const { allStrapiLight } = useStaticQuery(graphql`
    query SearchQuery {
      allStrapiLight {
        nodes {
          id
          name
          slug
        }
      }
    }
  `)

  var search = new JsSearch.Search('id');
  search.addIndex('name');

  allStrapiLight.nodes.map((node) => {
    search.addDocuments(node);
    return null;
  })

  search.addDocuments([theGreatGatsby, theDaVinciCode, angelsAndDemons]);
  search.addIndex('title');
  search.addIndex('id');
  search.addIndex('slug');

  console.log(search);

  console.log(search.search('String Lighting'));
  console.log(search.search('string'));
  console.log(search.search('3a8865d0-e8cf-58f6-a649-69782482fb01'));
  console.log(search.search('Great')); // ! this is returning 1 not 2

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function SearchData(e) {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
    // setSearchResults(search.search(searchQuery));
    return null;
  }

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="Search">
            Enter your search here
          </label>
          <input
            id="Search"
            value={searchQuery}
            onChange={SearchData}
            placeholder="Enter your search here"
          />
        </div>
      </form>
      {/*       <ResultList
        results={searchResults}
      /> */}
    </>
  )
}

export default LightSearch