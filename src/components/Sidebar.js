/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import Bio from "./bio"
import Nav from "./Nav"

function Sidebar() {
  return (
    <aside
      css={css`
        margin-right: 24px;
        flex: 0 0 33.33%;
      `}
    >
      <Bio />
      <Nav />
    </aside>
  )
}

export default Sidebar
