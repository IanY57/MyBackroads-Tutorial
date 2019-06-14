import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"

const tours = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.toursBcg.childImageSharp.fluid}>
        <h4>Hello from the Tours Staff</h4>
      </StyledHero>
    </Layout>
  )
}

export const query = graphql`
  query {
    toursBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default tours
