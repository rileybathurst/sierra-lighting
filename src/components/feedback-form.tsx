import * as React from "react"

interface FeedbackFormTypes {
  stars: number;
  name: string;
  email: string;
  title: boolean;
}
function FeedbackForm({ stars, name, email, title }: FeedbackFormTypes) {

  let showTitle = true;
  if (title === false) {
    showTitle = false;
  }

  return (
    <form
      className="stork"
      name="feedback"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/form-success"
    >

      <input type="hidden" name="form-name" value="feedback" />

      <input type="hidden" name="subject"
        value="Feedback Form from Sierra Lighting" />

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
      <label>Feedback
        <textarea name="feedback" />
      </label>
      <button type="submit">Send</button>
    </form>
  )
}

export default FeedbackForm