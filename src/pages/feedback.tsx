import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import Star from "../images/star";
import ReviewForm from "../components/review-form";

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

  const { strapiReview } = useStaticQuery(graphql`
    query ReviewsQuery {
      strapiReview {
        starting
        positive
        negative
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

  return (
    <>
      <Header />

      <main className="stork">

        <h1>Reviews</h1>
        <p>{strapiReview.starting}</p>

        <div className="review-stars">
          <button type="button" title="1 Star Button"
            className={`review-star ${oneStar ? 'active' : ''} ${oneHover ? 'hover' : ''}`}
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
            className={`review-star ${twoStar ? 'active' : ''} ${twoHover ? 'hover' : ''}`}
          >
            <Star />
          </button>
          <button type="button" title="3 Star Button"
            onClick={Three}
            onMouseOver={ThreeHover}
            onFocus={ThreeHover}
            className={`review-star ${threeStar ? 'active' : ''} ${threeHover ? 'hover' : ''}`}
          >
            <Star />
          </button>
          <button type="button" title="4 Star Button"
            onClick={Four}
            onMouseOver={FourHover}
            onFocus={FourHover}
            className={`review-star ${fourStar ? 'active' : ''} ${fourHover ? 'hover' : ''}`}
          >
            <Star />
          </button>
          <button type="button" title="5 Star Button"
            onClick={Five}
            onMouseOver={FiveHover}
            onFocus={FiveHover}
            className={`review-star ${fiveStar ? 'active' : ''} ${fiveHover ? 'hover' : ''}`}
          >
            <Star />
          </button>
        </div>

        {stars > 0 &&
          <h3>{stars} Star</h3>
        }

        {positive &&
          <>
            <p>{strapiReview.positive}</p>
            <button
              className="button"
              type="button"
              onClick={() => window.open("https://g.page/r/CXdQyNRhzs8YEAI/review", "_blank", "noopener,noreferrer")}
            >
              Please Leave Us A Review
            </button>
          </>

        }
        {negative && <>
          <p>{strapiReview.negative}</p>
          <h3
          >
            Please Let Us Know How We Can Improve
          </h3>

          <ReviewForm
            stars={stars}
            name={jobberName}
            email={jobberEmail}
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
      title='Reviews'
      description="We value your feedback and would love to hear your thoughts about your experience."
    // image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/testimonials-og-sierra_lighting.jpg"
    />
  )
}