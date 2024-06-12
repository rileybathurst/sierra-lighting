import * as React from "react"

function StateAbbreviation(props:
  { state: "california" | "nevada" | string | undefined; }
) {
  if (props.state === "california") {
    return (<>CA</>);
  }

  if (props.state === "nevada") {
    return (<>NV</>);
  }
  return null;
}

export default StateAbbreviation