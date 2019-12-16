import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import lectora from "../../content/assets/lectora.svg"

const Layout = ({ location, title, children }) => {
  const isHome = location.pathname === `${__PATH_PREFIX__}/`
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: rhythm(24),
          // backgroundColor: "#ffffff",
          // borderRadius: "45px",
          padding: `${rhythm(1.5)} ${rhythm(1)}`,
          marginBottom: rhythm(1.5),
        }}
      >
        <header>
          {isHome ? (
            <h1
              style={{
                marginTop: 0,
                marginBottom: rhythm(1.5),
                ...scale(1.5),
              }}
            >
              <Link to={`/`}>{title}</Link>
            </h1>
          ) : (
            <h3
              style={{
                marginTop: 0,
                marginBottom: rhythm(1.5),
              }}
            >
              <Link to={`/`}>{title}</Link>
            </h3>
          )}
        </header>
        <main>{children}</main>
      </div>
      <footer
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          display: "flex",
          padding: `${rhythm(0)} ${rhythm(3 / 4)}`,
        }}
      >
        <div
          style={{
            marginTop: "auto",
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
        {
          // <img
          //   src={lectora}
          //   alt={""}
          //   width={240}
          //   style={{
          //     marginLeft: "auto",
          //     marginBottom: rhythm(-1.5),
          //     transform: "scaleX(-1)",
          //   }}
          // />
        }
      </footer>
    </div>
  )
}

export default Layout
