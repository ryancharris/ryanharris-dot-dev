/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"

import Bio from "./bio"
import Nav from "./Nav"
import SocialMenu from "./SocialMenu"

function Sidebar() {
  return (
    <aside
      css={css`
        flex: 0 0 33.33%;
      `}
      sx={{
        backgroundColor: "sidebar",
        maxWidth: ["100%", "320px"],
        padding: ["18px 24px", "24px 28px"],
      }}
    >
      <div
        sx={{
          position: ["static", "sticky"],
          top: ["auto", "24px"],
        }}
      >
        <Bio />
        <SocialMenu />
        <Nav />
      </div>
    </aside>
  )
}

export default Sidebar
