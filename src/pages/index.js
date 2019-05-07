import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import './index.css';

const TitleAndDescription = ({ data }) => {
  const { title, description } = data.site.siteMetadata;

  return (
    <div className="">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>
        Tersedia di:{' '}
        <a
          href="https://itunes.apple.com/us/podcast/ceritanya-developer-podcast/id1364448110?mt=2&uo=4"
          target="_blank"
          rel="noopener noreferrer"
        >
          iTunes
        </a>
        ,{' '}
        <a
          href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8zMDM0OGQ0L3BvZGNhc3QvcnNz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Podcast
        </a>
        ,{' '}
        <a
          href="https://open.spotify.com/show/6grT1c7jDkhK4skm1YIsTs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify
        </a>
        ,{' '}
        <a
          href="https://anchor.fm/ceritanya-developer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anchor.fm
        </a>
        ,{' '}
        <a href="http://pca.st/CwU8" target="_blank" rel="noopener noreferrer">
          Pocket Cast
        </a>
        , dan berbagai <em>platform</em> lainnya.
      </p>
    </div>
  );
};

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  );
};

const Layout = () => {
  return (
    <div className="container font-mono mx-auto leading-loose text-grey-darkest">
      <div className="header flex flex-col">
        <div className="logo my-2 flex flex-row">
          <div className="image mx-4">
            <img
              src={'images/logo.png'}
              alt="Logo Ceritanya Developer"
              style={{ width: 256 }}
            />
          </div>
          <Header />
        </div>
        <nav class="nav">
          <ul className="nav-list list-reset flex justify-around my-2">
            <li className="menuitem">
              <a href="/about">Tentang</a>
            </li>
            <li className="menuitem font-mono">
              <a href="/newsletter">Newsletter</a>
            </li>
            <li className="menuitem">
              <a href="/donate">Donasi</a>
            </li>
            <li className="menuitem">
              <a href="mailto:rizafahmi@gmail.com">Kontak</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Layout;
