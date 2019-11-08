/** @jsx jsx */
import { graphql, Link, useStaticQuery } from "gatsby"
import { css, jsx } from "@emotion/core"

const routeListItem = css`
  margin-bottom: 8px;

  a {
    box-shadow: none;
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: #007acc;
  }
`

function Nav(props) {
  const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          siteRoutes {
            url
            label
          }
        }
      }
    }
  `)

  const siteRoutes = data.site.siteMetadata.siteRoutes

  const pageLinks = siteRoutes.map(route => {
    return (
      <li key={`route-${route.label.toLowerCase()}`} css={routeListItem}>
        <Link
          to={route.url}
          getProps={props => {
            return props.isCurrent ? { style: { color: "#007acc" } } : null
          }}
        >
          {route.label}
        </Link>
      </li>
    )
  })

  return (
    <ul
      style={{
        listStyle: `none`,
        padding: `8px 0`,
      }}
    >
      {pageLinks}
    </ul>
  )
}

export default Nav
