/** @jsx jsx */
import React from "react"
import { Link, graphql } from "gatsby"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
            <article
              key={`article-${node.id}`}
              css={css`
                margin: 0 0 3.5rem 0;
                color: #000000;
              `}
            >
              <Link
                key={`link-${node.id}`}
                to={node.fields.slug}
                css={css`
                  text-decoration: none;
                `}
                sx={{ color: "text" }}
              >
                <header>
                  <h3
                    style={{
                      marginTop: 0,
                      marginBottom: 0,
                    }}
                    sx={{
                      lineHeight: "heading",
                    }}
                  >
                    {title}
                  </h3>
                </header>
              </Link>
              <section>
                <p
                  css={css`
                    display: inline;
                  `}
                  sx={{
                    fontSize: [0],
                  }}
                >
                  <span role="img" aria-label="open-book">
                    📖
                  </span>{" "}
                  {node.timeToRead} {node.timeToRead > 1 ? `mins.` : `min.`}
                </p>
                <p
                  css={css`
                    margin: 0.75rem 0;
                    line-height: 1.5;
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
                    padding: 0;
                  `}
                >
                  {tags.map((tag, index) => {
                    return (
                      <li
                        css={css`
                          margin-bottom: 0;
                        `}
                        key={`tag-${index}`}
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
            title
            tags
          }
          body
          excerpt(pruneLength: 275)
          id
          timeToRead
        }
      }
    }
  }
`
