import React from "react"

import { useStaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        data {
          name
          age
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: { siteMetadata: si }, //renamed to si (site Info)
  } = useStaticQuery(getSiteData)

  return (
    <div>
      <h1>Title: {si.title}</h1>
      <h1>Author: {si.author}</h1>
    </div>
  )
}

export default Header
