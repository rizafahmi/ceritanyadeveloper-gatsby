import React from 'react';
import { graphql } from 'gatsby';

import TopHeader from '../components/Header.js';

const Template = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title } = data.markdownRemark.frontmatter;
  return (
    <div className="container font-mono mx-auto leading-loose text-grey-darkest">
      <TopHeader />
      <div className="mx-6 mt-6">
        <h2>{title}</h2>
        <div className="" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
export default Template;
