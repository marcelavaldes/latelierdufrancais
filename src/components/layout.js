import React, { Fragment } from "react"

import Header from "./header"
import Main from "./main"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  return (
    <Fragment>
      <Header location={location} title={title} />
      <Main>{children}</Main>
      <Footer />
    </Fragment>
  )
}

export default Layout
