import { Link } from "gatsby";
import * as React from "react";

type startTypes = {
  className?: string; // I dont think this is used, but it is in the codebase
  path?: string;
};
const Start = ({ className, path }: startTypes) => {
  // ? how often and why are the path and className props used?
  return (
    <Link
      to={`/contact?=start-${path}`}
      className={`button button-hero ${className}`}
    >
      Request a free quote
    </Link>
  );
};

export default Start;
