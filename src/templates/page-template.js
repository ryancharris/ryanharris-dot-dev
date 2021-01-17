/** @jsx jsx */
import { jsx } from 'theme-ui'

import Layout from "../components/layout"

export default props => {
  const { children, location } = props
  console.log('props', props)

  return <Layout location={location}>{children}</Layout>
}
