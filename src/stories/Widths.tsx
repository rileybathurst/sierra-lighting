// * complex file to storybook but very useful
import { faker } from "@faker-js/faker";
import React from "react";

type Width = {
  name: string;
  alias?: string;
};

type WidthCardTypes = {
  widths: Width[];
};
const WidthCard = ({ widths }: WidthCardTypes) => {
  return (
    <>
      {widths.map(({ name, alias }) => (
        <div
          key={name}
          className={name}
          style={{
            minHeight: "8rem",
            backgroundColor: "var(--neutral-200)",
            marginInline: "auto",
            marginBlockEnd: "var(--vinson)",
            paddingBlock: "var(--vinson)",
            color: "var(--neutral-700)",
          }}
        >
          {name}

          {alias && (
            <p>alias:&nbsp;{alias}</p>
          )}

          <br />
          <p
            className="white-space"
            style={{
              color: "var(--neutral-400)",
            }}
          >
            {faker.string.fromCharacters("abcdefghijklmnopqrstuvwxyz", {
              min: 45,
              max: 45,
            })}
          </p>
          <p
            className="white-space"
            style={{
              color: "var(--neutral-500)",
            }}
          >
            {faker.string.fromCharacters("abcdefghijklmnopqrstuvwxyz", {
              min: 90,
              max: 90,
            })}
          </p>
        </div>
      ))}
    </>
  );
};

export const Widths = () => {
  return (
    <React.Fragment>
      <main>
        <h1>Widths</h1>
        <p>One column layout for text with a measure of condor</p>
        <p>hero images have a pop width of pelican</p>
        <p>three column layout for cards with a max width of albatross</p>
      </main>
      <WidthCard
        widths={[
          { name: "swan" },
          { name: "vulture" },
          { name: "stork", alias: "services / testimonials / testimonial / contact" },
          { name: "condor", alias: "main / measure" },
          { name: "pelican", alias: "deck" },
          { name: "albatross", alias: "footer_list" },
        ]}
      />
    </React.Fragment>
  );
};
