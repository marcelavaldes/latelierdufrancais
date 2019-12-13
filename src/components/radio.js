import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Checkbox from "rc-checkbox"
import "rc-checkbox/assets/index.css"

const Radio = ({ title, modo, onChange }) => (
  <StaticQuery
    query={graphql`
      query AllMarkdownTitles {
        allMarkdownRemark(
          filter: { id: { nin: "c8690b52-3b0f-5c28-8283-746a5b957db6" } }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <h3>{title}</h3>
        <div>
          {data.allMarkdownRemark.edges.map(({ node }, i) => {
            return (
              <p key={i}>
                <label>
                  <Checkbox
                    defaultCheckedchecked
                    onChange={onChange}
                    value={i + 1}
                    checked={modo === i + 1}
                  />
                  &nbsp; {node.frontmatter.title}
                </label>
              </p>
            )
          })}
        </div>
      </>
    )}
  />
)

export default Radio
