import React from "react"
import Img from "gatsby-image"

import Title from "../Title.js"

import styles from "../../css/about.module.css"
import { graphql, useStaticQuery } from "gatsby"
// import img from "../../images/defaultBcg.jpeg"

const getAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about backroads" /> */}
            <Img fluid={aboutImage.childImageSharp.fluid} alt="awesome landscape" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            assumenda perferendis voluptas.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            exercitationem quo voluptatibus?
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
