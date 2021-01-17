/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import SocialMenu from "../components/SocialMenu"

const bioHeader = css`
  align-items: center;
  display: flex;

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
    {
      avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
        childImageSharp {
          fixed(width: 72, height: 72) {
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
    <div>
      <Link
        to={`/`}
        css={css`
          text-decoration: none;
        `}
      >
        <div css={bioHeader}>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt="Ryan Harris profile picture"
            style={{
              marginRight: `1.5rem`,
              marginBottom: 0,
              minWidth: 50,
              width: 72,
              height: 72,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
              margin: 0,
            }}
            sx={{
              border: theme => `4px solid ${theme.colors.streamPink}`,
            }}
          />

          <div>
            <h3
              css={css`
                color: black;
                font-size: 2rem;
              `}
            >
              {author}
            </h3>
            <SocialMenu />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Bio
