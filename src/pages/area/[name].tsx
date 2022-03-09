import * as React from "react"
import { Link } from "gatsby"

function AreaCatchAll({ params }) {
  return (
    <>
      <main className="page-width">
        <h1>Couldn't find news</h1>
        <p>We couldn't locate the news "{params.name}"</p>
        <p><Link to="/">Go back to "Home"</Link></p>
      </main>
    </>
  )
}

export default AreaCatchAll
