exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogTemplate = require.resolve(`./src/templates/blog-template.js`)
  const AboutTemplate = require.resolve(`./src/templates/about-template.js`)

  const result = await graphql(`
    {
      blog: allFile(
        filter: {
          sourceInstanceName: { eq: "blog" }
          children: { elemMatch: { internal: { type: { eq: "Mdx" } } } }
        }
      ) {
        nodes {
          childMdx {
            frontmatter {
              slug
            }
          }
        }
      }
      about: allFile(
        filter: {
          sourceInstanceName: { eq: "about" }
          children: { elemMatch: { internal: { type: { eq: "Mdx" } } } }
        }
      ) {
        nodes {
          childMdx {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }

  const blogPosts = result.data.blog.nodes
  const aboutPages = result.data.about.nodes

  blogPosts.forEach(({ childMdx: node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  aboutPages.forEach(({ childMdx: node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: AboutTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
