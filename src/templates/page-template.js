import React from "react"

import Layout from "../components/layout"

export default props => {
  const { children, location } = props

  return <Layout location={location}>{children}</Layout>
}
