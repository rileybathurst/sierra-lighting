import * as React from "react"
import { Link } from 'gatsby';
// import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

// markup
const CommercialPage = () => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main className="measure">

        <p className="breadcrumbs"><Link to="/">Home</Link> / Commercial</p>
        <hr />

        <h1>Commercial Christmas Lights &amp; Decor</h1>

        <p>Allow us to help your business spread holiday cheer this season. There is a strong sense of goodwill and community during Christmas, and our lighting displays can help enhance those feelings. For many businesses in Reno, Truckee, and Tahoe, Christmastime is THE most important period of the year. An investment in a beautiful lighting display will help your business stand out from the rest and enhance your bottom line during this busy season for years to come.  We can install lights on shopping centers, office buildings, restaurants, municipal buildings, medical facilities, HOA's, schools, car dealerships, and casinos. We also do commercial accent lighting year round.  Please check out our patio lights page for more information.</p>

        {/* 📣 after here is sort of the same as commercial */}
        <h2>Display Consulting and Planning</h2>

        <p>We strive to accommodate customers at any point in the season. After the initial communication, Sierra Christmas Lights will send one of our designers to your site.  Our goal is to learn about your vision, budget, and preferences. Our professional lighting designer will provide you with a clear plan for your project with a comprehensive budget, renderings, examples of similar past work, and options to fit your tastes. We have a host of LED lighting options, wreaths, garlands, indoor and exterior decor, trees, and snowflakes to make your business shine. When you hire Sierra Christmas Lights, you get a dependable partner so you can focus on your business. We take care of the rest!</p>

        <h3>Christmas Light Install</h3>

        <p>Our goal is to make certain your property shines for that holiday party, concert, sale, or event.  Please specify the date you would like install finished and we will do our absolute best to make it happen.  We send out a crew of highly experienced technicians to complete installation at the time that works for you. We will create an elegant holiday display that woos your customers, increases traffic and visibility to your locale, and enhances your profits.</p>

        <h2>Full Season Maintenance and Support</h2>

        <p>Christmas is such a busy time of year for any business owner.  Take holiday lighting off your to do list today by hiring the team at Sierra Christmas Lights.  We source the highest quality LED lights and displays, and exclusively use custom commercial grade materials to ensure the reliability and beauty of your display.  Should there be an issue, we are just a call, text, or email away. Timely fixes are our priority. We have service teams on call located in both Truckee / Tahoe and Reno to ensure prompt service if something goes wrong.</p>

        <h2>Worry Free Takedown and Storage</h2>

        <p>After the holidays are over, we remove your display during the first two weeks of January.  Our goal is to work around your customers’ needs and integrate seamlessly into your business, creating the minimum presence possible.  Allow us to store your holiday display until next season in our secure facility. We’d like to minimize the chance your display gets damaged or lost by ensuring proper storage for the remainder of the year.  We’ll be in touch next fall for another beautiful, worry free, profitable Christmas season.</p>

      </main>

      <Footer />

    </>
  )
}

export default CommercialPage
