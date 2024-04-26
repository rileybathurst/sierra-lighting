import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { CardType } from "../types/card";

// ? should this be an svg?
export function Missing() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/missing-card-image.jpg"
    alt="missing image"
  />
}

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

  if (image?.localFile?.childImageSharp?.gatsbyImageData) {
    return (
      <GatsbyImage
        image={image?.localFile?.childImageSharp?.gatsbyImageData}
        alt={image?.alternativeText || props.title || props.name}
      />
    )
  } else {
    return (
      <Missing />
    )
  }
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

function SubAreas({ areas }) {
  if (areas.length > 0) {
    return (
      <>
        <p>Including:</p>
        <ul>
          {areas.map(area => (
            <li key={area.name}>
              {area.name}
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return null;
  }
}

function Content({ excerpt, subAreas }) {

  console.log('🦄');
  console.log(subAreas);

  if (excerpt) {
    return (
      <p>{excerpt}</p>
    )
  }
  if (subAreas) {

    // console.log(subAreas);

    return (
      <SubAreas areas={subAreas} />
    )
  }

  return null;
}

const Card = (props: {
  card: CardType;
  breadcrumb?: string;
}) => {

  console.log(props.card);
  console.log(props.card.areas);

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
        <h2 className="mixta">
          <Breadcrumb
            slug={props.card.slug}
            breadcrumb={props.breadcrumb}
          >
            <NameTitle name={props.card.name} title={props.card.title} />
          </Breadcrumb>
        </h2>
        <Content
          excerpt={props.card.excerpt}
          subAreas={props.card.areas}
        />
        <p>{props.card.excerpt}</p>
      </div>
    </section>
  )
}

export default Card
