// ? testing taking a query from outside the file

import * as React from "react"
import { useStrapiSeason } from "./use-strapi-season";

function WhichSeason({ children }) {

  // const season = useStrapiSeason();
  // console.log(season);

  // if wedding
  if (useStrapiSeason()) {
    return (
      <>
        🦄
        {/* {props.wedding} */}
      </>
    );
  } else {

    return (
      <>
        🦖
        {/* {props.holiday} */}
      </>
    );
  }

}

export default WhichSeason

// ? Maybe I can kinda base this on light dark mode query
/* function HeroImage() {
  let isSiteDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <>
      {isSiteDark && <WeddingCannopy />}
      {isSiteDark || <OutdoorWedding />}
    </>
  );
} */

// I dont want to just render both based on the query?
// ? I could send both including the query to the component and then have it decide which to render