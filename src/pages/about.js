import React from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./common.css";

const about = () => (
        <Layout>
            <Seo title="About" description="Blog site about page" />
            <header id="page-title" className="jumbotron background">
                <div className="container">
                    <div className="horizontal-center vertical-center">
                    <h1 className="article-title">About Us</h1>
                    <h2 className="article-subtitle"><span>&#8220;</span>When something is important enough, you do it even if the odds are not in your favor.<span>&#8221;</span></h2>
                    </div>
                </div>
            </header>
        </Layout>
    )

export default about
