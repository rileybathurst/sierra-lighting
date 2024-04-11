import * as React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { useStrapiTopBar } from "../hooks/use-strapi-topbar";

import Logo from "../images/logo";
import Footer from "../components/footer";
import Areas from '../components/areas';
import TestimonialRanking from "../components/testimonial-ranking"
import Start from "../components/start";

import Qualities from "../components/qualities";

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import TopBar from "../components/topbar";
import Menu from "../components/menu";
import Season from "../components/season";


const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      strapiSeason {
        wedding
      }
      
      strapiHero {
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          alternativeText
        }
      }

      strapiAbout {
        description {
          data {
            description
          }
        }
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

      }
  `)

  return (
    <>
      <TopBar />
      <main className="margin-0">

        <div className="hero-2">

          <GatsbyImage
            image={data.strapiHero.image.localFile.childImageSharp.gatsbyImageData}
            alt={data.strapiHero.image.alternativeText}
            className="hero-image"
          />

          <Menu />
          <div className='bigboy'>
            <Season>
              <li key="logo" className="logo">
                <Link to="/" className="header__logo" itemProp="logo"><Logo /></Link>
              </li>
              <li key="residential" className="xmas_r">
                <Link to="/residential">Residential<br />Christmas Lights</Link>
              </li>
              <li key="commercial" className="xmas_c">
                <Link to="/commercial">Commercial<br />Christmas Lights</Link>
              </li>
              <li key="wedding" className="wedding">
                <Link to="/wedding">Wedding</Link>
              </li>
              <li key="start" className="c">
                <Link to="/contact">
                  Start With A<br />
                  Free Quote
                </Link>
              </li>
            </Season>
          </div>

          <div className="h2-container">
            <Logo />
            <h2>{useSiteMetadata().slogan}</h2>
          </div>

          <section className="h2-text">
            <ReactMarkdown
              children={data.strapiAbout.description.data.description}
              remarkPlugins={[remarkGfm]}
            />
            <Start className="button--left-align" />

          </section >

        </div >

        <section id="qualities" className="qualities albatross">
          <Qualities />
          <h3 className="eyebrow"><Link to="/process">Learn more about our process</Link></h3>
        </section>



        <div className="slider-container">
          <section id="slider" className="testimonials">
            <h4>Thanks From Our Customers</h4>

            <ul>
              {data.allStrapiTestimonial.nodes.map(testimonial => (
                <li key={testimonial.id} className="slider">
                  {/* // TODO: theres a lot of divs and stuff that can be simplified */}
                  <div>
                    <div className="five-stars">
                      <TestimonialRanking stars={testimonial.stars} />
                      <p className="sr-only">{testimonial.stars}</p>
                      <p className="sr-only">1/5stars</p>
                    </div>
                  </div>
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
          {data.allStrapiService.nodes.map((service) => (
            <Link to={`/${service.slug}`} key={service.id} className='poster'>
              <GatsbyImage image={service.hero_light.localFile.childImageSharp.gatsbyImageData} alt={service.hero_light.alternativeText} />
              <span>{service.name}</span>
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
    <SEO
      title={`${useSiteMetadata().title} | ${useStrapiTopBar()}`}
      image={useSiteMetadata().defaultImage}
    />
  )
}