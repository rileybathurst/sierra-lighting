import React from "react";
import PropTypes from "prop-types";

import "./story.css";
import "./links.css";

export const Links = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? "storybook-Links--primary"
    : "storybook-Links--secondary";
  return (
    <>
      Links on regular background
      <hr />
      <p>
        lorem <a href="#">ipsum</a> dolor sit amet
      </p>
      <p>
        lorem&nbsp;
        <a href="#" className="a-hover">
          hover
        </a>
        &nbsp;dolor sit amet
      </p>
      <p>
        lorem&nbsp;
        <a href="#" className="a-focus">
          focus
        </a>
        &nbsp;dolor sit amet
      </p>
      <hr />
      <p>
        <a href="#" className="hover-back">
          hover back
        </a>
      </p>
      <p>
        <a href="#" className="hover-back hover-back__hover">
          hover back hover
        </a>
      </p>
      {/* // TODO this isnt right theres a change on hover */}
      <p>
        <a href="#" className="bigboy">
          big boy
        </a>
      </p>
      {/* .hover-back, .bigboy a, .contact-info a */}
    </>
  );
};

Links.propTypes = {
  primary: PropTypes.bool,
};

Links.defaultProps = {
  primary: false,
};
