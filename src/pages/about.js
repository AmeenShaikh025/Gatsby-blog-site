import React from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"

const about = () => (
        <Layout>
            <Seo title="About" description="Blog site about page" />
            <div className="about">
                <h1>About Us</h1>
                <p>
                lorem ipsum 
                </p>
            </div>
        </Layout>
    )

export default about
