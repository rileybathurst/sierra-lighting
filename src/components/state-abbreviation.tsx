import * as React from "react"

function StateAbbreviation(props) {
  if (props.state == "california") {
    return (<>CA</>);
  } else if (props.state == "nevada") {
    return (<>NV</>);
  }
}

export default StateAbbreviation