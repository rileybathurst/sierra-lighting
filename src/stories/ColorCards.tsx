import * as React from "react";

type ColorCardTypes = {
  color: string;
  variables?: string[];
}

export const ColorCards = ({ color, variables }: ColorCardTypes) => (
  <section className="color-deck">

    {variables ?
      variables.map((variable) => (
        <div
          key={`${color}-${variable}`}
          className={`color-card ${color}${variable ? '-' : null}${variable}`}
        >
          {color} - {variable}
          {/* // TODO: we use color-card inside color card that can't be right */}
          <div
            className="color"
            style={{
              backgroundColor: `var(--${color}-${variable})`,
            }}
          >
            {/* stay gold */}
          </div>
        </div>
      ))
      :
      <div
        className={`color-card ${color}`}
      >
        {color}
        <div
          className="color-card"
          style={{
            backgroundColor: `var(--${color})`,
          }}
        >
          {/* stay gold */}
        </div>
      </div>
    }
  </section>
);
