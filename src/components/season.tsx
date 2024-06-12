// TODO: I garantee I can do this in less steps
// its a ? :

import * as React from "react"
import { useStrapiSeason } from "../hooks/use-strapi-season";

interface SeasonTypes {
  children: React.ReactNode;
}
function Season({ children }: SeasonTypes) {
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