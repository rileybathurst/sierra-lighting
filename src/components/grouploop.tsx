import * as React from "react"
import { Link } from 'gatsby';

import Badges from "./badges"
import Card from "./card"
import type { DeckType } from "../types/deck-type";

const Grouploop = (props) => {

  if (props.group[1]?.nodes.length > 0) {
    return (
      <>
        <div className="stork">
          <hr />
          <h2 className="baseline-drop">
            <Link to={`/light-group/${props.group[0]?.slug}`}>
              {props.group[0]?.name}
            </Link>
          </h2>
          <p className="double-baseline-drop">{props.group[0]?.excerpt}</p>
          <Badges
            services={props.group[0]?.services}
          />
        </div>

        <div className="deck">
          {props.group[1].nodes.map((light: DeckType) => (
            <Card
              id={light.id}
              card={light}
              breadcrumb="light"
            />
          ))}
        </div>
      </>
    )
  } else {
    return null
  }
}

export default Grouploop
