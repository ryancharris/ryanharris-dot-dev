/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import Bio from "./bio"
import Nav from "./Nav"

function Sidebar() {
  return (
    <aside css={css`
      margin-right: 24px;
      min-width: 250px;
      width: 33.34%;
    `}>
      <Bio />
      <Nav />
    </aside>
  )
}

export default Sidebar
