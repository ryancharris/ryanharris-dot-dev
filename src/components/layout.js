/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { jsx } from "theme-ui"

import Sidebar from "./Sidebar"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    const mainContainer = css`
      overflow: auto;
      width: 100%;
      flex-grow: 1;

      h3 {
        margin-top: 0;
      }

      a {
        box-shadow: none;
        color: #009fb7;
        text-decoration: none;
      }

      p {
        line-height: 1.5;
      }

      li {
        margin-bottom: 16px;
      }

      .gatsby-highlight-code-line {
        background-color: #feb;
        display: block;
        margin-right: -1em;
        margin-left: -1em;
        padding-right: 1em;
        padding-left: 0.75em;
        border-left: 0.25em solid #f99;
      }
    `

    return (
      <div
        css={css`
          box-sizing: border-box;
          display: flex;
          min-height: 100vh;
          padding: 2.625rem 1.3125rem;
          margin: 0 auto;
        `}
        sx={{
          color: "text",
          flexDirection: "column",
          maxWidth: "42rem",
        }}
      >
        <Sidebar />
        <main
          css={mainContainer}
          sx={{
            maxWidth: "100%",
          }}
        >
          {children}
        </main>
      </div>
    )
  }
}

export default Layout
