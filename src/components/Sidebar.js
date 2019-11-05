import React from "react"

import Bio from "./bio"
import Nav from "./Nav"

function Sidebar() {
  return (
    <aside style={{
      marginRight: `24px`
    }}>
      <Bio />
      <Nav />
    </aside>
  )
}

export default Sidebar
