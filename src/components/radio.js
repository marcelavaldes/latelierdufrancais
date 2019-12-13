import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
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
        {data.allMarkdownRemark.edges.map(({ node }, i) => {
          return (
            <label
              key={node.id}
              style={{
                cursor: "pointer",
              }}
            >
              <div>
                <p>
                  <Checkbox
                    defaultCheckedchecked
                    onChange={onChange}
                    value={i + 1}
                    checked={modo === i + 1}
                  />
                  &nbsp; {node.frontmatter.title}{" "}
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    (detalles)
                  </Link>
                </p>
              </div>
            </label>
          )
        })}
      </>
    )}
  />
)

export default Radio
