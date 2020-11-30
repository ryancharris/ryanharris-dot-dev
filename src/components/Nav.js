/** @jsx jsx */
import { graphql, Link, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"
import { jsx } from "theme-ui"

const routeListItem = css`
  a {
    box-shadow: none;
    color: black;
    text-decoration: none;
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
      <li
        key={`route-${route.label.toLowerCase()}`}
        css={routeListItem}
        sx={{
          margin: ["0 1rem 0 0", "0 0 0 1rem"],
        }}
      >
        <Link
          to={route.url}
          sx={{
            "&:hover": {
              color: "orange",
            },
          }}
          getProps={props => {
            return props.isCurrent
              ? {
                  style: {
                    color: "orange",
                  },
                }
              : null
          }}
        >
          {route.label}
        </Link>
      </li>
    )
  })

  return (
    <ul
      css={css`
        display: flex;
        list-style: none;
        padding: 0;
        flex-direction: row;
      `}
      sx={{
        fontSize: 3,
        margin: ["1rem 0 0 0", "0.75rem 0 0 0"],
      }}
    >
      {pageLinks}
    </ul>
  )
}

export default Nav
