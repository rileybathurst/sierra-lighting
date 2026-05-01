import * as React from "react"

type AttributeTypes = {
  [key: string]: string | {
    [key: string]: string;
  };
};

const Attribute = (attribute: AttributeTypes) => (
  Object.entries(attribute).map(([key, value]) => {
    if (typeof value === "object") {
      return (
        <div
          key={key}
          className="attribute capitalize"
        >
          <h3 className="elbrus">{key}</h3>
          <a href={value.link}>{value.name}</a>
        </div>
      )
    }

    if (value) {
      return (
        <div
          key={key}
          className="attribute"
        >
          <h3 className="elbrus">{key}</h3>
          <p>{value}</p>
        </div>
      )
    }

    return (
      <div
        key={key}
        className="attribute"
      >
        <h3 className="elbrus">{key}</h3>
      </div>
    )
  })
);

export default Attribute;