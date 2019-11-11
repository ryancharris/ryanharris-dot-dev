/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

import GithubLogo from "../../content/assets/githubLogo.svg"
import LinkedInLogo from "../../content/assets/linkedinLogo.svg"
import TwitterLogo from "../../content/assets/twitterLogo.svg"

const bioHeader = css`
  align-items: center;
  display: flex;
  margin-bottom: 8px;

  h3 {
    margin: 0;
  }
`

const descriptionLink = css`
  background: skyblue;
  box-shadow: none;
  color: black;
  font-weight: bold;
  padding: 4px 8px;
  text-decoration: none;

  &:hover {
    background: #007acc;
    color: #fff;
  }
`

const socialIconListItem = css`
  display: flex-item;
  line-height: 1;
  margin: 0 12px 0 0;
`

const socialIcon = css`
  width: 18px;
`

const socialIconLink = css`
  box-shadow: none;
  text-decoration: none;
`

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
          social {
            github
            linkedin
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  return (
    <div
      css={css`
        padding: 8px 0;
      `}
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
        />
        <h3>{author}</h3>
      </div>
      <p
        css={css`
          line-height: 2.25;
          margin: 0 0 16px 0;
        `}
      >
        Software engineer @{" "}
        <a
          css={descriptionLink}
          href="https://www.getguru.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guru
        </a>
        . Organizer of{" "}
        <a
          css={descriptionLink}
          href="https://www.meetup.com/Reactadelphia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reactadelphia
        </a>
        . Writer for{" "}
        <a
          css={descriptionLink}
          href="https://blog.logrocket.com/author/ryanharris/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LogRocket
        </a>
        .
      </p>
      <ul
        css={css`
          align-items: center;
          display: flex;
          list-style: none;
          margin: 0;
        `}
      >
        <li css={socialIconListItem}>
          <a
            href={`https://www.github.com/${social.github}`}
            css={socialIconLink}
            sx={{
              color: "text",
              "&:hover": {
                color: "white",
              },
            }}
          >
            <GithubLogo css={socialIcon} />
          </a>
        </li>
        <li css={socialIconListItem}>
          <a
            href={`https://www.twitter.com/${social.twitter}`}
            css={socialIconLink}
            sx={{
              color: "text",
              "&:hover": {
                color: "white",
              },
            }}
          >
            <TwitterLogo css={socialIcon} />
          </a>
        </li>
        <li css={socialIconListItem}>
          <a
            href={`https://www.linkedin.com/in/${social.linkedin}`}
            css={socialIconLink}
            sx={{
              color: "text",
              "&:hover": {
                color: "white",
              },
            }}
          >
            <LinkedInLogo css={socialIcon} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Bio
