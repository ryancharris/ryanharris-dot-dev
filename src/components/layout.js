/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { jsx } from "theme-ui"

import { rhythm } from "../utils/typography"

import Sidebar from "./Sidebar"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    const mainContainer = css`
      flex: 0 0 66.66%;
      width: 100%;
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
            padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
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
