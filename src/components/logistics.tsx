import * as React from "react"
import { Link } from "gatsby"

const Logistics = () => {
  return (
    <div className="measure">
      <hr />
      <h2 className="kilimanjaro">All inclusive from start to finish so you can focus on making memories, not logistics.</h2>

      <p>Our team will:</p>
      <ul>
        <li key="provide">Provide you site plans, renderings, examples of past work</li>
        <li key="partner">Partner with you to design options to meet your budget and expectations</li>
        <li key="send">Send out our <Link to="/team">crew of lighting technicians</Link> on your schedule to ensure your venue shines</li>
        <li key="take">Take down everything and restore the site so it looks like we were never there</li>
      </ul>
      <hr />
    </div>
  )
}

export default Logistics
