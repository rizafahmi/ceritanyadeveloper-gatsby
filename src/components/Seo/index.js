import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import favicon from '../../../static/images/favicon.ico';

const Seo = ({ data }) => {
  const title = ((data || {}).frontmatter || {}).title;
  const description =
    ((data || {}).frontmatter || {}).description ||
    'Developer inspiratif bercerita tentang bagaimana mereka mulai menjadi developer';
  const postSlug = ((data || {}).fields || {}).slug;

  const url = 'https://ceritanyadeveloper.com' + postSlug;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'ID',
        prefix: 'og: http://ogp.me/ns#'
      }}
    >
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href={favicon} />

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`https://ceritanyadeveloper.com/images/ceritanya-podcast-artwork.png`}
      />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:image"
        content={`https://ceritanyadeveloper.com/images/ceritanya-podcast-artwork.png`}
      />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={'rizafahmi22'} />
    </Helmet>
  );
};

Seo.propTypes = {
  data: PropTypes.object
};

export default Seo;
