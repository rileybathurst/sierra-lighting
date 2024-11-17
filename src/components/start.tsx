import * as React from "react"
import { Link } from "gatsby"

type startTypes = {
  className?: string
  path?: string
}
const Start = ({ className, path }: startTypes) => {

  return (
    <Link
      to={`/contact?=start-${path}`}
      className={`button button-hero ${className}`}
    >
      Start with a free quote
    </Link>
  )
}

export default Start
