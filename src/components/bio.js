/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const bioHeader = css`
  align-items: center;
  display: flex;
  margin-bottom: 8px;

  h3 {
    margin: 0;
  }
`

const descriptionLink = css`
  box-shadow: none;
  padding: 2px 4px;
  text-decoration: none;
`

const descriptionLinkThemeStyles = {
  color: "white",
  "&:hover": {
    backgroundColor: "accent",
    boxShadown: "0.5px 1px 2px rgba(0, 0, 0, 0.2)",
  },
}

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
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  return (
    <div
      sx={{
        margin: ["0 0 8px 0", "0 0 16px 0"],
        paddingRight: ["0", "16px"],
      }}
    >
      <div css={bioHeader}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt="Ryan Harris profile picture"
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
            margin: 0,
          }}
          sx={{
            border: theme => `2px solid ${theme.colors.white}`,
          }}
        />
        <h3
          sx={{
            color: "white",
            textShadow: theme => `1px 1px 2px ${theme.colors.text}`,
          }}
        >
          {author}
        </h3>
      </div>
      <p
        css={css`
          line-height: 2.25;
          margin: 0;
        `}
        sx={{
          display: ["none", "block"],
          textShadow: `1px 1px 1px rgba(0, 0, 0, 0.15)`,
        }}
      >
        Software engineer @{" "}
        <a
          css={descriptionLink}
          sx={descriptionLinkThemeStyles}
          href="https://www.getguru.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guru
        </a>
        . Organizer of{" "}
        <a
          css={descriptionLink}
          sx={descriptionLinkThemeStyles}
          href="https://www.meetup.com/Reactadelphia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reactadelphia
        </a>
        . Writer for{" "}
        <a
          css={descriptionLink}
          sx={descriptionLinkThemeStyles}
          href="https://blog.logrocket.com/author/ryanharris/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LogRocket
        </a>
        .
      </p>
    </div>
  )
}

export default Bio
