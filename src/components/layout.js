import React from "react"
import { Link } from "gatsby"

import lectora from "../../content/assets/lectora.svg"
// import "./layout.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link to={`/`}>{title}</Link>
      </h1>
    )
  } else {
    header = (
      <h3>
        <Link to={`/`}>{title}</Link>
      </h3>
    )
  }
  return (
    <div>
      <div>
        <header>{header}</header>
        <main>{children}</main>
      </div>
      <footer>
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
        <img
          src={lectora}
          alt={""}
          width={240}
          style={{
            transform: "scaleX(-1)",
          }}
        />
      </footer>
    </div>
  )
}

export default Layout
