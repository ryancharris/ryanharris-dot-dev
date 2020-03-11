/** @jsx jsx */
import React from "react"
import { Link, graphql } from "gatsby"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"

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
          const tags = node.frontmatter.tags

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
                    css={css`
                      margin-bottom: 20px;
                    `}
                    sx={{
                      fontSize: [1, 2],
                    }}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                  <ul
                    css={css`
                      display: flex;
                      flex-direction: row;
                      list-style: none;
                      margin: 0;
                    `}
                  >
                    <li
                      css={css`
                        margin: 0 8px 0 0;
                      `}
                    >
                      Tags:
                    </li>
                    {tags.map((tag, index) => {
                      return (
                        <li
                          css={css`
                            margin-bottom: 0;
                          `}
                        >
                          <i>
                            #{tag}
                            {index === tags.length - 1 ? (
                              ""
                            ) : (
                              <span>,&nbsp;</span>
                            )}
                          </i>
                        </li>
                      )
                    })}
                  </ul>
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
      filter: {
        fileAbsolutePath: { regex: "/blog/" }
        frontmatter: { published: { eq: true } }
      }
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
            tags
          }
          body
          excerpt(pruneLength: 275)
          id
        }
      }
    }
  }
`
