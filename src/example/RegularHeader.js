import React from "react"

import { StaticQuery, graphql } from "gatsby"

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

const RegularHeader = () => {
  return (
    <div>
      <StaticQuery
        query={getSiteData}
        render={data => {
          console.log(data)

          return <h1>Title: {data.site.siteMetadata.title}</h1>
        }}
      ></StaticQuery>
    </div>
  )
}

export default RegularHeader
