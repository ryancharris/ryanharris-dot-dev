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
      `}
      sx={{
        backgroundColor: "sidebar",
        padding: ["24px 24px 12px", "24px 18px"],
      }}
    >
      <Bio />
      <Nav />
    </aside>
  )
}

export default Sidebar
