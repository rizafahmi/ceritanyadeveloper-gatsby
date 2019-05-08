import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const Layout = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;
  return (
    <div className="container font-mono mx-auto leading-loose text-grey-darkest">
      {nodes.map(({ frontmatter }) => {
        return (
          <div>
            {frontmatter.thumbnail && (
              <Img
                style={{ height: 128, width: 128 }}
                fluid={frontmatter.thumbnail.childImageSharp.fluid}
                alt="guest"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export const query = graphql`
  query ImageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      nodes {
        frontmatter {
          title
          date
          path
          excerpt
          guest
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 128, maxHeight: 128) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default Layout;
