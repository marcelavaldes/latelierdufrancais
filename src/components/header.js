import React from "react"
import { Link } from "gatsby"

export default ({ location, title }) => {
  const isHome = location.pathname === `${__PATH_PREFIX__}/`
  return (
    <header>
      {isHome ? (
        <h1>{title}</h1>
      ) : (
        <h3>
          <Link to={`/`}>{title}</Link>
        </h3>
      )}
    </header>
  )
}
