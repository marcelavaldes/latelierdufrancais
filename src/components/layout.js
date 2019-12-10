import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import lectora from "../../content/assets/lectora.svg"
import "./layout.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
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
            backgroundColor: "#ffffff",
            // borderRadius: "45px",
            padding: `${rhythm(1.5)} ${rhythm(1)}`,
            marginBottom: rhythm(1.5),
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <footer
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            display: "flex",
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
          <img
            src={lectora}
            alt={""}
            width={240}
            style={{
              marginLeft: "auto",
              marginBottom: rhythm(-1.5),
              transform: "scaleX(-1)",
            }}
          />
        </footer>
      </div>
    )
  }
}

export default Layout
