import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Banner from "../components/Banner"

import style from "../css/error.module.css"

export default function errorPage() {
  return (
    <Layout>
      <header className={style.error}>
        <Banner title="oops you have reached a dead end">
          <Link to="/" className="btn-white">
            return Home
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
