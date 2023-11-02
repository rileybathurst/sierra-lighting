// specifically removed from the SEO on Rom's request

// I bet eventually you could create these progamatically

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Header from "../../components/header";
import Footer from "../../components/footer";

function ResidentialShowcase() {

  const { allStrapiProject } = useStaticQuery(graphql`
    query ShowcaseQuery {
      allStrapiProject(filter: {services: {elemMatch: {slug: {eq: "residential"}}}}) {
        nodes {
          slug
          title

          image {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }

        }
      }
    }
  `);


  return (
    <>
      <Header />
      <div className="measure">
        <ol className="breadcrumbs">
          <li >
            <Link to="/residential">
              Residential
            </Link>&nbsp;/&nbsp;
          </li>
          <li>Showcase</li>
        </ol>
        <hr />
      </div>
      <main className="measure">
        <h1 className="mixta">Residential Showcase</h1>

        {/*         <ul>
          <li>Gold</li>
          <li>Silver</li>
          <li>Bronze</li>
        </ul> */}

        <section>
          <hr />
          {allStrapiProject.nodes.map(project => (
            <>
              <GatsbyImage
                image={project.image?.localFile?.childImageSharp?.gatsbyImageData}
                alt={project.title}
                className="poster"
              />
            </>
          ))}

          <h3>Gold Project</h3>
          <div className="attributes">
            <section className="attribute">
              <h3 className="crest">Price</h3>
              <h4 className="range">
                {/* <Link to={`#`} className="link--subtle"> */}
                $2k +
                {/* </Link> */}
              </h4>
            </section>
            <section className="attribute">
              <h3 className="crest">Roofline</h3>
              <h4 className="range">
                <Link to={`#`} className="link--subtle">
                  Multiple Peaks
                </Link>
              </h4>
            </section>
            <section className="attribute">
              <h3 className="crest">Trees</h3>
              <h4 className="range">
                <Link to={`#`} className="link--subtle">
                  Limb and Trunk Wrap
                </Link>
              </h4>
            </section>
          </div>
          <hr />
        </section>

        <section>
          {allStrapiProject.nodes.map(project => (
            <>
              <GatsbyImage
                image={project.image?.localFile?.childImageSharp?.gatsbyImageData}
                alt={project.title}
                className="poster"
              />
            </>
          ))}
          <h3>Silver Project</h3>
          <div className="attributes">
            <section className="attribute">
              <h3 className="crest">Price</h3>
              <h4 className="range">~ $2k</h4>
            </section>
            <section className="attribute">
              <h3 className="crest">Roofline</h3>
              <h4 className="range">
                <Link to={`#`} className="link--subtle">
                  Single Story with Peaks
                </Link>
              </h4>
            </section>
            <section className="attribute">
              <h3 className="crest">Trees</h3>
              <h4 className="range">
                <Link to={`#`} className="link--subtle">
                  C9 Swirls
                </Link>
              </h4>
            </section>
          </div>
          <hr />
        </section>



        <section>
          {allStrapiProject.nodes.map(project => (
            <>
              <GatsbyImage
                image={project.image?.localFile?.childImageSharp?.gatsbyImageData}
                alt={project.title}
                className="poster"
              />
            </>
          ))}
          <h3>Bronze Project</h3>
          <div className="attributes">
            <section className="attribute">
              <h3 className="crest">Price</h3>
              <h4 className="range">~ $1k</h4>
            </section>
            <section className="attribute">
              <h3 className="crest">Roofline</h3>
              <h4 className="range">
                <Link to={`#`} className="link--subtle">
                  Single Story
                </Link>
              </h4>
            </section>
            <section className="attribute">
              <h3 className="crest">Trees</h3>
              <h4 className="range">
                <Link to={`#`} className="link--subtle">
                  Small Swirl
                </Link>
              </h4>
            </section>
          </div>
        </section>




        {/* //?Table Maybe idea? */}
        {/* <div className="showcase--table">
          <div>
            <p>Scale</p>
            <h3>Gold</h3>
            <h3>Silver</h3>
            <h3>Bronze</h3>
          </div>
          <div>
            <p>Roofline</p>
            <h4>Complex Multistory</h4>
            <h4>Medium</h4>
            <h4>Simple Singlestory</h4>
          </div>
          <div>
            <p>Trees</p>
            <h4>Limb and Trunk Wrap </h4>
            <h4>Trunk Wrap</h4>
            <h4>Small Swirl</h4>
          </div>
        </div> */}

      </main>
      <Footer />
    </>
  )
}

export default ResidentialShowcase
