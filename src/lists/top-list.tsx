
import * as React from "react"
import { Link } from "gatsby"
import Season from "../components/season";
import Start from "../components/start";

function TopList() {
  return (
    <Season>
      <li key="residential" className="xmas_r">
        <Link to="/residential">Residential<br />Christmas Lights</Link>
      </li>
      <li key="commercial" className="xmas_c">
        <Link to="/commercial">Commercial<br />Christmas Lights</Link>
      </li>
      <li key="wedding" className="wedding">
        <Link to="/wedding">Wedding</Link>
      </li>
      {/* // * dont use class contact as we use that other places */}
      {/*       <li key="contact" className="c">
        <Link to="/contact">Contact</Link>
      </li> */}
      <li key="start" className="c">
        <Link to="/contact">
          Start With A<br />
          Free Quote
        </Link>
      </li>
    </Season>
  );
}

export default TopList
