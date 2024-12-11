import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from 'gatsby';

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import Star from "../images/star";
import FeedbackForm from "../components/feedback-form";

type LocationTypes = {
  location: {
    pathname: string;
    search: string;
  }
}
const FeedbackPage = ({ location }: LocationTypes) => {

  const jobberParams = new URLSearchParams(location.search);

  let jobberName = '';
  let jobberEmail = '';
  for (const [key, value] of jobberParams.entries()) {
    if (key === 'name') {
      jobberName = value;
    }
    if (key === 'email') {
      jobberEmail = value;
    }
  }

  const data = useStaticQuery(graphql`
    query FeedbackQuery {
      strapiFeedback {
        starting
        positive
        negative
      }

      strapiAbout {
        googleReviews
      }
    }
  `);

  const [positive, setPositive] = useState(false);
  const [negative, setNegative] = useState(false);

  const [oneStar, setOneStar] = useState(false);
  const [twoStar, setTwoStar] = useState(false);
  const [threeStar, setThreeStar] = useState(false);
  const [fourStar, setFourStar] = useState(false);
  const [fiveStar, setFiveStar] = useState(false);

  const [oneHover, setOneHover] = useState(false);
  const [twoHover, setTwoHover] = useState(false);
  const [threeHover, setThreeHover] = useState(false);
  const [fourHover, setFourHover] = useState(false);
  const [fiveHover, setFiveHover] = useState(false);

  const [stars, setStars] = useState(0);


  const One = () => {
    setPositive(false);
    setNegative(true);
    setOneStar(true);
    setTwoStar(false);
    setThreeStar(false);
    setFourStar(false);
    setFiveStar(false);
    setStars(1);
  }

  const Two = () => {
    setPositive(false);
    setNegative(true);
    setOneStar(true);
    setTwoStar(true);
    setThreeStar(false);
    setFourStar(false);
    setFiveStar(false);
    setStars(2);
  }

  const Three = () => {
    setPositive(false);
    setNegative(true);
    setOneStar(true);
    setTwoStar(true);
    setThreeStar(true);
    setFourStar(false);
    setFiveStar(false);
    setStars(3);
  }

  const Four = () => {
    setPositive(false);
    setNegative(true);
    setOneStar(true);
    setTwoStar(true);
    setThreeStar(true);
    setFourStar(true);
    setFiveStar(false);
    setStars(4);
  }

  const Five = () => {
    setPositive(true);
    setNegative(false);
    setOneStar(true);
    setTwoStar(true);
    setThreeStar(true);
    setFourStar(true);
    setFiveStar(true);
    setStars(5);
  }

  const OneHover = () => {
    setOneHover(true);
    setTwoHover(false);
    setThreeHover(false);
    setFourHover(false);
    setFiveHover(false);
  }

  const TwoHover = () => {
    setOneHover(true);
    setTwoHover(true);
    setThreeHover(false);
    setFourHover(false);
    setFiveHover(false);
  }

  const ThreeHover = () => {
    setOneHover(true);
    setTwoHover(true);
    setThreeHover(true);
    setFourHover(false);
    setFiveHover(false);
  }

  const FourHover = () => {
    setOneHover(true);
    setTwoHover(true);
    setThreeHover(true);
    setFourHover(true);
    setFiveHover(false);
  }

  const FiveHover = () => {
    setOneHover(true);
    setTwoHover(true);
    setThreeHover(true);
    setFourHover(true);
    setFiveHover(true);
  }



  useEffect(() => {
    if (fiveStar) {
      const timer = setTimeout(() => {
        window.location.href = data.strapiAbout.googleReviews;
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [fiveStar, data.strapiAbout.googleReviews]);

  return (
    <>
      <Header />

      <main className="stork">

        <h1>Feedback</h1>
        <p>{data.strapiFeedback.starting}</p>

        <div className="feedback-stars">
          <button type="button" title="1 Star Button"
            className={`feedback-star ${oneStar ? 'active' : ''} ${oneHover ? 'hover' : ''}`}
            onClick={One}
            onMouseOver={OneHover}
            onFocus={OneHover}
          >
            <Star />
          </button>
          <button type="button" title="2 Star Button"
            onClick={Two}
            onMouseOver={TwoHover}
            onFocus={TwoHover}
            className={`feedback-star ${twoStar ? 'active' : ''} ${twoHover ? 'hover' : ''}`}
          >
            <Star />
          </button>
          <button type="button" title="3 Star Button"
            onClick={Three}
            onMouseOver={ThreeHover}
            onFocus={ThreeHover}
            className={`feedback-star ${threeStar ? 'active' : ''} ${threeHover ? 'hover' : ''}`}
          >
            <Star />
          </button>
          <button type="button" title="4 Star Button"
            onClick={Four}
            onMouseOver={FourHover}
            onFocus={FourHover}
            className={`feedback-star ${fourStar ? 'active' : ''} ${fourHover ? 'hover' : ''}`}
          >
            <Star />
          </button>
          <button type="button" title="5 Star Button"
            onClick={Five}
            onMouseOver={FiveHover}
            onFocus={FiveHover}
            className={`feedback-star ${fiveStar ? 'active' : ''} ${fiveHover ? 'hover' : ''}`}
          >
            <Star />
          </button>
        </div>

        {stars > 0 &&
          <h3>{stars} Star</h3>
        }

        {positive &&
          <>
            <p>{data.strapiFeedback.positive}</p>
            <button
              className="button"
              type="button"
              onClick={() => window.open(data.strapiAbout.googleReviews, "_blank", "noopener,noreferrer")}
            >
              Please Leave Us A Review
            </button>
          </>

        }
        {negative && <>
          <p>{data.strapiFeedback.negative}</p>
          <h3
          >
            Please Let Us Know How We Can Improve
          </h3>

          <FeedbackForm
            stars={stars}
            name={jobberName}
            email={jobberEmail}
            title={false}
          />
        </>
        }

      </main >

      <Footer quote={false} />

    </>
  )
}

export default FeedbackPage

export const Head = () => {
  return (
    <SEO
      title='Feedback'
      description="We value your feedback and would love to hear your thoughts about your experience."
    />
  )
}