import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { css } from "@emotion/core"
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import getShareImage from "@jlengstorf/get-share-image"

import Layout from "../components/layout"
import CodeBlock from "../components/CodeBlock"
import SEO from "../components/seo"

export default props => {
  const { children, location } = props
  const post = props.data.mdx

  const socialImage = getShareImage({
    title: post.frontmatter.title,
    tagline: post.frontmatter.tags.map(tag => `#${tag}`).join(" "),
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

  const tagsMeta = post.frontmatter.tags.map(tag => {
    return {
      name: "keyword",
      content: tag,
    }
  })

  const authorMeta = {
    name: "author",
    content: props.data.site.siteMetadata.author,
  }

  const metaData = tagsMeta.concat(authorMeta)

  const components = {
    pre: props => <CodeBlock {...props} language="javascript" />,
    code: props => <CodeBlock {...props} language="javascript" />,
  }

  return (
    <Layout
      location={location}
      title={post.frontmatter.title}
      description={post.excerpt}
      meta={metaData}
      socialImage={socialImage}
    >
      <SEO title={post.frontmatter.title} socialImage={socialImage} />
      <MDXProvider component={components}>
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
        </article>
        <nav>
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
              {props.pageContext.previous && (
                <Link to={props.pageContext.previous.fields.slug} rel="prev">
                  ← {props.pageContext.previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {props.pageContext.next && (
                <Link to={props.pageContext.next.fields.slug} rel="next">
                  {props.pageContext.next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </MDXProvider>
    </Layout>
  )
}

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
