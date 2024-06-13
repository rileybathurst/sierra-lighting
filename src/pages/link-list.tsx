// TODO: social media link page work in progress

import * as React from "react"
import { Link } from "gatsby"
import { SEO } from "../components/seo";


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
          <li key='wedding'>
            <Link to="/wedding">Weddings</Link>
          </li>
          <li key='jobs'>
            <Link to="/work">Jobs</Link>
          </li>
          <li key='home'>
            <Link to="/">Website Homepage</Link>
          </li>
        </ul>
      </main>
    </>
  )
}

export default LinkListPage

export const Head = () => {
  return (
    <SEO
      title='Social Media Links'
      description="Social Media Links."
      url="link-list"
    />
  )
}