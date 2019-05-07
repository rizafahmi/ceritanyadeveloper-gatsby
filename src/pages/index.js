import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const TitleAndDescription = ({ data }) => {
  const { title, description } = data.site.siteMetadata;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
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
    <div className="hack">
      <div className="container">
        <div className="grid">
          <main className="cell">
            <img
              src={'images/logo.png'}
              alt="Logo Ceritanya Developer"
              style={{ width: 256 }}
            />
            <nav class="nav">
              <ul className="nav-list" style={{ listStyleType: 'none' }}>
                <li className="menuitem">
                  <a href="/about">Tentang</a>
                </li>
                <li className="menuitem">
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
            <Header />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
