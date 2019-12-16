import React from "react"

import lectora from "../../content/assets/lectora.svg"

export default () => {
  return (
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
  )
}
