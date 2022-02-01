import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./common.css";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="Blog site home page" />
    <header id="page-title" className="jumbotron background">
      <div className="container">
        <div className="horizontal-center vertical-center">
          <h1 className="article-title">Welcome to your own Gatsby site.</h1>
          <h2 className="article-subtitle"><span>&#8220;</span>Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.<span>&#8221;</span></h2>
        </div>
      </div>
    </header>
  </Layout>
)

export default IndexPage
