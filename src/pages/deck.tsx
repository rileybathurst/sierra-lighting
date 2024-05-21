// ! test page I need to get rid of im just trying to figure out types

import * as React from "react";
import { Link } from "gatsby";

interface deckTypes {
  key: number,
  card: cardTypes,
  breadcrumb: string,
}

interface cardTypes {
  id: number,
  name: string,
  description: string
}

function Card({ card, breadcrumb }: deckTypes) {
  return (
    <Link to={breadcrumb}>
      <h2>{card.name}</h2>
      <p>{card.description}</p>
    </Link>
  )
}

const DeckPage = () => {

  const deck = [
    {
      id: 1,
      name: "Card 1",
      description: "This is card 1"
    },
    {
      id: 2,
      name: "Card 2",
      description: "This is card 2"
    },
    {
      id: 3,
      name: "Card 3",
      description: "This is card 3"
    }
  ]

  return (
    <main>
      <h1>Deck</h1>

      <section>
        {deck.map((card: cardTypes) => (
          <Card
            key={card.id}
            card={card}
            breadcrumb='slug'
          />
        ))}
      </section>
    </main>
  )
}

export default DeckPage