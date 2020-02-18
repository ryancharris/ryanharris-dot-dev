/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import getShareImage from '@jlengstorf/get-share-image';

import CodeBlock from "../components/CodeBlock"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { tags, title } = post.frontmatter
    // const { previous, next } = this.props.pageContext

    const socialImage = getShareImage({
      title: title,
      tagline: tags.map(tag => `#${tag}`).join(' '),
      cloudName: 'dzs14kcef',
      imagePublicID: 'ryanharris-dot-dev/rh-blog-post',
      textAreaWidth: 750,
      titleFont: 'arial_56',
      titleExtraConfig: '_bold',
      titleBottomOffset: 255,
      taglineFont: 'arial_36',
      textColor: '000000',
      taglineColor: '595959',
      taglineTopOffset: 600
    });

    console.log(socialImage)
    // https://res.cloudinary.com/dzs14kcef/image/upload/w_1280,h_669,c_fill,q_auto,f_auto/w_750,c_fit,co_rgb:000000,g_south_west,x_480,y_254,l_text:arial_56_64_bold:How%20to%20configure%20ESLint%20and%20Prettier%20to%20work%20together/w_750,c_fit,co_rgb:595959,g_north_west,x_480,y_600,l_text:arial_36_48_right:%2523eslint%20%2523prettier%20%2523javascript/ryanharris-dot-dev/rh-blog-post

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
              <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(1),
                }}
              >
                {post.frontmatter.date}
              </p>
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
