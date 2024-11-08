// TODO: this is going to get more complex
// absolutely everything has additionals
// venues have areas
// areas have state abbreviations
// vendors have services
// team can be multiple

import * as React from "react"
import { Link } from "gatsby"

type AttributeTypes = {
  category: string;
  slug: string;
  name: string;
}
const Attribute = ({ category, slug, name }: AttributeTypes) => {

  return (
    <section className="attribute">
      <h3 className="crest capitalize">{category}</h3>
      <h4 className="range">
        <Link to={`/${category}/${slug}`} className="link--subtle">
          {name}
        </Link>
      </h4>
    </section>
  )
}

export default Attribute