/** @jsx jsx */
import React from "react"
import { Link, graphql } from "gatsby"
import { css, jsx } from "@emotion/core"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="blog" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title
          const firstAttachment = node.frontmatter.attachments[0]

          return (
            <article
              key={node.id}
              css={css`
                margin: 0 0 48px 0;
              `}
            >
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                    marginTop: 0,
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
              </header>
              <section>
                <Link to={node.fields.slug}>
                  <Img
                    css={css`
                      margin: 12px 0 4px 0;
                    `}
                    fluid={firstAttachment.childImageSharp.fluid}
                    alt={firstAttachment.name}
                  />
                </Link>
                <small
                  css={css`
                    display: block;
                    margin: 0 0 8px 0;
                    text-align: right;
                  `}
                >
                  {node.frontmatter.date}
                </small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            attachments {
              name
              childImageSharp {
                fluid(maxHeight: 200, maxWidth: 600) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
          body
          excerpt(pruneLength: 275)
          id
        }
      }
    }
  }
`
