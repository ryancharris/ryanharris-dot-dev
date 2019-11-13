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
          margin: [`0 20px 0 0`, "0 0 8px 0"],
        }}
      >
        <Link
          to={route.url}
          sx={{
            "&:hover": {
              color: "white",
              textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
            },
          }}
          getProps={props => {
            return props.isCurrent
              ? {
                  style: {
                    color: "#eff1f3",
                    textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
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
      sx={{
        display: `flex`,
        listStyle: `none`,
        margin: `0`,
        padding: `0px`,
        flexDirection: [`row`, `column`],
        fontSize: [2, 3],
      }}
    >
      {pageLinks}
    </ul>
  )
}

export default Nav
