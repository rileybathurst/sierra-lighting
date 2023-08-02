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
  title: string | undefined;
  name: string | undefined;
}) {

  // this broke after 2
  // var image = props?.image ? props?.image : props?.venueImage;

  if (props.image?.alternativeText === null) {
    let name = props.name ? props.name : props.title;
    console.log(`${name} image is missing an alt tag`);
  }

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
        alt={image?.alternativeText || props.title || props.name}
      />
    </>
  )
}

function Breadcrumb(props: {
  breadcrumb: ["light" | "vendor" | "service"];
  slug: string | undefined;
  className?: string | undefined;
  children: React.ReactElement;
}) {
  if (props.breadcrumb) {
    return (
      <Link
        to={`/${props.breadcrumb}/${props.slug}`}
        className={props.className}
      >
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
      <Breadcrumb
        slug={props.card.slug}
        breadcrumb={props.breadcrumb}
        className="image"
      >
        <Image
          image={props.card?.image}
          venueImage={props.card?.venueImage}
          profileImage={props.card?.profile}
          name={props.card.name} title={props.card.title}
        />
      </Breadcrumb>
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
