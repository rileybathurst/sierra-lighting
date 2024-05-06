import React, { useState, useEffect, useRef } from "react";

const BookPage = () => {
  let book = [1, 2, 3];

  const [library, setLibrary] = useState(1);
  const [yoga, setYoga] = useState(1);

  const ref = useRef();

  // ?useEffect
  /*   function red(params) {
    console.log(params);
    return null;
  } */

  useEffect(() => {
    setYoga(10);
    console.log(ref.current);
  }, [library]);

  // ? this works
  // https://stackoverflow.com/questions/73766383/how-to-change-the-state-of-only-one-element-in-a-map
  function Button() {
    const sizes = [10, 11, 12, 13];

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
      <div className="button-component">
        {sizes.map((size) => (
          <button
            // this works I can just scope the true false to the flex I want
            className={`btn ${btnState[size]} `}
            onClick={handleClick(size)}
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
  }

  const handler = (item) => () =>
    setYoga((item) => ({
      // The callback function takes an argument item,
      // which is the current state. It returns a new state which is an object.
      // The spread operator (...item) is used to create a copy of the current state object.
      // This is done to avoid mutating the state directly, which is a rule in React.
      ...item,

      // [item]: !item[item], is a computed property name.
      // It means that the property name will be the value of item.
      // The value of this property will be the logical NOT (!) of the current value.
      // In other words, it toggles the boolean value of the property.
      [item]: !item[item],
    }));

  return (
    <div>
      <Button />
      <h1>BookPage</h1>
      {library} - {yoga}
      <hr />
      <section
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        {book.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setLibrary(item); // this sets all. I want one
              // setYoga(5); // how can I do this only on item?
              handler(item);
              // red(item);
            }}
            ref={ref}
            className={item}
            style={{
              padding: `${library}px`,
              flex: `${yoga} 1 30rem`,
            }}
          >
            {item}
          </button>
        ))}
      </section>
    </div>
  );
};

export default BookPage;
