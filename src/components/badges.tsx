import * as React from "react"

const Badges = (props) => {

  const badges = [
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
          <span
            key={badge}
            className="badge">
            {badge}
          </span>
        ))}
      </div>
    )
  }
  return null;
}

export default Badges
