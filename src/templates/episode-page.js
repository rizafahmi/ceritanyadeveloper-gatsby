import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import TopHeader from '../components/Header.js';
import OtherEpisode from '../components/OtherEpisode.js';
import Seo from '../components/Seo';
import Player from '../components/Player';

const Template = ({ data, pageContext }) => {
  const { html } = data.markdownRemark;
  const {
    title,
    excerpt,
    guest,
    path,
    audio,
    thumbnail
  } = data.markdownRemark.frontmatter;
  return (
    <div className="max-w-lg container font-mono mx-auto leading-loose text-black">
      <Seo
        data={{
          frontmatter: {
            title: `Ceritanya Developer Podcast - ${title}`,
            description: excerpt
          },
          fields: { slug: path }
        }}
      />
      <TopHeader image={'../images/logo.png'} />
      <OtherEpisode context={pageContext} />
      <div className="mx-6 mt-6">
        <h2>{title}</h2>
        {thumbnail && (
          <Img
            style={{ display: 'none', height: 128, width: 128 }}
            fluid={thumbnail.childImageSharp.fluid}
            alt="guest"
          />
        )}
        <blockquote className="pl-4 border-l-4 border-teal-dark ml-6 my-6">
          <p className="text-xl">&ldquo;{excerpt}&rdquo;</p>
          <p className="uppercase my-6">{guest}</p>
        </blockquote>
        <div className="my-6 mx-6" align="center">
          <Player audio={audio} />
          <a href={audio} download>
            Download
          </a>
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
        audio
        path
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
`;
export default Template;
