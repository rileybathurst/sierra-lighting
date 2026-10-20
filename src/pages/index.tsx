import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Markdown from "react-markdown";
import Areas from "../components/areas";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import Season from "../components/season";
import { SEO } from "../components/seo";
import Start from "../components/start";
import Suite from "../components/suite";

import BackImage from "../images/BackImage";
import HeroWeddingBackImage from "../images/HeroWeddingBackImage";
import Logo from "../images/logo";
import type { CardType } from "../types/card-type";

const IndexPage = ({ location }: { location: Location }) => {
  // console.log(location);

  const {
    strapiAbout,
    allStrapiService,
    allStrapiQuality,
    strapiHero,
    residentialLights,
    commercialLights,
    weddingLights,
  } = useStaticQuery(graphql`
    query IndexQuery {
      strapiAbout {
        description {
          data {
            description
          }
        }
        slogan
      }

      allStrapiService {
        nodes {
          ...suiteFragment
        }
      }

      allStrapiQuality {
        nodes {
          id
          name
          eyebrow
          description {
            data {
              description
            }
          }
        }
      }

      strapiHero {
        front {
          ...heroSEOImageFragment
        }
        wedding_front {
          ...heroSEOImageFragment
        }
      }

      residentialLights: allStrapiLight(
        filter: {featured_service: {elemMatch: {slug: {eq: "residential"}}}},
        limit: 1,
        sort: {xmasOrder: ASC}) {
        nodes {
          ...lightCard
        }
      }

      commercialLights: allStrapiLight(filter: {featured_service: {elemMatch: {slug: {eq: "commercial"}}}}, limit: 1,
        sort: {xmasOrder: ASC}) {
        nodes {
          ...lightCard
        }
      }

      weddingLights: allStrapiLight(filter: {featured_service: {elemMatch: {slug: {eq: "wedding"}}}}, limit: 1,
        sort: {weddingOrder: ASC}) {
        nodes {
          ...lightCard
        }
      }

    }
  `);

  interface QualityTypes {
    id: React.Key;
    name: string;
    eyebrow: string;
    description: {
      data: {
        description: string;
      };
    };
  }

  type TriptychSection = {
    title: string;
    link: string;
    card: {
      nodes: CardType[];
    };
    // width?: "double" | "triple";
  };

  const featuredServiceLights: TriptychSection[] = [
    {
      title: "Residential Christmas",
      card: residentialLights,
      link: "/residential/lights",
    },
    {
      title: "Commercial Christmas",
      card: commercialLights,
      link: "/commercial/lights",
    },
    { title: "Wedding", card: weddingLights, link: "/wedding/lights" },
  ];

  return (
    <>
      <Header largeLogo={false} />

      <main className="albatross margin-block-start-0">
        {/* // TODO: tidy up these classes */}
        <div className={`masthead ${Season()}`}>
          <div className="large-visibility logo">
            <Logo />
          </div>

          <h2>
            {strapiAbout.slogan.split(" ").map((word: string) => (
              <React.Fragment key={word}>
                {word}
                <br className="medium-up" />
              </React.Fragment>
            ))}
          </h2>

          {/* // TODO: Hero needs renaming now that I'm more happy with it */}
          <div className="images">
            {Season() === "wedding" ? <HeroWeddingBackImage /> : <BackImage />}
            {Season() === "wedding" ? (
              <GatsbyImage
                image={
                  strapiHero.wedding_front.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={strapiHero.wedding_front.alternativeText || "hero image"}
                className="front"
                backgroundColor="transparent"
              />
            ) : (
              <GatsbyImage
                image={
                  strapiHero.front.localFile.childImageSharp.gatsbyImageData
                }
                alt={strapiHero.front.alternativeText || "hero image"}
                className="front"
                backgroundColor="transparent"
              />
            )}
          </div>

          <section className="text">
            <div className="background">{/* stay gold */}</div>
            {strapiAbout ? (
              <Markdown
                components={{
                  p: ({ node, ...props }) => (
                    <div className="react-markdown" {...props} />
                  ),
                }}
              >
                {strapiAbout.description.data.description}
              </Markdown>
            ) : null}
            <Start path="hero" />
          </section>
        </div>
      </main>

      {/* // TODO: 2 columns becomes 1 or 3 and this seems like it should be repeated? */}
      {/* * this is under the biggest specific image so its currently ok but will be updated */}
      {/* // ? this is albatross nested under albatross does it need to be or whats the best way to clean that up */}

      {/* // TODO: the text in these is old and weird it needs updating */}
      {/* // TODO: qualities and process are similar but different I kinda think need to differentiate more */}
      {/* // TODO: move these also to services */}
      <section className="qualities albatross">
        {allStrapiQuality.nodes.map((quality: QualityTypes) => (
          <section key={quality.id}>
            <h3 className="font-serif">{quality.name}</h3>
            <p>{quality.description.data.description}</p>
          </section>
        ))}
        {/* // TODO: this is a different text that the list items */}
        <h3 className="eyebrow">
          <Link to="/process">
            Learn More About Our Process And Safety Practices
          </Link>
        </h3>
      </section>

      <Suite services={allStrapiService.nodes} />

      <div className="main">
        {/* // TODO: if its just spaces do it in a better way */}
        <p>&nbsp;</p>
        <Start path="index-services" />
      </div>

      <hr className="albatross " />

      <section className="deck">
        {featuredServiceLights.map(({ title, card, link }) => (
          <div key={title}>
            <h4>
              <Link to={link}>{title} Lights</Link>
            </h4>
            {card.nodes.map((c: CardType) => (
              <Card key={c.id} {...c} breadcrumb="light" />
            ))}
          </div>
        ))}
      </section>

      <hr className="albatross " />

      {/* // TODO: this puts a second main in the page */}
      <Areas />

      <Footer location={location} />
    </>
  );
};

export default IndexPage;

export const Head = () => {
  return <SEO />;
};
