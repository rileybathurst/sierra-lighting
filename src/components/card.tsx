import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

function NameTitle(props: { name: string; title: string }) {
  if (props.name) {
    return (
      <>
        {props.name}
      </>
    )
  } else {
    return (
      <>
        {props.title}
      </>
    )
  }
}

const Card = (props: {
  card: {
    venueImage: { localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }; alternativeText: string };
    slug: any;
    name?: any;
    title?: any
    excerpt: string
  };
}) => {
  return (
    <section className="card">

      <GatsbyImage
        image={
          props.card?.venueImage?.localFile?.childImageSharp
            ?.gatsbyImageData
        }
        alt={props.card.venueImage?.alternativeText}
        className=""
      />
      <div className="paper"></div>
      <div className="content">
        <hr />
        <h2><Link to={`/venue/${props.card.slug}`}><NameTitle name={props.card.name} title={props.title} /></Link></h2>
        <p>{props.card.excerpt}</p>
      </div>
    </section>
  )
}

export default Card
