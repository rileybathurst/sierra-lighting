import * as React from "react"
import { Link } from "gatsby"

const Start = ({ className }: { className: string }) => {

  return (
    <Link
      to="/contact"
      className={'button button-hero ' + className}
    >
      Start with a free quote
    </Link>
  )
}

export default Start
