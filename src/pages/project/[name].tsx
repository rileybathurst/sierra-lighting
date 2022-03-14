import * as React from "react"
import { Link } from "gatsby"

function ProjectCatchAll({ params }) {
  return (
    <>
      <main className="measure">
        <h1>Couldn't find Project</h1>
        <p>We couldn't locate the Project "{params.title}"</p>
        <p><Link to="/">Go back to "Home"</Link></p>
      </main>
    </>
  )
}

export default ProjectCatchAll
