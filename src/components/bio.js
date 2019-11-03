/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          description
          social {
            github
            linkedin
            twitter
          }
        }
      }
    }
  `)

  const { author, description, social } = data.site.siteMetadata

  return (
    <aside
      style={{
        display: `flex`,
        flexDirection: "column",
        marginBottom: rhythm(2.5),
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <h3
          style={{
            margin: 0,
          }}
        >
          {author}
        </h3>
      </div>
      <p>{description}</p>
      <p>
        <a href={`https://www.twitter.com/${social.twitter}`}>
          {social.twitter}
        </a>
        <a href={`https://www.github.com/${social.github}`}>{social.github}</a>
        <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
          {social.linkedin}
        </a>
      </p>
    </aside>
  )
}

export default Bio
