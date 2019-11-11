/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import GithubLogo from "../../content/assets/githubLogo.svg"
import LinkedInLogo from "../../content/assets/linkedinLogo.svg"
import TwitterLogo from "../../content/assets/twitterLogo.svg"

function SocialMenu() {
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

  const data = useStaticQuery(graphql`
    query SocialMenu {
      site {
        siteMetadata {
          social {
            github
            linkedin
            twitter
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata

  return (
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
  )
}

export default SocialMenu
