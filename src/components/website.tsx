// ! p is a decendant of p
// TODO: this whole thing can be inlined in a pretty simple way

import * as React from "react"
import StrShort from "./StrShort";

// TODO: I need to put a span after the first slash in the address.
// everything after that should be way more mellow

function Website(props) {
  if (props.website) {

    const str = props.website;
    const DoesNotInclude = !str.includes('https://');
    // console.log(DoesNotInclude);

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
          Website&nbsp;
          <a href={`https://${props.website}`}
            target="_blank"
            rel="noopener noreferrer"
            title={props.website}
          >
            <StrShort str={props.website} />
          </a>
        </p>
      )
    }
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
        Website&nbsp;
        <a href={props.website}
          target="_blank"
          rel="noopener noreferrer">
          <StrShort str={props.website} />
        </a>
      </p>
    )
      ;
  }

}

export default Website;