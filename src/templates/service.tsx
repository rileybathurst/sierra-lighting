// ! this needs to move to static Query
// TODO: add FAQ

import React from 'react';
import { graphql, Link } from 'gatsby'

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import Card from '../components/card';
import { GatsbyImage } from 'gatsby-plugin-image';

// import Process from '../components/fragments/process';

function ReactDescription(props) {
  // console.log(props.description)
  if (props?.description) {
    return (
      <ReactMarkdown
        children={props?.description}
        remarkPlugins={[remarkGfm]}
      />
    );
  } else {
    return null;
  }
}

const ServiceView = ({ data }) => {
  return (
    <>
      <Seo
        title={`${data.strapiService.name} Lighting | Sierra Lighting`}
        description={data.strapiService?.excerpt}
        /// TODO: check this query
        image={data.strapiService?.ogImage}
      />
      <Header />

      <main>
        <section className="measure">
          <h1 className='mixta'>
            {/* // TODO: needs a clamp on the size */}
            {data.strapiService.name} Lighting
          </h1>

          <ReactDescription
            description={data.strapiService.description.data.description}
          />
        </section>

        <section className="triple">
          {data.strapiService?.triptych?.map((image) => (
            <div key={image.id}>
              <GatsbyImage image={image?.localFile?.childImageSharp?.gatsbyImageData}
                alt=""
                objectFit="fill"
              />
            </div>
          ))}
        </section>

      </main>

      <section id="process" className='measure'>
        <h2>Our Process</h2>
        <ol>
          {data.allStrapiProcess.nodes.map((process: {
            id: React.Key;
            name: string;
            markdown: { data: { markdown: string } };
          }) => (
            <li key={process.id}>
              <span className="ol-title">{process.name}</span>
              {/* // TODO: this needs markdown processing, its fine now as theres no links etc */}
              <span>{process.markdown.data.markdown}</span>
            </li>
          ))}
        </ol>
        <p>
          <Link to="/faq">
            Learn more about our process on our FAQ page
          </Link>
        </p>
        <hr />
      </section>

      <section id="lights">
        <div className="measure">
          <h3 className="crest">Bringing the shine</h3>
          <h2 className="ridge mixta">
            <Link to="/lights/wedding" className="link--subtle">
              Lighting Styles
            </Link>
          </h2>
        </div>

        <div className='deck'>
          {data.allStrapiLight.nodes.map((light) => (
            <div key={light.id}>
              <Card
                card={light}
                breadcrumb='light'
              />
            </div>
          ))}
          {/* // TODO: including the view more etc */}
        </div>

        <div className="measure" >
          <h5 className="range">
            {/* <Link
              // ! I think this link is wrong or the page isnt built yet
              to={`/lights/${data.strapiService.slug}`}
              to={`/lights`}
              className="link--subtle">
              View all other lights
            </Link> */}
          </h5>
          <p>Have something particular in mind? Just ask!</p>
          <hr />
        </div>
      </section>

      <div id="consultant" className='measure'>
        <p>
          Have you ever noticed how much lighting can affect the feeling of space?
        </p>

        <p>
          The natural beauty of the Reno Tahoe area make the perfect backdrop for a wedding. Our custom lighting design enhances your decor and the architectural / landscape features of your venue. Wether your aiming for a low key affair or a luxurious event, we work with you to create the perfect mood.
        </p>

        <p>
          We exclusively use modern LED technology, wireless and battery powered where possible. With wireless LEDs, we are eliminating fire risks from traditional technology, reducing tripping hazards and clutter in your photos. We use modern RGB technology to create the perfect lighting effects to highlight your decor and create the ideal mood for your big day. For example, ambers / warm whites add a flattering and romantic glow while deep purple / blue can amp up guests for the dance party portion of the night. You can choose a unified color scheme, select a palette of complimentary colors or even plan changes throughout your event.
        </p>



        {/* // 
        Wedding has services here
        christmas might have areas? but thats less of a thing
        */}

      </div>



      <div className='measure'>
        <hr />
        <h3 className="crest">What have we done</h3>
        <h2 className="ridge mixta">Projects</h2>
      </div>
      <div className='deck'>
        {data.strapiService.projects.map((project) => (
          <div key={project.id}>
            <Card
              card={project}
              breadcrumb='project'
            />
          </div>
        ))}
      </div>


      {/* // TODO: Wedding Venues & Vendors as a big link I dont think we bring through any specific as cards */}

      <Footer />

    </>
  );
};

export default ServiceView;

export const query = graphql`
  query ServiceTemplate(
    $slug: String!,
  ) {
    strapiService(slug: {eq: $slug}) {
      id
      name
      slug
      
      description {
        data {
          description
        }
      }

      projects {
        ...projectCard
      }

      triptych {
        id
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }

    allStrapiLight(
      limit: 3,
      filter: {services: {elemMatch: {slug: {eq: $slug}}}}
      ) {
      nodes {
        ...lightCard
      }
    }

    allStrapiProcess {
      nodes {
        ...process
      }
    }
  }
`

// excerpt