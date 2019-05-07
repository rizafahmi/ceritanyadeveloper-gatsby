import React from 'react';
import { Link } from 'gatsby';

const OtherEpisode = ({ context }) => {
  const { prev, next } = context;
  return (
    <div className="my-6 mx-auto flex justify-center">
      {prev && (
        <Link
          className="mx-6 p-3 border-2 hover:bg-teal-light rounded"
          to={prev.frontmatter.path}
        >
          <span role="img" aria-label="emoji">
            ◀️
          </span>{' '}
          Episode Sebelumnya
        </Link>
      )}
      {next && (
        <Link
          className="mx-6 p-3 border-2 hover:bg-teal-light rounded"
          to={next.frontmatter.path}
        >
          Episode Selanjutnya{' '}
          <span role="img" aria-label="emoji">
            ▶️
          </span>
        </Link>
      )}
    </div>
  );
};

export default OtherEpisode;
