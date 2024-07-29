import * as React from "react";
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
import HeroTreeScreen from "../images/hero-tree-screen";
import HeroTreeSolid from "../images/hero-tree-solid";

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

          project {
            slug
            title
          }
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

    }
  `)

  interface QualityTypes {
    id: string;
    name: string;
    eyebrow: string;
    description: {
      data: {
        description: string;
      }
    }
  }

  interface TestimonialTypes {
    id: string;
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
    id: string;
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

  return (
    <>
      <Header largeLogo={false} />

      <main className="albatross">
        {/* // TODO: tidy up these classes */}
        <div className="margin-0 hero-2">
          <div className="h2-container">
            <div className="large logo">
              <Logo />
            </div>
            <div className="hero-tree">
              <HeroTreeScreen />
              <HeroTreeSolid />
            </div>
            {/* // TODO: query this */}
            <h2>Illuminating<br className="medium-up" />Moments,<br className="medium-up" /> Year-Round</h2>
          </div>

          <section className="h2-text">
            <h3>{data.strapiAbout.slogan}</h3>
            {data.strapiAbout ?
              <Markdown className='react-markdown'>
                {data.strapiAbout.description.data.description}
              </Markdown>
              : null
            }
            <Start className="button--left-align" />

          </section >
          <div className="hero-2-svg">{/* stay gold */}</div>

        </div>
        {/* <SierraHero2 /> */}

        <section id="qualities" className="qualities albatross">
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
          <section id="slider" className="testimonials">
            <h4>Thanks From Our Customers</h4>

            <ul>
              {data.allStrapiTestimonial.nodes.map((testimonial: TestimonialTypes) => (
                <li key={testimonial.id} className="slider">
                  {/* // TODO: theres a lot of divs and stuff that can be simplified */}
                  {/*  <div>
                    <div className="five-stars">
                      <TestimonialRanking stars={testimonial.stars} />
                      <p className="sr-only">{testimonial.stars}</p>
                      <p className="sr-only">1/5stars</p>
                    </div>
                  </div> */}

                  {testimonial.project ?
                    <h4>
                      <Link to={`/project/${testimonial.project.slug}`}>
                        {testimonial.project.title}
                      </Link>
                    </h4>
                    : null}

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


        <div className="home-services">
          {data.allStrapiService.nodes.map((service: ServiceTypes) => (
            <Link
              key={service.id}
              to={`/${service.slug}`}
              className='poster'
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