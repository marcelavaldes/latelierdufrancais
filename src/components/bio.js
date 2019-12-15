/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            instagram
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
      }}
    >
      {
        // <Image
        //   fixed={data.avatar.childImageSharp.fixed}
        //   alt={author}
        //   style={{
        //     marginRight: rhythm(1 / 2),
        //     marginBottom: 0,
        //     minWidth: 50,
        //     borderRadius: `100%`,
        //   }}
        //   imgStyle={{
        //     borderRadius: `50%`,
        //   }}
        // />
      }
      <p>
        Creado por <strong>{author}</strong> quien vive y trabaja en Chile
        incentivando el aprendizaje del idioma francés.
        {` `}
        <a href={`https://instagram.com/${social.instagram}`}>
          Puedes seguir este proyecto en Instagram
        </a>
      </p>
    </div>
  )
}

export default Bio
