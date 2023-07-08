import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { CardType } from "../types/card";

const Badges = (props
  /*   : {
    commercialchristmas
    residentialchristmas
    wedding
    outdoor
  } */
) => {

  let badges = [
    props.commercialchristmas ? "Commercial Christmas" : null,
    props.residentialchristmas ? "Residential Christmas" : null,
    props.wedding ? "Wedding" : null,
    props.outdoor ? "Outdoor" : null,
  ];

  // console.log(badges);
  const filteredArr = badges.filter((element) => element !== null);
  // console.log(filteredArr); // Output:

  if (filteredArr.length > 0) {
    return (
      <div className="badges">
        <p>Used for:</p>
        {filteredArr.map((badge) => (
          <span className="badge">{badge}</span>
        ))}
      </div>
    )
  } else {
    return null;
  }
}

export default Badges
