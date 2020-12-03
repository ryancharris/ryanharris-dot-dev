/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"

import Bio from "./bio"
import Nav from "./Nav"

function Sidebar() {
  return (
    <aside
      css={css`
        flex: 0 0 33.33%;
        position: relative;
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-between;
      `}
      sx={{
        flexDirection: ["column", "row"],
      }}
    >
      <Bio />
      <div
        css={css`
          display: flex;
        `}
        sx={{
          justifyContent: ["center", "flex-start"],
        }}
      >
        <Nav />
      </div>
    </aside>
  )
}

export default Sidebar
