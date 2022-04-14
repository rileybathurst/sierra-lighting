import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Logo from "../images/logo";
import SocialIcons from "../components/social-icons";
import FooterList from "../lists/footer-list";

function ThisYear() {
  let today = new Date().getFullYear();
  return (
    <>
      {today}
    </>
  );
}

const Footer = () => {
  return (
    <footer itemScope itemType="https://schema.org/Organization">
      {/* https://schema.org/Organization */}
      <hr className="measure" />
      <div className="footer-container">
        <section id="contact" className="contact">

          <h3 className="crest">Contact</h3>
          <h4 className="range">Say Hello</h4>

          <div className="contact-info">
            <p><a href="mailto:sierrachristmaslights@gmail.com"><span itemProp="email">sierrachristmaslights@gmail.com</span></a></p>
            <p><a href="tel:+1-775-525-1898">Nevada Number: <span itemProp="telephone">(775) 525-1898</span></a></p>
            <p><a href="tel:+1-530-414-9899">California Number: <span itemProp="telephone">(530) 414-9899</span></a></p>
          </div>
        </section>



        <div id="team" className="team measure">
          <h3 className="crest">Who We Are</h3>
          <h4 className="range">Meet Our Team</h4>

          <div className="team-heads spin">
            <StaticQuery
              query={query}
              render={data => (
                <>
                  {
                    data.residential.nodes.map(team => (

                      <div key={team.id}>
                        <Link to={`/team/${team.slug}`}>
                          <GatsbyImage
                            image={
                              team?.avatar?.localFile?.childImageSharp
                                ?.gatsbyImageData
                            }
                            alt={team.avatar?.alternativeText}
                            className=""
                          />

                          <p itemScope itemProp="Person" itemType="https://schema.org/Person">
                            <span itemProp="name">{team.name}</span>
                            {/* // ? should this have a last name even if its only sr */}
                          </p>
                        </Link>
                      </div>

                    ))
                  }
                </>
              )}
            />
          </div>

          <h4><Link to="/work">Work with us</Link></h4>
        </div>
      </div>

      <hr className="measure" />

      <form name="contact" data-netlify="true" className="measure">
        <label>Name
          <input type="text" />
        </label>
        <label>Email
          <input type="email" />
        </label>
        <label>Phone
          <input type="tel" />
        </label>
        <label>Message
          <textarea />
        </label>
        <button>Send</button>
      </form>

      <hr className="measure" />

      <SocialIcons />

      <hr className="measure" />

      <div className="measure">
        <ul className="footer_list">
          <FooterList />
        </ul>

        <hr />
      </div>

      <div className="footer-copyright">
        {/* I need to add this to an auto update */}
        <h4 className="sr-only" itemProp="name">
          <Link to="/" title="to the front page">
            Sierra Lighting
          </Link>
        </h4>

        <Link to="/">
          <Logo />
        </Link>
        <p>&copy; <ThisYear /></p>
      </div>

    </footer>
  )
}

export default Footer

const query = graphql`
query FooterQuery {
  residential: allStrapiTeam {
    nodes {
      id
      name
      slug

      avatar {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }

    }
  }
}
`

// alternativeText