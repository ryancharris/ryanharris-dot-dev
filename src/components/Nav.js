import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

function Nav() {
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

  const pageLinks = siteRoutes
    .map(route => {
      return (
        <li style={{
          marginBottom: `8px`
        }}>
          <Link
            to={route.url}
            style={{
              boxShadow: `none`,
              color: `black`,
              textDecoration: `none`,
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
        padding: `8px 0`
      }}
    >
      {pageLinks}
    </ul>
  )
}

export default Nav
