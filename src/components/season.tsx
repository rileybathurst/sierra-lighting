import * as React from "react"
import { useStrapiSeason } from "./use-strapi-season";

function Season(props) {
  // useStrapiSeason() // returns true for wedding
  let season = props.season;
  // console.log(season);

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

export default Season