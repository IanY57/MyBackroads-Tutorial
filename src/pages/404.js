import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import Banner from "../components/Banner"

import style from "../css/error.module.css"

export default function errorPage() {
  return (
    <Layout>
      <header className={style.error}>
        <Banner title="oops you have reached a dead end">
          <AniLink fade to="/" className="btn-white">
            return Home
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
