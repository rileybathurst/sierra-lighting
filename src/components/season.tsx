import * as React from "react"
import { useStrapiSeason } from "./use-strapi-season";

function Season({ children }) {
  // useStrapiSeason() // returns true for wedding

  if (useStrapiSeason()) {
    return (
      <ul className="wedding">
        {children}
      </ul>
    )
  } else {
    return (
      <ul className="holiday">
        {children}
      </ul>
    );
  }
}

export default Season