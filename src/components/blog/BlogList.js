import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Title from "../Title"
import BlogCard from "./BlogCard"

import styles from "../../css/blog.module.css"

const getPosts = graphql`
  query {
    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "Do MMMM YYYY")
          title
          slug
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const BlogLIst = () => {
  const { posts } = useStaticQuery(getPosts)
  //console.log(posts)

  return (
    <section className={styles.blog}>
      <Title title="Our" subtitle="Blog" />
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogLIst
