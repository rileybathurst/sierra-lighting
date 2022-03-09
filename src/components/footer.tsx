import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby";

import Logo from "../images/logo";
import Menu from "./menu";
import SocialIcons from "../components/social-icons";

function ThisYear() {
  let today = new Date().getFullYear();
  // console.log(today);
  return (
    <>
      {today}
    </>
  );
}

const Footer = () => {
  return (
    <footer>
      <section id="contact" className="contact">

        <hr />

        <h3 className="crest">Contact</h3>
        <h4 className="range">Say Hello</h4>

        <div className="contact-info">
          <p><a href="mailto:sierrachristmaslights@gmail.com">sierrachristmaslights@gmail.com</a></p>
          <p><a href="tel:+1-775-525-1898">Nevada Number: (775) 525-1898</a></p>
          <p><a href="tel:+1-530-414-9899">California Number: (530) 414-9899</a></p>
        </div>

        <form>
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

      </section>

      <SocialIcons />

      <div className="footer-container">
        {/* I need to add this to an auto update */}
        <h4 className="sr-only">
          <Link to="/" title="to the front page">
            Sierra Lighting
          </Link>
        </h4>

        <Link to="/"><Logo /></Link>
        <p><ThisYear /></p>
      </div>

    </footer>
  )
}

export default Footer