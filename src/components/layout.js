/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { jsx, ThemeProvider } from "theme-ui"

import { rhythm } from "../utils/typography"

import Sidebar from "./Sidebar"
import theme from "../theme"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    const mainContainer = css`
      padding: 0 8px
      flex: 0 0 66.66%;
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
      <ThemeProvider theme={theme}>
        <div
          style={{
            boxSizing: `border-box`,
            display: `flex`,
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: 960,
            width: `100%`,
          }}
          sx={{
            color: "text",
            flexDirection: ["column", "row"],
            padding: ["0px", `${rhythm(1.5)} ${rhythm(3 / 4)}`],
          }}
        >
          <Sidebar />
          <main
            css={mainContainer}
            sx={{
              padding: [`${rhythm(1.5)} ${rhythm(3 / 4)}`, "0px"],
            }}
          >
            {header}
            {children}
          </main>
        </div>
      </ThemeProvider>
    )
  }
}

export default Layout
