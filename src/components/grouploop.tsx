import * as React from "react"
import { Link } from 'gatsby';

import Badges from "./badges"
import Card from "./card"
import type { DeckType } from "../types/deck-type";

interface GrouploopTypes {
  group: any;
}
const Grouploop = ({ group }: GrouploopTypes) => {
  if (group[1]?.nodes.length > 0) {
    return (
      <>
        <div className="stork">
          <hr />
          <h2 className="baseline-drop">
            <Link to={`/light-group/${group[0]?.slug}`}>
              {group[0]?.name}
            </Link>
          </h2>
          <p className="double-baseline-drop">{group[0]?.excerpt}</p>
          <Badges
            services={group[0]?.services}
          />
        </div>

        <div className="deck">
          {group[1].nodes.map((light: DeckType) => (
            <Card
              key={light.id}
              card={light}
              breadcrumb="light"
            />
          ))}
        </div>
      </>
    )
  }
  return null
}

export default Grouploop
