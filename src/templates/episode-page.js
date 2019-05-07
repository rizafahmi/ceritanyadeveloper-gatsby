import React from 'react';
import { graphql } from 'gatsby';

import TopHeader from '../components/Header.js';

const Template = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, excerpt, guest, embed } = data.markdownRemark.frontmatter;
  return (
    <div className="container font-mono mx-auto leading-loose text-grey-darkest">
      <TopHeader />
      <div className="mx-6 mt-6">
        <h2>{title}</h2>
        <blockquote className="pl-4 border-l-4 border-teal ml-6 my-6">
          <p className="text-xl">&ldquo;{excerpt}&rdquo;</p>
          <p className="uppercase my-6">{guest}</p>
        </blockquote>
        <div className="my-6" align="center">
          <iframe
            className=""
            src={embed}
            title="audio"
            height="102px"
            width="752px"
            frameborder="0"
            scrolling="no"
          />
        </div>
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
        excerpt
        guest
        embed
      }
    }
  }
`;
export default Template;
