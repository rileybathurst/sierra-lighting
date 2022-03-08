import * as React from "react"
// import { Link, StaticQuery, graphql } from 'gatsby';
// import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

// markup
const ResidentialPage = () => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main className="measure">

        <h1>Residential Christmas Lights and Decor</h1>
        <p>It&#39;s the most wonderful time of the year, Christmas, when feelings of joy, love, and giving shine through. Allow Sierra Christmas Lights to further enhance these feelings, and add even more Christmas cheer. Imagine your family gathered around the tree, while your home sparkles and beckons from outside. We are here to help you make the most of this special time of year, while removing any stress of decorating from it.</p>

        {/* 📣 after here is sort of the same as commercial */}
        <h2>Display Consulting and Planning</h2>

        <p>Whether you&#39;d like a simple spruce decorated with beautiful C9 bulbs floating in space, or the whole enchilada, with rooflines, trees, stake lighting, snowflakes, orbs, wreaths, garlands, bows, and figurines, our professional lighting designers will make it happen.  After you contact us with your vision, we will head to your home to discuss the logistics, options, and costs. With a budget in hand, you can make the decision as to what works best for your tastes. We aim to please and wow.</p>

        <h3>Christmas Light Install</h3>

        <p>Sierra Christmas Lights is your full service, hassle free lighting solution.  We send our crew of talented lighting technicians to your home for installation.  They will take your vision and turn it into reality using the highest grade commercial LED materials.  Our displays are custom fit to your home, ensuring a seamless, elegant look with no extra bulbs and line cluttering up the visual spectacle. Additionally, the materials we use are super efficient and durable, for a long life and minimal power bill. You no longer have to worry about tipsy ladders, leaning over rooflines, untangling lights and dealing with strands that are out. Relax and enjoy while our crew takes the danger and hassle out of holiday lighting.</p>

        <h3>Full Season Maintenance and Support</h3>

        <p>Once the lights are up, we are only half done.  We want you to be able to count on a brilliant holiday display all season long.  Should anything happen, our techs are just a quick phone call, email, or text away.  Sierra Christmas Lights has maintenance crews on call in both Reno and Tahoe Truckee to ensure prompt service should something go wrong.</p>

        <h3>Worry Free Takedown and Storage</h3>

        <p>After the holidays are over, we will be by in the first two weeks of January for takedown.  We affix your display using techniques that cause zero damage to your home, so it will look just as beautiful once the lights comes down.  After cleanup is complete, allow us to store your display. With Sierra Christmas Lights, you no longer have to take up valuable space in you home 10 months of the year, or worry about losing your display.  We store if for you in our secure facility, free of charge. We&#39;ll be in touch next fall for another magical season.</p>

      </main>

      <Footer />

    </>
  )
}

export default ResidentialPage
