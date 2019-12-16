import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3>
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: `${node.frontmatter.description} <a class="detalles" href="${node.fields.slug}">(detalles)</a>`,
                  }}
                />
              </section>
            </article>
          )
        })}
        <article>
          <header>
            <h3>
              <Link to={"/valores"}>
                <span role="img" aria-label="money bag">
                  💰
                </span>
                Valores y medios de pago
              </Link>
            </h3>
          </header>
          <section>
            <p>Revisa nuestros precios para las distintas modalidades</p>
          </section>
        </article>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
