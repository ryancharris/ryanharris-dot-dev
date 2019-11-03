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

import GithubLogo from "../../content/assets/githubLogo.svg"
import LinkedInLogo from "../../content/assets/linkedinLogo.svg"
import TwitterLogo from "../../content/assets/twitterLogo.svg"

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
      <div>{description}</div>
      <div>
        <ul>
          <li>
            <a href={`https://www.twitter.com/${social.twitter}`}>
              <TwitterLogo
                style={{
                  width: "20px",
                }}
              />
              {social.twitter}
            </a>
          </li>
          <li>
            <a href={`https://www.github.com/${social.github}`}>
              <GithubLogo
                style={{
                  width: "20px",
                }}
              />
              {social.github}
            </a>
          </li>
          <li>
            <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
              <LinkedInLogo
                style={{
                  width: "20px",
                }}
              />
              {social.linkedin}
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Bio
