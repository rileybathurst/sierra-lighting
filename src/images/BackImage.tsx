import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

function BackImage() {

  const { strapiHero } = useStaticQuery(graphql`
    query BackImageQuery {
      strapiHero {
        back {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const image = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = image.current;
    createObserver();

    let prevRatio = 0.0;

    function createObserver() {
      let observer: IntersectionObserver;

      const options = {
        threshold: buildThresholdList()
      };

      observer = new IntersectionObserver(handleIntersect, options);
      if (img) {
        observer.observe(img);
      }
    }

    // trust the math
    function buildThresholdList() {
      const thresholds = [];
      const numSteps = 20;

      for (let i = 1.0; i <= numSteps; i++) {
        const ratito = i / numSteps;
        thresholds.push(ratito);
      }

      thresholds.push(0);
      return thresholds;
    }

    interface IntersectionObserverEntry {
      intersectionRatio: number;
    }

    function handleIntersect(entries: IntersectionObserverEntry[]) {
      for (const entry of entries) {
        if (entry.intersectionRatio > prevRatio) {
          setRatio(entry.intersectionRatio + 8);
        } else {
          setRatio(entry.intersectionRatio + 8);
        }

        prevRatio = entry.intersectionRatio + 8;
      }
    }
  });

  const [ratio, setRatio] = useState(0);
  // console.log(ratio);

  // starting style
  const backStyle = {
    marginBlockStart: `${ratio}rem`,
    transition: "2s",
  }

  return (
    <div
      style={backStyle}
      ref={image}
    >{/* needs this to load quick enough */}
      <GatsbyImage
        image={strapiHero.back.localFile.childImageSharp.gatsbyImageData}
        alt={strapiHero.back.alternativeText}
        className="back"
        objectPosition="bottom"
        style={backStyle}
      />
    </div>
  );
}

export default BackImage;
