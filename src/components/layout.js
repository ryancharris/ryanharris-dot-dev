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
          css={css`
            box-sizing: border-box;
            display: flex;
            marginleft: auto;
            marginright: auto;
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
              backgroundColor: theme => `${theme.colors.white}`,
              padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
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
