import * as React from "react";

const Hamburger = (props) => {
  return (
    <div className={`hamburger ${props.class}`}>
      <div>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  );
};

export default Hamburger;