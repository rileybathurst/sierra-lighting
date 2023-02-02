
import * as React from "react"
import { Link } from "gatsby"

import { useStrapiSeason } from "../components/use-strapi-season";

function WhichSeason({ children }) {

  // wedding
  if (useStrapiSeason()) {
    // console.log("holiday");
    return (
      <ul className='wedding_season'>
        {children}
      </ul>
    );
  } else {
    return (
      <ul className='holiday_season'>
        {children}
      </ul>
    );
  }
}

function TopList() {
  return (
    <WhichSeason>
      <li key="residential" className="xmas_r"><Link to="/residential">Residential<br />Christmas Lights</Link></li>
      <li key="commercial" className="xmas_c"><Link to="/commercial">Commercial<br />Christmas Lights</Link></li>
      <li key="wedding" className="wedding"><Link to="/wedding">Wedding</Link></li>
      {/* // dont use class contact as we use that other places */}
      <li key="contact" className="c"><Link to="/contact">Contact</Link></li>
    </WhichSeason>
  );
}

export default TopList
