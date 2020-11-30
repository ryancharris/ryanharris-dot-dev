/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

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
    <div>
      <Link to={`/`}>
        <div css={bioHeader}>
          <div
            sx={{
              display: ["none", "inherit"],
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt="Ryan Harris profile picture"
              style={{
                marginRight: `1rem`,
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
          </div>
          <h3
            sx={{
              color: "white",
              textShadow: theme => `1px 1px 2px ${theme.colors.text}`,
            }}
          >
            {author}
          </h3>
        </div>
      </Link>
    </div>
  )
}

export default Bio
