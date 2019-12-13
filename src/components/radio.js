import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Checkbox from "rc-checkbox"
import "rc-checkbox/assets/index.css"

const Radio = ({ title, modo, onChange }) => (
  <StaticQuery
    query={graphql`
      query AllMarkdownTitles {
        allMarkdownRemark(
          filter: { frontmatter: { shownInPricing: { eq: true } } }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                title
                shownInPricing
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
