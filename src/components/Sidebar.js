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
        position: relative;
        margin-bottom: 2.5rem;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
        sx={{
          alignItems: ["center"],
        }}
      >
        <Bio />
        <Nav />
      </div>
      <SocialMenu />
    </aside>
  )
}

export default Sidebar
