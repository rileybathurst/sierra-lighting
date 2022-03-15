import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

export function NorthTahoeEvents() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/North_Tahoe_Events-4-web-tagged.jpg"
    alt="christmas lighting display at North Tahoe Events center"
    className="northtahoeevents" />
}

export function InclineChevron() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Incline-7-web-tagged.jpg"
    alt="christmas tree in Incline village nevada"
    className="inclinechevron" />
}

export function SnowyRoof() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Lakeshore_View-3-web-tagged.jpg"
    alt="christmas lights display on an entrance with a snowy roof in Incline village nevada"
    className="snowyroof" />
}

// markup
const ResidentialPage = () => {
  return (
    <>
      <Seo
        title="Residential Christmas Lights and Decorations"
        description="Sierra Christmas Lights installs lights on homes in Reno, Truckee, and Tahoe.  We are a full service company, covering every aspect from from design, intsall, maintenance, takedown, and storage. Our professional crews can hang lights on trees, rooflines and bushes. We hang garlands and wreaths."
      />
      <Header />
      <main>

        <div className="measure">
          <p className="breadcrumbs"><Link to="/">Home</Link> / Residential</p>
          <hr />

          <h2 className="crest">Christmas Lights Near Me:</h2>
          <h1 className="mixta">Residential Christmas Lights and Decor</h1>
          <p>It&#39;s the most wonderful time of the year, Christmas, when feelings of joy, love, and giving shine through. Allow Sierra Christmas Lights to further enhance these feelings, and add even more Christmas cheer. Imagine your family gathered around the tree, while your home sparkles and beckons from outside. We are here to help you make the most of this special time of year, while removing any stress of decorating from it.</p>
        </div>
        <div className="triple">
          <NorthTahoeEvents />
          <InclineChevron />
          <SnowyRoof />
        </div>

        <div className="measure">
          <hr />
          {/* 📣 after here is sort of the same as commercial */}
          <h2>Display Consulting and Planning</h2>

          <p>Whether you&#39;d like a simple spruce decorated with beautiful C9 bulbs floating in space, or the whole enchilada, with rooflines, trees, stake lighting, snowflakes, orbs, wreaths, garlands, bows, and figurines, our professional lighting designers will make it happen.  After you contact us with your vision, we will head to your home to discuss the logistics, options, and costs. With a budget in hand, you can make the decision as to what works best for your tastes. We aim to please and wow.</p>

          <hr />
          <h3>Christmas Light Install</h3>

          <p>Sierra Christmas Lights is your full service, hassle free lighting solution.  We send our crew of talented lighting technicians to your home for installation.  They will take your vision and turn it into reality using the highest grade commercial LED materials.  Our displays are custom fit to your home, ensuring a seamless, elegant look with no extra bulbs and line cluttering up the visual spectacle. Additionally, the materials we use are super efficient and durable, for a long life and minimal power bill. You no longer have to worry about tipsy ladders, leaning over rooflines, untangling lights and dealing with strands that are out. Relax and enjoy while our crew takes the danger and hassle out of holiday lighting.</p>

          <hr />
          <h3>Full Season Maintenance and Support</h3>

          <p>Once the lights are up, we are only half done.  We want you to be able to count on a brilliant holiday display all season long.  Should anything happen, our techs are just a quick phone call, email, or text away.  Sierra Christmas Lights has maintenance crews on call in both Reno and Tahoe Truckee to ensure prompt service should something go wrong.</p>

          <hr />
          <h3>Worry Free Takedown and Storage</h3>

          <p>After the holidays are over, we will be by in the first two weeks of January for takedown.  We affix your display using techniques that cause zero damage to your home, so it will look just as beautiful once the lights comes down.  After cleanup is complete, allow us to store your display. With Sierra Christmas Lights, you no longer have to take up valuable space in you home 10 months of the year, or worry about losing your display.  We store if for you in our secure facility, free of charge. We&#39;ll be in touch next fall for another magical season.</p>
        </div>
      </main>

      <div className="measure">
        <hr />
        <h3 className="crest">What have we done</h3>
        <h2 className="ridge mixta">Projects</h2>

      </div>

      <div className="deck measure">

        <StaticQuery
          query={query}
          render={data => (
            <>
              {
                data.allStrapiProject.nodes.map(project => (
                  <div key={project.id} className="card">
                    <NorthTahoeEvents />
                    <div className="paper"></div>
                    <div className="content">
                      <hr />
                      {/* <h3 className="crest">{light.byline}</h3> */}
                      <h2 className="mixta">
                        <Link to={`/light/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h2>
                      <p className="description">
                        {project.description.data.description}
                      </p>
                    </div>

                  </div>
                ))
              }
            </>
          )}
        />
      </div>

      <Footer />

    </>
  )
}

export default ResidentialPage

const query = graphql`
query ResidentialProjectQuery {
  allStrapiProject(filter: {service: {eq: "residential"}}) {
    nodes {
      title
      description {
        data {
          description
        }
      }
      slug
    }
  }
}
`
