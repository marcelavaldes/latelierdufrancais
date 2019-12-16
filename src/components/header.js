/** @jsx jsx */
// import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const Header = ({ location, title }) => {
  const isHome = location.pathname === `${__PATH_PREFIX__}/`
  return (
    <header
      sx={{
        // values referencing scales defined in a theme
        color: "primary",
        // bg: "lightgray",
        fontFamily: "header",
        // raw CSS value
        // boxShadow: "0 0 1px 3px rgba(0, 0, 0, .125)",
      }}
    >
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

export default Header
