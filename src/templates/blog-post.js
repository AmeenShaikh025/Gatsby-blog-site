import { graphql, Link } from 'gatsby';
import React from 'react';
import "./blog-post.css";

export default function Template ({data}) {
    const post = data.markdownRemark;

    return(
        <div className="blog-post">
            <Link to="/blog"> <span>&#8592;</span> Go Back</Link>
            <hr />
            <h1>
                {post.frontmatter.title}
            </h1>
            <h4>posted by <strong>{post.frontmatter.author}</strong> on <small>{post.frontmatter.date}</small></h4>
            <div dangerouslySetInnerHTML={{__html: post.html}}></div>
        </div>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path} }) {
            html
            frontmatter {
                path
                title
                date
                author
            }
        }
    }
`