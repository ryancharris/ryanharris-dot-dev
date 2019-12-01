/** @jsx jsx */
import React from "react"
import { Link, graphql } from "gatsby"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
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
            <Link to={node.fields.slug} sx={{ color: "text" }}>
              <article
                key={node.id}
                css={css`
                  margin: 0 0 18px 0;
                  border: none;
                  border-radius: 4px;
                  padding: 12px;
                  transition: box-shadow 0.35s ease-out;
                `}
                sx={{
                  ":hover": {
                    boxShadow: theme => `1px 1px 2px ${theme.colors.text}`,
                  },
                }}
              >
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                      marginTop: 0,
                    }}
                    sx={{
                      lineHeight: "heading",
                    }}
                  >
                    {title}
                  </h3>
                </header>
                <section>
                  <Img
                    css={css`
                      margin: 12px 0 4px 0;
                    `}
                    fluid={firstAttachment.childImageSharp.fluid}
                    alt={firstAttachment.name}
                  />

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
                    sx={{
                      fontSize: [1, 2],
                    }}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            </Link>
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
    allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
                fluid(maxHeight: 200, maxWidth: 600, cropFocus: CENTER) {
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
