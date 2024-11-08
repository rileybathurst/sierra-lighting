import * as React from "react"

interface ReviewFormTypes {
  stars: number;
  name: string;
  email: string;
  title: boolean;
}
function ReviewForm({ stars, name, email, title }: ReviewFormTypes) {

  let showTitle = true;
  if (title === false) {
    showTitle = false;
  }

  return (
    <form
      className="stork"
      name="testimonial"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/form-success"
    >

      <input type="hidden" name="form-name" value="testimonial" />

      <input type="hidden" name="subject"
        value="Testimonial Form from sierra.lighting" />

      <p className="sr-only">
        <label>
          Don&#39;t fill this out if you&#39;re human:
          <input name="bot-field" />
        </label>
      </p>

      <label>Name
        <input type="text" name="name"
          defaultValue={name}
        />
      </label>
      <label>Email
        <input type="email" name="email"
          defaultValue={email}
        />
      </label>
      <label className="sr-only">Stars (out of five)
        <input type="number" min="0" max="5" name="stars" value={stars} />
      </label>
      {showTitle &&
        <label>Title
          <input type="text" name="title" />
        </label>
      }
      <label>Review
        <textarea name="review" />
      </label>
      <button type="submit">Send</button>
    </form>
  )
}

export default ReviewForm