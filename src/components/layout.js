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
      flex: 0 0 66.66%;
      overflow: auto;
      width: 100%;

      code {
        background: #2A2734;
        color: #ffcc99;
        font-size: 1rem;
        padding: 0 8px;
      }
    `

    const header =
      location.pathname === rootPath ? (
        <header
          sx={{
            display: ["none", "block"],
          }}
        >
          <h1
            style={{
              marginTop: "12px",
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
        </header>
      ) : null

    return (
      <div
        css={css`
          box-sizing: border-box;
          display: flex;
          min-height: 100vh;
          padding: 0;
          width: 100%;
        `}
        sx={{
          color: "text",
          flexDirection: ["column", "row"],
        }}
      >
        <Sidebar />
        <main
          css={mainContainer}
          sx={{
            padding: ["16px 32px", "12px 24px"],
            maxWidth: ["100%", "800px"],
          }}
        >
          {header}
          {children}
        </main>
      </div>
    )
  }
}

export default Layout
