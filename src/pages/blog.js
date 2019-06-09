import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const blog = () => {
  return (
    <Layout>
      <h1>Hi from the Blog Page as well</h1>
      <Link to="/">Go Home</Link>
    </Layout>
  )
}

export default blog
