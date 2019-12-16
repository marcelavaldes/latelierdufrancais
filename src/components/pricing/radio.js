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
              fields {
                slug
              }
              frontmatter {
                title
                description
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
        <p>Selecciona la modalidad que más te acomoda:</p>
        {data.allMarkdownRemark.edges.map(({ node }, i) => {
          return (
            <label key={node.fields.slug}>
              <h3>
                <Checkbox
                  defaultCheckedchecked
                  onChange={onChange}
                  value={i + 1}
                  checked={modo === i + 1}
                />
                &nbsp; {node.frontmatter.title}
              </h3>
            </label>
          )
        })}
      </>
    )}
  />
)

export default Radio
