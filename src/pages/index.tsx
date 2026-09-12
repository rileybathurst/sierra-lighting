import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
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
import Suite from '../components/suite';
import type TestimonialTypes from '../types/testimonial-types';

const IndexPage = ({ location }: { location: Location }) => {

  console.log(location);

  const { strapiAbout, allStrapiService, allStrapiTestimonial, allStrapiQuality, strapiHero } = useStaticQuery(graphql`
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

      allStrapiTestimonial(sort: {position: ASC}) {
        nodes {
          ...testimonialCardFragment
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
            {Season() === 'wedding' ? <HeroWeddingBackImage /> : <BackImage />}
            {Season() === 'wedding' ? (
              <GatsbyImage image={strapiHero.wedding_front.localFile.childImageSharp.gatsbyImageData}
                alt={strapiHero.wedding_front.alternativeText || "hero image"}
                className="front"
                backgroundColor="transparent"
              />
            ) :
              <GatsbyImage image={strapiHero.front.localFile.childImageSharp.gatsbyImageData}
                alt={strapiHero.front.alternativeText || "hero image"}
                className="front"
                backgroundColor="transparent"
              />
            }
          </div>

          <section className="text">
            <div className="background">{/* stay gold */}</div>
            {strapiAbout ?
              <Markdown components={{
                p: ({ node, ...props }) => (
                  <div className="react-markdown" {...props} />
                )
              }}
              >
                {strapiAbout.description.data.description}
              </Markdown>
              : null
            }
            <Start
              path="hero"
            />
          </section >

        </div>

        {/* // TODO: 2 columns becomes 1 or 3 and this seems like it should be repeated? */}
        {/* * this is under the biggest specific image so its currently ok but will be updated */}
        <section className="qualities albatross">
          {allStrapiQuality.nodes.map((quality: QualityTypes) => (
            <section key={quality.id}>
              <h3 className='font-serif'>{quality.name}</h3>
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
              {allStrapiTestimonial.nodes.map((testimonial: TestimonialTypes) => {
                const truncationPoint = testimonial.review.indexOf(" ", 160);
                const review = truncationPoint === -1
                  ? testimonial.review
                  : `${testimonial.review.slice(0, truncationPoint)}...`;

                return (
                  <li key={testimonial.id} className="slider">
                    {/* // TODO: once testimonial projects are in place, re-add this */}
                    {/* {testimonial.project ?
                    <h4>
                      <Link to={`/project/${testimonial.project.slug}`}>
                        {testimonial.project.title}
                      </Link>
                    </h4>
                    : null} */}

                    <p>{review}</p>
                    {/* // TODO: className="together" is a bad name */}
                    <div className="together">
                      <h4>{testimonial.customer}</h4>
                      <p>{testimonial.position}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="testimonial-links">
              {/* // ? should I have two crests in a row? */}
              <h3 className="crest">
                <Link to="/testimonials">Read More Reviews</Link>
              </h3>
            </div>
          </section>
        </div>


        <Suite services={allStrapiService.nodes} />
      </main >

      <div className="main">
        {/* // TODO: if its just spaces do it in a better way */}
        <p>&nbsp;</p>
        <Start path="index-services" />
      </div>

      <hr className="albatross " />

      {/* // TODO: this puts a second main in the page */}
      <Areas />

      <Footer location={location} />
    </>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <SEO />
  )
}