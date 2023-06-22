import * as React from "react"

function StateAbbreviation(props: { state: "california" | "nevada" | string | undefined; }) {
  if (props.state == "california") {
    return (<>CA</>);
  } else if (props.state == "nevada") {
    return (<>NV</>);
  } else {
    return null;
  }
}

export default StateAbbreviation