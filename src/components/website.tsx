import * as React from "react"
import StrShort from "./StrShort";

function Website(props) {
  if (props.website) {

    let str = props.website;
    const DoesNotInclude = !str.includes('https://');
    console.log(DoesNotInclude);

    if (DoesNotInclude) {
      return (
        <p>
          {/* Im having problem making sure this always the same and pushing to the external */}
          {/* {process.env.NODE_ENV === "development" ? (
            <span className="seo-showcase">
              <span className="key">
                Starts with &nbsp;
                {props.website}
              </span>

            </span>
          ) : null} */}

          <a href={`https://${props.website}`}
            target="_blank"
            rel="noopener noreferrer">
            <StrShort str={props.website} />
          </a>
        </p>
      )
    } else {
      // the link is fine just run it as is
      return (
        <p>
          {/* {process.env.NODE_ENV === "development" ? (
            <span className="seo-showcase">
              <span className="key">
                Starts with &nbsp;
                {props.website}
              </span>
            </span>
          ) : null} */}
          <a href={props.website}
            target="_blank"
            rel="noopener noreferrer">
            <StrShort str={props.website} />
          </a>
        </p>
      )
        ;
    }
  } else {
    return null;
  }
}

export default Website;