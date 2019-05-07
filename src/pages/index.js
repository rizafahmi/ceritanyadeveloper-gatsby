import React from 'react';
import { Link, graphql } from 'gatsby';

import TopHeader from '../components/Header.js';
import './index.css';

const Layout = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;
  return (
    <div className="container font-mono mx-auto leading-loose text-grey-darkest">
      <TopHeader />
      <div className="mx-6 mt-6">
        <h2>Episode</h2>
      </div>
      {nodes.map(({ frontmatter }) => {
        return (
          <div className="flex container mx-6 mb-6 pb-3 border-grey-lighter border-b">
            <div className="thumb pr-3 self-center">
              <img
                style={{ maxWidth: 128, height: 'auto' }}
                src={frontmatter.thumbnail}
                alt="guest"
              />
            </div>
            <div className="texts">
              <h3 key={frontmatter.path}>
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
              </h3>
              <p>
                "{frontmatter.excerpt}" -- {frontmatter.guest}
              </p>
              <div className="buttons">
                <Link to={frontmatter.path}>
                  <span role="img" aria-label="emoji">
                    ▶️{' '}
                  </span>
                  Dengarkan
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const query = graphql`
  query EpisodesQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      nodes {
        frontmatter {
          title
          date
          path
          excerpt
          thumbnail
          guest
        }
      }
    }
  }
`;

export default Layout;
