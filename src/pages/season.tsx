import React from "react"
import { Link } from "gatsby"

import { useStrapiSeason } from "../components/use-strapi-season"

function Wedding({ children }) {
  if (useStrapiSeason()) {
    return (
      <>
        {children}
      </>
    )
  } else {
    return null;
  }
}

function Holiday({ children }) {
  if (useStrapiSeason() === false) {
    return (
      <>
        {children}
      </>
    )
  } else {
    return null;
  }
}

function Season(props) {
  // useStrapiSeason() // returns true for wedding
  let season = props.season;
  // console.log(season);

  if (useStrapiSeason() && season === "wedding") {

    console.log("🦄");

    return (
      <>
        {props.children}
      </>
    )
  } else if (useStrapiSeason() === false && season === "holiday") {

    return (
      <>
        {props.children}
      </>
    );
  } else {
    return null;
  }
}

const SeasonPage = () => {

  return (
    <>
      <Wedding>
        <Link to="/project/wedding-canopy">
          <p>Wedding Canopy See the Project</p>
        </Link>
      </Wedding>
      <Holiday>
        <Link to="/project/rancharrah">
          <p>The Village at Rancharrah See the Project</p>
        </Link>
      </Holiday>

      <hr />

      {/* // ?more DRY but more complex? */}
      <Season season="wedding">
        <Link to="/project/wedding-canopy">
          <p>Wedding Canopy See the Project</p>
        </Link>
      </Season>
      <Season season="holiday">
        <Link to="/project/rancharrah">
          <p>The Village at Rancharrah See the Project</p>
        </Link>
      </Season>
    </>
  )
}

export default SeasonPage