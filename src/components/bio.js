/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

import GithubLogo from "../../content/assets/githubLogo.svg"
import LinkedInLogo from "../../content/assets/linkedinLogo.svg"
import TwitterLogo from "../../content/assets/twitterLogo.svg"

const BioWrapper = styled.aside`
  padding: 8px 0;
`

const BioHeader = styled.div`
  align-items: center
  display: flex
  margin-bottom: 8px

  > h3 {
    margin: 0;
  }
`

const Description = styled.p`
  margin: 0 0 8px 0;
`

const SocialIconList = styled.ul`
  align-items: center
  display: flex
  list-style: none
  margin: 0
`

const SocialIconListItem = styled.li`
  display: flex-item
  line-height: 1
  margin: 0 12px 0 0


  > a {
    color: gray
    box-shadow: none
    text-decoration: none
  }

  > a:hover {
    color: #007acc
  }
`

const StyledGithubLogo = styled(GithubLogo).attrs(() => ({
  ariaLabel: `GitHub logo`,
  role: `img`,
}))`
  width: 16px;
`

const StyledLinkedinLogo = styled(LinkedInLogo).attrs(() => ({
  ariaLabel: `LinkedIn logo`,
  role: `img`,
}))`
  width: 16px;
`

const StyledTwitterIcon = styled(TwitterLogo).attrs(() => ({
  ariaLabel: `Twitter logo`,
  role: `img`,
}))`
  width: 16px;
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
    <BioWrapper>
      <BioHeader>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt="Ryan Harris profile picture"
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
            border: `1px solid rebeccapurple`,
          }}
          imgStyle={{
            borderRadius: `50%`,
            margin: 0
          }}
        />
        <h3>{author}</h3>
      </BioHeader>
      <Description>{description}</Description>
      <SocialIconList>
        <SocialIconListItem>
          <a href={`https://www.twitter.com/${social.twitter}`}>
            <StyledTwitterIcon />
          </a>
        </SocialIconListItem>
        <SocialIconListItem>
          <a href={`https://www.github.com/${social.github}`}>
            <StyledGithubLogo />
          </a>
        </SocialIconListItem>
        <SocialIconListItem>
          <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
            <StyledLinkedinLogo />
          </a>
        </SocialIconListItem>
      </SocialIconList>
    </BioWrapper>
  )
}

export default Bio
