import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

function UsesPage(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <h1>UsesPage</h1>
    </Layout>
  )
}

export default UsesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
