import { graphql, Link } from 'gatsby';
import React from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./common.css";

const blogPage = ({data}) => (
    <Layout>
        <Seo title="Blog" description="Latest posts" />
        <div className="blog">
            <h1>Latest Posts</h1>
            { data.allMarkdownRemark.edges.map(post => (
                <div className="blog-container" key={post.node.id}>
                    <h3 className="">{post.node.frontmatter.title}</h3>
                    <small className="">
                        Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}
                    </small>
                    <div>
                        <Link to={post.node.frontmatter.path}>Read More</Link>
                    </div>
                </div>
            ))
            }
        </div>
    </Layout>
) 

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges{
                    node {
                        id
                        frontmatter {
                        path
                        title
                        date
                        author
                    }
                    excerpt
                }
            }
        }
    }
`;

export default blogPage
