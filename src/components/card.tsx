import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { CardType } from "../types/card";

function NameTitle(props: {
  name?: string;
  title?: string
}) {
  if (props.name) {
    return (
      <>{props.name}</>
    )
  } else {
    return (
      <>{props.title}</>
    )
  }
}

// TODO: fix the types
function Image(props: {
  image: any;
  venueImage: any;
  profileImage: any;
}) {

  // this broke after 2
  // var image = props?.image ? props?.image : props?.venueImage;

  if (props.profileImage) {
    var image = props?.profileImage;
  } else if (props.venueImage) {
    var image = props?.venueImage;
  } else {
    var image = props?.image;
  }

  return (
    <>
      <GatsbyImage
        image={
          image?.localFile?.childImageSharp
            ?.gatsbyImageData
        }
        alt={image?.alternativeText}
      />
    </>
  )
}

function Breadcrumb(props: {
  breadcrumb?: string;
  slug: string;
  children: React.ReactElement;
}) {
  if (props.breadcrumb) {
    return (
      <Link to={`/${props.breadcrumb}/${props.slug}`}>
        {props.children}
      </Link>
    )
  } else {
    return (
      <Link to={`/${props.slug}`}>
        {props.children}
      </Link>
    )
  }
}

function Byline(props: { byline?: string; }) {
  if (props.byline) {
    return (
      <h3 className="crest">{props.byline}</h3>
    )
  } else {
    return null;
  }
}

const Card = (props: {
  card: CardType;
  breadcrumb?: string;
}) => {
  return (
    <section className="card">
      {/* // TODO: add the link including the breadcrumb */}
      {/* <Link to={`/${props.card.slug}`}> */}
      <Image
        image={props.card?.image}
        venueImage={props.card?.venueImage}
        profileImage={props.card?.profile}
      />
      {/* </Link> */}
      <div className="paper">{/* stay gold */}</div>
      <div className="content">
        <hr />
        <Byline byline={props.card.byline} />
        <h2 className="mixta">
          <Breadcrumb
            slug={props.card.slug}
            breadcrumb={props.breadcrumb}
          >
            <NameTitle name={props.card.name} title={props.card.title} />
          </Breadcrumb>
        </h2>
        <p>{props.card.excerpt}</p>
      </div>
    </section>
  )
}

export default Card
