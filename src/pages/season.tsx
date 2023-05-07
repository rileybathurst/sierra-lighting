// TODO: delete this and inline it or note why its the right way to do it

import React from "react"
import { Link } from "gatsby"

import { useStrapiSeason } from "../components/use-strapi-season"

function Season(props) {
  let season = props.season;

  if (useStrapiSeason() && season === "wedding") {
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

// TODO: this isnt a page, its a component
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