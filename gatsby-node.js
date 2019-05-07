const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const episodeTemplate = path.resolve('src/templates/episode-page.js');

    resolve(
      graphql(`
        query {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
          ) {
            nodes {
              frontmatter {
                path
              }
            }
          }
        }
      `).then(({ data }) => {
        const { nodes } = data.allMarkdownRemark;
        nodes.forEach((node, index) => {
          const { path } = node.frontmatter;
          createPage({
            path,
            component: episodeTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : nodes[index - 1],
              next: index === nodes.length - 1 ? null : nodes[index + 1]
            }
          });
          resolve();
        });
      })
    );
  });
};
