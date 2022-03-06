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
        <h3>Contact</h3>
        <h4>Say Hello</h4>

        <p><a href="mailto:sierrachristmaslights@gmail.com">sierrachristmaslights@gmail.com</a></p>
        <p><a href="tel:+1-775-525-1898">Nevada Number: (775) 525-1898</a></p>
        <p><a href="tel:+1-530-414-9899">California Number: (530) 414-9899</a></p>

        <form>
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Phone</label>
          <input type="tel" />
          <label>Message</label>
          <textarea />
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

        <Logo />
        <ThisYear />
      </div>

    </footer>
  )
}

export default Footer