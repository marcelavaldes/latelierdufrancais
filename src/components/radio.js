import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Checkbox from "rc-checkbox"
import { rhythm } from "../utils/typography"
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
        {data.allMarkdownRemark.edges.map(({ node }, i) => {
          return (
            <label
              // key={node.id}
              key={node.fields.slug}
              style={{
                cursor: "pointer",
              }}
            >
              <article
                style={{
                  backgroundColor: modo === i + 1 ? "#96dbfa" : "white",
                  padding: ".4em",
                  borderRadius: "8px",
                }}
              >
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Checkbox
                      defaultCheckedchecked
                      onChange={onChange}
                      value={i + 1}
                      checked={modo === i + 1}
                    />
                    &nbsp; {node.frontmatter.title}
                  </h3>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${node.frontmatter.description} <a class="detalles" href="${node.fields.slug}" style="box-shadow: none;">(detalles)</a>`,
                    }}
                  />
                </section>
              </article>
            </label>
          )
        })}
      </>
    )}
  />
)

export default Radio
