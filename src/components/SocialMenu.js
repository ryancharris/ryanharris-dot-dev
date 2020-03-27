/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import GithubLogo from "../../content/assets/githubLogo.svg"
import LinkedInLogo from "../../content/assets/linkedinLogo.svg"
import TwitterLogo from "../../content/assets/twitterLogo.svg"
import YoutubeLogo from "../../content/assets/youtubeLogo.svg"
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
    height: 18px;
    width: 18px;
  `

  const socialIconLink = css`
    box-shadow: none;
    text-decoration: none;
  `

  const socialIconLinkThemeStyles = {
    color: "text",
    textShadow: theme => `1px 1px 1px ${theme.colors.white}`,
    "&:hover": {
      color: "white",
    },
  }

  const data = useStaticQuery(graphql`
    query SocialMenu {
      site {
        siteMetadata {
          social {
            github
            linkedin
            twitter
            youtube
            twitch
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
      `}
      sx={{
        margin: ["0 0 8px 0", "0 0 16px 0"],
        position: ["absolute", "inherit"],
        right: ["0"],
        top: ["6px"],
      }}
    >
      <li css={socialIconListItem}>
        <a
          href={`https://www.twitter.com/${social.twitter}`}
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
          href={`https://www.github.com/${social.github}`}
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
          href={`https://www.linkedin.com/in/${social.linkedin}`}
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
          href={social.youtube}
          css={socialIconLink}
          sx={socialIconLinkThemeStyles}
          target="_blank"
          rel="noreferrer noopener"
        >
          <YoutubeLogo css={socialIcon} />
        </a>
      </li>
      <li css={socialIconListItem}>
        <a
          href={`https://twitch.tv/${social.twitch}`}
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
