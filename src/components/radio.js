import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
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
        <p>Selecciona la modalidad que más te acomoda:</p>
        {data.allMarkdownRemark.edges.map(({ node }, i) => {
          return (
            <>
              <label
                key={node.id}
                style={{
                  cursor: "pointer",
                }}
              >
                <article key={node.fields.slug}>
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

              {
                // <div>
                //   <h3>
                //     &nbsp; {node.frontmatter.title}{" "}
                //     <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                //       <span>(detalles)</span>
                //     </Link>
                //   </h3>
                //   <section>
                //     <p
                //       dangerouslySetInnerHTML={{
                //         __html: node.frontmatter.description || node.excerpt,
                //       }}
                //     />
                //   </section>
                // </div>
              }
            </>
          )
        })}
      </>
    )}
  />
)

export default Radio
