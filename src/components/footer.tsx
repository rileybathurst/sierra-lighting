import * as React from "react"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

import Logo from "../images/logo";
import Menu from "./menu";
import SocialIcons from "../components/social-icons";
import TopBar from "./topbar";
import TopList from "../lists/top-list";
import FooterList from "../lists/footer-list";

function ThisYear() {
  let today = new Date().getFullYear();
  // console.log(today);
  return (
    <>
      {today}
    </>
  );
}

export function Profile() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/we_hang_lights.jpg"
    alt="christmas lights team about us"
    className="profile" />
}



const Footer = () => {
  return (
    <footer>
      <hr className="measure" />
      <div className="footer-container">
        <section id="contact" className="contact">


          <h3 className="crest">Contact</h3>
          <h4 className="range">Say Hello</h4>

          <div className="contact-info">
            <p><a href="mailto:sierrachristmaslights@gmail.com">sierrachristmaslights@gmail.com</a></p>
            <p><a href="tel:+1-775-525-1898">Nevada Number: (775) 525-1898</a></p>
            <p><a href="tel:+1-530-414-9899">California Number: (530) 414-9899</a></p>
          </div>
        </section>

        <div id="team" className="team measure">
          <h3 className="crest">Who We Are</h3>
          <h4 className="range">Meet Our Team</h4>
          <div className="team-heads spin">
            <div>
              <Link to="/team#jessica">
                <Profile />
                <p>Rom</p>
              </Link>
            </div>

            <div>
              <Link to="/team#kiley">
                <Profile />
                <p>Adam</p>
              </Link>
            </div>

            <div>
              <Link to="/team#rachael">
                <Profile />
                <p>Bex</p>
              </Link>
            </div>
          </div>
          <Link to="/work">Work with us</Link>
        </div>
      </div>

      <hr className="measure" />

      <form className="measure">
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

      <div className="footer-container">
        {/* I need to add this to an auto update */}
        <h4 className="sr-only">
          <Link to="/" title="to the front page">
            Sierra Lighting
          </Link>
        </h4>



        <Link to="/"><Logo /></Link>
        <p>&copy; <ThisYear /></p>
      </div>

      {/* Google Tag Manager (noscript) */}
      {/*       <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NFVF3W7"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}
      {/* End Google Tag Manager (noscript) */}

    </footer>
  )
}

export default Footer