const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const episodeTemplate = path.resolve('src/templates/episode-page.js');

    resolve(
      graphql(`
        query {
          allMarkdownRemark {
            nodes {
              frontmatter {
                path
              }
            }
          }
        }
      `).then(({ data }) => {
        const { nodes } = data.allMarkdownRemark;
        nodes.forEach(node => {
          const { path } = node.frontmatter;
          createPage({
            path,
            component: episodeTemplate,
            context: {
              pathSlug: path
            }
          });
          resolve();
        });
      })
    );
  });
};
