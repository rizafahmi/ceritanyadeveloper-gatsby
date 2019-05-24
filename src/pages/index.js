import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Seo from '../components/Seo';
import TopHeader from '../components/Header.js';
import './index.css';

const Layout = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;
  return (
    <div className="container font-mono mx-auto leading-loose text-black">
      <Seo
        data={{
          frontmatter: { title: 'Ceritanya Developer Podcast' },
          fields: { slug: '/' }
        }}
      />

      <TopHeader image={require('../images/logo.png')} />
      <div className="mx-6 mt-6">
        <h2>Episode</h2>
      </div>
      {nodes.map(({ frontmatter }) => {
        return (
          <div
            key={frontmatter.path}
            className="flex container mx-6 mb-6 pb-3 border-grey-lighter border-b"
          >
            <div className="thumb pr-3 self-center">
              {frontmatter.thumbnail && (
                <Img
                  style={{ height: 128, width: 128 }}
                  fluid={frontmatter.thumbnail.childImageSharp.fluid}
                  alt="guest"
                />
              )}
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
