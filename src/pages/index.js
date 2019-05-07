import React from 'react';

import Header from '../components/Header.js';
import './index.css';

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
