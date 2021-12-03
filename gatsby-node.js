const path = require('path');

exports.createPages = async function ({ actions, graphql }) {

  const postTemplate = path.resolve('src/templates/blog-post.js')

  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges{
          node {
            html
            id
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.frontmatter.path
    actions.createPage({
      path: slug,
      component: postTemplate,
      context: { slug: slug },
    })
  })
}


// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }