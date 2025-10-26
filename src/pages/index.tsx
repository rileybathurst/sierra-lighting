import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import type { IGatsbyImageData } from "gatsby-plugin-image";
import { SEO } from "../components/seo";
import Logo from "../images/logo";
import Footer from "../components/footer";
import Areas from '../components/areas';
import Start from "../components/start";
import Markdown from "react-markdown";
import Header from "../components/header";
import Season from "../components/season";
import BackImage from "../images/BackImage";
import HeroWeddingBackImage from "../images/HeroWeddingBackImage";

const IndexPage = () => {

  const data = useStaticQuery(graphql`
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
          id
          name
          slug
          hero_light {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }

          hero_dark {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }

      allStrapiTestimonial(sort: {position: ASC}) {
        nodes {
          id
          customer
          platform
          excerpt
          createdAt
          stars
          title
          position
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
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        wedding_front {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }


    }
  `)

  interface QualityTypes {
    id: React.Key;
    name: string;
    eyebrow: string;
    description: {
      data: {
        description: string;
      }
    }
  }

  interface TestimonialTypes {
    id: React.Key;
    customer: string;
    platform: string;
    excerpt: string;
    createdAt: string;
    stars: number;
    title: string;
    position: string;

    project?: {
      slug?: string;
      title?: string;
    }
  }

  interface ServiceTypes {
    id: React.Key;
    name: string;
    slug: string;
    hero_light: {
      alternativeText: string;
      localFile: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        }
      }
    }
    hero_dark: {
      alternativeText: string;
      localFile: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        }
      }
    }
  }

  console.log(Season());

  return (
    <>
      <Header largeLogo={false} />

      <main className="albatross margin-block-start-0">
        {/* // TODO: tidy up these classes */}
        <div className={`hero-3 ${Season()}`}>
          <div className="large logo">
            <Logo />
          </div>

          <h2>
            {data.strapiAbout.slogan.split(" ").map((word: string) => (
              <React.Fragment key={word}>
                {word}
                <br className="medium-up" />
              </React.Fragment>
            ))}
          </h2>

          {/* // TODO: Hero needs renaming now that I'm more happy with it */}
          <div className="images">
            {Season() === 'wedding' ? <HeroWeddingBackImage /> : <BackImage />}
            {Season() === 'wedding' ? (
              <GatsbyImage image={data.strapiHero.wedding_front.localFile.childImageSharp.gatsbyImageData}
                alt={data.strapiHero.wedding_front.alternativeText || "hero image"}
                className="front"
                backgroundColor="transparent"
              />
                ) :
              <GatsbyImage image={data.strapiHero.front.localFile.childImageSharp.gatsbyImageData}
                alt={data.strapiHero.front.alternativeText || "hero image"}
                className="front"
                backgroundColor="transparent"
              />
            }
          </div>

          <section className="text">
            <div className="background">{/* stay gold */}</div>
            {data.strapiAbout ?
              <Markdown components={{
                p: ({ node, ...props }) => (
                  <div className="react-markdown" {...props} />
                )
              }}
              >
                {data.strapiAbout.description.data.description}
              </Markdown>
              : null
            }
            <Start
              path="hero"
            />
          </section >

        </div>

        <section className="qualities albatross">
          {data.allStrapiQuality.nodes.map((quality: QualityTypes) => (
            <section key={quality.id}>
              <div className='brow'>
                <h3 className='supra'>{quality.name}</h3>
              </div>
              <p>{quality.description.data.description}</p>
            </section>
          ))}
          <h3 className="eyebrow">
            <Link to="/process">Learn more about our process</Link>
          </h3>
        </section>

        <div className="slider-container">
          <section className="slider testimonials">
            <h4>Thanks From Our Customers</h4>

            <ul>
              {/* // TODO: make this a component */}
              {data.allStrapiTestimonial.nodes.map((testimonial: TestimonialTypes) => (
                <li key={testimonial.id} className="slider">
                  {/* // TODO: once testimonial projects are in place, re-add this */}
                  {/* {testimonial.project ?
                    <h4>
                      <Link to={`/project/${testimonial.project.slug}`}>
                        {testimonial.project.title}
                      </Link>
                    </h4>
                    : null} */}

                  <p>{testimonial.excerpt}</p>
                  {/* // TODO: className="together" is a bad name */}
                  <div className="together">
                    <h4>{testimonial.customer}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="testimonial-links">
              {/* // ? should I have two crests in a row? */}
              <h3 className="crest">
                <Link to="/testimonials">Read More Reviews</Link>
              </h3>
            </div>
          </section>
        </div>


        <div className={`home-services ${Season()}`}>
          {data.allStrapiService.nodes.map((service: ServiceTypes) => (
            <Link
              key={service.id}
              to={`/${service.slug}`}
              className={`poster ${service.slug}`}
            >
              {service.hero_light ?
                <>
                  <GatsbyImage image={service.hero_light.localFile.childImageSharp.gatsbyImageData}
                    alt={service.hero_light.alternativeText || service.name}
                  />
                  <span>{service.name}</span>
                </>
                : null}
            </Link>
          ))}
        </div>
      </main >

      <div className="stork">
        <p>&nbsp;</p>
        <Start path="index-services" />
      </div>

      <hr className="albatross " />

      <Areas />

      <Footer />

    </>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <SEO />
  )
}