const _ = require("lodash")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === "publish")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpJob {
        edges {
          node {
            slug
            id
            title
            status
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const allPages = result?.data?.allWpJob?.edges
    const pages =
      process.env.NODE_ENV === "production"
        ? getOnlyPublished(allPages)
        : allPages
    _.each(pages, ({ node: page }) => {
      createPage({
        path: `/jobs/${page.slug}/`,
        component: path.resolve(`./src/templates/job.js`),
        context: {
          id: page.id,
        },
      })
    })
  })
}
