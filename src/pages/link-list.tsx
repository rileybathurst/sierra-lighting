// TODO: social media link page work in progress

import * as React from "react"
import { Link } from "gatsby"

import Logo from "../images/logo"

const LinkListPage = () => {
  return (
    <>
      <header>
        <h1 className="sr-only">Link List</h1>
        <Logo />
      </header>
      <main className="link-list">
        <ul>
          <li>
            <Link to="/wedding">Weddings</Link>
          </li>
          <li>
            <Link to="/work">Jobs</Link>
          </li>
          <li>
            <Link to="/">Website Homepage</Link>
          </li>
        </ul>
      </main>
    </>
  )
}

export default LinkListPage
