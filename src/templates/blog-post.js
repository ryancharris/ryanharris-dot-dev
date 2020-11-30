/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import getShareImage from "@jlengstorf/get-share-image"

import CodeBlock from "../components/CodeBlock"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { tags, title } = post.frontmatter
    // const { previous, next } = this.props.pageContext

    const socialImage = getShareImage({
      title: title,
      tagline: tags.map(tag => `#${tag}`).join(" "),
      cloudName: "dzs14kcef",
      imagePublicID: "ryanharris-dot-dev/og-image",
      textAreaWidth: 800,
      titleFont: "Raleway",
      titleFontSize: 56,
      titleExtraConfig: "_bold",
      titleLeftOffset: 400,
      titleBottomOffset: 300,
      taglineFont: "Roboto%20Mono",
      taglineFontSize: 28,
      taglineTopOffset: 420,
      taglineLeftOffset: 400,
      textColor: "ffffff",
      taglineColor: "ffffff",
    })

    const tagsMeta = tags.map(tag => {
      return {
        name: "keyword",
        content: tag,
      }
    })

    const authorMeta = {
      name: "author",
      content: this.props.data.site.siteMetadata.author,
    }

    const metaData = tagsMeta.concat(authorMeta)

    const components = {
      pre: props => <CodeBlock {...props} language="javascript" />,
      code: props => <CodeBlock {...props} language="javascript" />,
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          meta={metaData}
          socialImage={socialImage}
        />
        <MDXProvider components={components}>
          <article>
            <header>
              <h1
                css={css`
                  margin-bottom: 0;
                  margin-top: 12px;
                `}
              >
                {post.frontmatter.title}
              </h1>
            </header>
            <MDXRenderer>{post.body}</MDXRenderer>
            {/* <hr
              style={{
                marginBottom: rhythm(1),
              }}
            /> */}
          </article>
          {/* <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav> */}
        </MDXProvider>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
