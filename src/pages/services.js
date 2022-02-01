import React from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./common.css";

const services = () => (
        <Layout>
            <Seo title="Services" description="Blog site service page" />
            <header id="page-title" className="jumbotron background">
                <div className="container">
                    <div className="horizontal-center vertical-center">
                    <h1 className="article-title">Our Services</h1>
                    <h2 className="article-subtitle"><span>&#8220;</span>Don't watch the clock; do what it does. Keep going.<span>&#8221;</span></h2>
                    </div>
                </div>
            </header>
        </Layout>
    )

export default services
