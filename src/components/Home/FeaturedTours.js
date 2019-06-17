import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Title from "../Title"
import Tour from "../Tours/Tour"

import styles from "../../css/items.module.css"

const getTours = graphql`
  query {
    FeaturedTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const response = useStaticQuery(getTours)
  //console.log(response)
  const tours = response.FeaturedTours.edges
  //console.log(tours)

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />

      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />
        })}
      </div>

      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
