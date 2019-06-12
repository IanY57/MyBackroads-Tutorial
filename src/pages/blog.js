import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Images from "../example/Images"

const blog = () => {
  return (
    <Layout>
      <h1>Hi from the Blog Page as well</h1>
      <Link to="/">Go Home</Link>
      <Images />
    </Layout>
  )
}

export default blog
