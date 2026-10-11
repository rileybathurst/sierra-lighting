// * this ones a little weird theres no tritych class its built on deck with some weird specifics
import React from 'react';
import { faker } from "@faker-js/faker";
import { Card } from './Card';

interface TriptychProps {
  primary?: boolean;
  onClick?: () => void;
}

interface TriptychSection {
  title: string;
  cards: React.ReactNode[];
  width?: "double" | "triple";
}

export const Triptych = ({
  primary = false,
  ...props
}: TriptychProps) => {

  // least likely to have cards hearts
  const hearts = faker.datatype.boolean() ? [<Card key="hearts-card" />] : [];
  // console.log(hearts);

  const diamonds = faker.datatype.boolean() ? [<Card key="diamonds-card" />] : [];
  // console.log(diamonds);

  // * this is a little different than how a query will bring them
  // Fill any remaining slots so the suits contain exactly three cards.
  const spades = Array.from({ length: 3 - hearts.length - diamonds.length }).map((_, index) => (
    <Card key={`spades-card-${index}`} />
  ));
  // console.log(spades);

  const suits: TriptychSection[] = [
    ...(hearts.length > 0 ? [{ title: "Hearts", cards: hearts }] : []),
    ...(diamonds.length > 0 ? [{ title: "Diamonds", cards: diamonds }] : []),
    ...(spades.length > 0
      ? [
        {
          title: "Spades",
          cards: spades,
          ...(spades.length === 2
            ? { width: "double" as const }
            : spades.length === 3
              ? { width: "triple" as const }
              : {}),
        },
      ]
      : []),
  ];

  // console.log(suits);

  return (
    <section className="deck">
      {suits.map(({ title, cards, width }) => (
        <section key={title} className={`${width && `${width}`}`}>

          <h2>{title}</h2>
          <div className={`${width && 'width'}`}>
            {cards}
          </div>
        </section>
      ))}
    </section>
  );
};