import React from 'react';

import TopHeader from '../components/Header.js';

const Tentang = () => {
  return (
    <div className="max-w-lg container font-mono mx-auto leading-loose text-grey-darkest">
      <TopHeader image={require('../images/logo.png')} />
      <div className="mx-6 mt-6">
        <h2>Tentang</h2>
        <blockquote className="pl-4 border-l-4 border-teal ml-6 my-6">
          <p className="text-xl">
            &ldquo;Developer favorit bercerita tentang bagaimana mereka mulai
            menjadi developer.&rdquo;
          </p>
          <p className="uppercase my-6">Riza Fahmi</p>
        </blockquote>
        <div className="my-6" align="center">
          <iframe
            className=""
            src="https://anchor.fm/ceritanya-developer/embed/episodes/Coming-Soon-e1aaad"
            title="audio"
            height="102px"
            width="752px"
            frameBorder="0"
            scrolling="no"
          />
        </div>
        <div className="">
          <p>
            Selamat datang di ceritanya developer podcast. Saya Riza dan di
            podcast ini saya akan berbincang-bincang dengan developer,
            programmer, software engineer keren dan inspiratif tentang bagaimana
            mereka memulai karir mereka sebagai developer. Kita juga akan
            mendengar cerita mereka tentang komputer pertama mereka, pengalaman
            coding pertama hingga pekerjaan pertama mereka sebagai developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
