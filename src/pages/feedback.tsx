import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import { useIsWithinBusinessHours } from "../components/business-hours";
import Footer from "../components/footer";
import Header from "../components/header";
import { SEO } from "../components/seo";
import Star from "../images/star";

// TODO: are these getting used?
/* type LocationTypes = {
  location: {
    pathname: string;
    search: string;
  };
}; */

// { location }: LocationTypes
const FeedbackPage = () => {
  const isWithinBusinessHours = useIsWithinBusinessHours();

  // const jobberParams = new URLSearchParams(location.search);

  /* let jobberName = "";
  let jobberEmail = "";
  for (const [key, value] of jobberParams.entries()) {
    if (key === "name") {
      jobberName = value;
    }
    if (key === "email") {
      jobberEmail = value;
    }
  } */

  const { strapiFeedback, strapiAbout, strapiForm } = useStaticQuery(graphql`
    query FeedbackQuery {
      strapiFeedback {
        starting
        positive
        negative
      }

      strapiAbout {
        googleReviews
      }

      strapiForm {
        outsideHours
      }
    }
  `);

  const [stars, setStars] = useState(0);
  const [hoveredStars, setHoveredStars] = useState(0);
  const positive = stars === 5;
  const negative = stars > 0 && !positive;

  useEffect(() => {
    if (positive) {
      const timer = setTimeout(() => {
        window.location.href = strapiAbout.googleReviews;
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [positive, strapiAbout.googleReviews]);

  return (
    <>
      <Header />

      <main>
        <h1>Feedback</h1>
        <p>{strapiFeedback.starting}</p>

        {stars > 0 && (
          <h3>
            {stars} Star{stars > 1 && "s"}
          </h3>
        )}

        {positive && (
          <>
            <p>{strapiFeedback.positive}</p>
            <button
              className="button"
              type="button"
              onClick={() =>
                window.open(
                  strapiAbout.googleReviews,
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Please Leave Us A Review
            </button>
          </>
        )}
        {negative && (
          <>
            <p>{strapiFeedback.negative}</p>
            <h3>Please Let Us Know How We Can Improve</h3>
          </>
        )}

        <form
          name="feedback"
          data-netlify="true"
          netlify-honeypot="bot-field"
          method="POST"
          action="/form-success"
        >
          <input type="hidden" name="form-name" value="feedback" />

          <input
            type="hidden"
            name="subject"
            value={`${!isWithinBusinessHours && "Outside Business Hours: "}Feedback Form from Sierra Lighting`}
          />

          {!isWithinBusinessHours && (
            <input
              className="sr-only"
              type="hidden"
              name="hours"
              value={`${strapiForm.outsideHours}`}
            />
          )}

          <p className="sr-only">
            <label>
              Don&#39;t fill this out if you&#39;re human:
              <input name="bot-field" />
            </label>
          </p>

          <label className={negative ? "" : "sr-only"}>
            Name
            <input type={negative ? "text" : "hidden"} name="name" />
          </label>
          <label className={negative ? "" : "sr-only"}>
            Email
            <input type={negative ? "email" : "hidden"} name="email" />
          </label>
          <label className="sr-only">
            Stars (out of five)
            <input type="number" min="0" max="5" name="stars" value={stars} />
          </label>

          <label className={negative ? "" : "sr-only"}>
            Feedback
            <textarea name="feedback" />
          </label>

          <div className="feedback-stars">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                type="button"
                title={`${rating} Star Button`}
                className={`feedback-star ${rating <= stars ? "active" : ""} ${rating <= hoveredStars ? "hover" : ""}`}
                onClick={() => setStars(rating)}
                onMouseOver={() => setHoveredStars(rating)}
                onFocus={() => setHoveredStars(rating)}
              >
                <Star />
              </button>
            ))}
          </div>

          <button className={negative ? "button" : "sr-only"} type="submit">
            Send
          </button>
        </form>
      </main>

      <Footer quote={false} />
    </>
  );
};

export default FeedbackPage;

export const Head = () => {
  return (
    <SEO
      title="Feedback"
      description="We value your feedback and would love to hear your thoughts about your experience."
    />
  );
};
