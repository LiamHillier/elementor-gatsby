const path = require(`path`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const { fluid } = require(`gatsby-plugin-sharp`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/types/page.js`)
  return graphql(
    `
      {
        allWpPage(sort: { fields: date, order: DESC }) {
          nodes {
            uri
            id
            elementorData
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // Create pages
    result.data.allWpPage.nodes.forEach(edge => {
      createPage({
        path: `${edge.uri}`,
        component: pageTemplate,
        context: edge,
      })
    })
  })
}

// Download Images
exports.onCreateNode = async ({
  node,
  actions,
  store,
  cache,
  createNodeId,
  reporter,
}) => {
  const { createNode, deletePage, createPage } = actions

  if (node.internal.type === "SitePage") {
    if (node.context && node.context.elementorData) {
      if (!node.context.modified) {
        let elementorData = JSON.parse(node.context.elementorData)

        if (elementorData) {
          deletePage(node)

          async function downloadImages() {
            for (let row of elementorData) {
              for (let column of row.elements) {
                if (column.settings) {
                  if (column.settings.background_image) {
                    let fileNode = await createRemoteFileNode({
                      url: column.settings.background_image.url,
                      parentNodeId: node.id,
                      store,
                      cache,
                      createNode,
                      createNodeId: id => `elementor-images-${column.id}`,
                    })
                    let generatedImage = await generateImage({
                      fileNode,
                      cache,
                      reporter,
                    })
                    column.settings.background_image.fluid = generatedImage
                  }
                }
                for (let widget of column.elements) {
                  if (widget.widgetType === "image") {
                    let fileNode = await createRemoteFileNode({
                      url: widget.settings.image.url,
                      parentNodeId: node.id,
                      store,
                      cache,
                      createNode,
                      createNodeId: id => `elementor-images-${widget.id}`,
                    })
                    let generatedImage = await generateImage({
                      fileNode,
                      cache,
                      reporter,
                    })
                    widget.settings.image.fluid = generatedImage
                  }
                }
              }
            }
          }

          const generateImage = async function({ fileNode, cache, reporter }) {
            if (!fileNode || !fileNode.absolutePath) return

            let fluidResult = await fluid({
              file: fileNode,
              args: {
                withWebp: true,
                maxWidth: 768,
                toFormat: "WEBP",
                tracedSVG: false,
              },
              reporter,
              cache,
            })

            return fluidResult

            // const imgOptions = {
            //   fluid: fluidResult,
            // }
            // const ReactImgEl = React.createElement(Img.default, imgOptions, null)

            // return ReactDOMServer.renderToString(ReactImgEl)
          }

          await downloadImages().then(fileNode => {
            createPage({
              ...node,
              context: {
                ...node.context,
                modifiedData: elementorData,
                modified: true,
              },
            })
          })
        }
      }
    }
  }
}
