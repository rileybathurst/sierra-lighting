import React, { useState } from "react";

const Book3Page = () => {
  const sizes = [10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  // this is an object so it can hold which number is true
  const [btnState, setBtnState] = useState({});

  console.log(btnState);

  // passing up the number
  const handleClick = (size) => () =>
    setBtnState((sizes) => ({
      // make a copy of the number
      ...size,

      // toggle the number
      [size]: !sizes[size],
    }));

  return (
    <div className="button-component book2">
      {sizes.map((size) => (
        <button
          // this works I can just scope the true false to the flex I want
          className={`btn ${btnState[size]} `}
          onClick={handleClick(size)}
          key={size}
          style={
            {
              // pass along its own height
            }
          }
        >
          {/*
            The content of the button is the size and the boolean state of size in btnState.
            The !! operator is used to convert btnState[size] to a boolean value.
            If btnState[size] is truthy (like a non-empty string or a number other than zero),
            !!btnState[size] will be true.If btnState[size] is falsy (like an empty string, zero, null, undefined, or NaN),
            !!btnState[size] will be false. The String() function is then used to convert this boolean value to a string,
            so it can be displayed in the button.
            */}
          {size} {String(!!btnState[size])}
        </button>
      ))}
    </div>
  );
};

export default Book3Page;
