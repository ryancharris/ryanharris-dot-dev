/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import GithubLogo from "../../content/assets/githubLogo.svg"
import LinkedInLogo from "../../content/assets/linkedinLogo.svg"
import TwitterLogo from "../../content/assets/twitterLogo.svg"
import TwitchLogo from "../../content/assets/twitchLogo.svg"

function SocialMenu() {
  const socialIconListItem = css`
    display: flex-item;
    line-height: 1;
    margin: 0 12px 0 0;

    &:last-of-type {
      margin-right: 0;
    }
  `

  const socialIcon = css`
    height: 16px;
    width: 16px;
  `

  const socialIconLink = css`
    box-shadow: none;
    text-decoration: none;
  `

  const socialIconLinkThemeStyles = {
    color: "text",
    textShadow: theme => `1px 1px 1px ${theme.colors.white}`,
    "&:hover": {
      color: "streamPink",
    },
  }

  const data = useStaticQuery(graphql`
    query SocialMenu {
      site {
        siteMetadata {
          socialInfo {
            github
            linkedin
            twitter

            twitch
          }
        }
      }
    }
  `)

  const { socialInfo } = data.site.siteMetadata

  return (
    <ul
      css={css`
        align-items: center;
        list-style: none;
        padding: 0;
        margin: 0.25rem 0 0 0;
        justify-content: flex-start;
        display: flex;
      `}
    >
      <li css={socialIconListItem}>
        <a
          href={`https://www.twitter.com/${socialInfo.twitter}`}
          css={socialIconLink}
          sx={socialIconLinkThemeStyles}
          target="_blank"
          rel="noreferrer noopener"
        >
          <TwitterLogo css={socialIcon} />
        </a>
      </li>
      <li css={socialIconListItem}>
        <a
          href={`https://www.github.com/${socialInfo.github}`}
          css={socialIconLink}
          sx={socialIconLinkThemeStyles}
          target="_blank"
          rel="noreferrer noopener"
        >
          <GithubLogo css={socialIcon} />
        </a>
      </li>
      <li css={socialIconListItem}>
        <a
          href={`https://www.linkedin.com/in/${socialInfo.linkedin}`}
          css={socialIconLink}
          sx={socialIconLinkThemeStyles}
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInLogo css={socialIcon} />
        </a>
      </li>
      <li css={socialIconListItem}>
        <a
          href={`https://twitch.tv/${socialInfo.twitch}`}
          css={socialIconLink}
          sx={socialIconLinkThemeStyles}
          target="_blank"
          rel="noreferrer noopener"
        >
          <TwitchLogo css={socialIcon} />
        </a>
      </li>
    </ul>
  )
}

export default SocialMenu
