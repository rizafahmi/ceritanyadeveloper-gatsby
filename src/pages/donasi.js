import React from 'react';

import TopHeader from '../components/Header.js';

const Donasi = () => {
  return (
    <div className="max-w-lg container font-mono mx-auto leading-loose text-grey-darkest">
      <TopHeader image={require('../images/logo.png')} />
      <div className="bg-white">
        <div className="mx-6 mt-6">
          <h2>Donasi dan Kontribusi Untuk Podcast</h2>
          <p>
            Untuk saat ini beberapa alat untuk podcast terutama mic masih pinjam
            sana-sini. Karena itu jika teman-teman berkenan mendonasikan
            sebagian rezekinya untuk membeli alat, boleh silakan donasikan
            dengan gopay ataupun paypal.
          </p>
          <p>
            Rencana terdekat saya ingin membeli{' '}
            <a
              href="https://www.tokopedia.com/okedealpedia/zoom-perekam-suara-digital-handy-voice-recorder-h1n-black?trkid=f%3DCa0000L000P0W0S0Sh%2CCo0Po0Fr0Cb0_src%3Duniverse_page%3D1_ob%3D23_q%3DZoom+H1n_po%3D1_catid%3D634&amp;lt=%2Fsearchproduct%20-%20p1%20-%20product"
              target="_blank"
              rel="noopener noreferrer"
            >
              Handy Voice Recorder
            </a>{' '}
            dengan harga sekitar 2 juta rupiah.
          </p>
          <img style={{ height: 256 }} src="/images/zoom.png" alt="recorder" />
          <h3>Donasi via GoPay</h3>
          <img style={{ height: 367 }} src="/images/gopay.png" alt="gopay" />
          <h3>Donasi via PayPal</h3>
          <p>
            Alternatif kedua, bisa menggunakan PayPal.{' '}
            <a
              href="https://www.paypal.me/rizafahmi/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              Klik disini untuk melakukan donasi via PayPal
            </a>
            .
          </p>
          <h3>Donasi via Patreon</h3>
          <p>
            Teman-teman juga dapat melakukan donasi melalui{' '}
            <a
              href="https://www.patreon.com/bePatron?u=3067719"
              target="_blank"
              rel="noopener noreferrer"
            >
              Patreon
            </a>
            . Patreon adalah sebuah platform untuk para pembuat konten
            mendapatkan uang setiap bulannya. Uang digunakan untuk membeli kopi,
            memotivasi, bahkan ada yang sampai dapat membiayai hidupnya murni
            dari Patreon, seperti{' '}
            <a
              href="https://www.patreon.com/evanyou"
              target="_blank"
              rel="noopener noreferrer"
            >
              sang kreator Vue.js Evan You
            </a>
            .
          </p>
          <p>
            <a
              href="https://www.patreon.com/bePatron?u=3067719"
              data-patreon-widget-type="become-patron-button"
            >
              Klik disini untuk menjadi Patron!
            </a>
          </p>
          <h3>Dukungan via Notion</h3>
          <p>
            <img src="/images/notion.png" alt="notion" />
            Salah satu tools yang menjadi senjata rahasia saya, terutama dalam
            proses produksi podcast. Mulai dari menyiapkan skrip, penjadwalan,
            menulis catatan episode, dan <em>list todo lainnya</em>. Saya pakai
            tools yang namanya{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.notion.so/?r=6445d974f9394c4299f682bd0855f5bd"
            >
              Notion
            </a>
            .
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.notion.so/?r=6445d974f9394c4299f682bd0855f5bd"
            >
              Notion
            </a>{' '}
            adalah tempat dimana kita bisa menulis catatan, menulis rencana,
            kolaborasi dan mengorganisasikan dokumen, bahkan menulis buku.
            Banyak juga orang yang beranggapan Notion seperti wiki internal.
            Hampir semua kegiatan yang saya lakukan menggunakan Notion. Info
            lebih lanjut silakan cek aja{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.notion.so"
            >
              notion.so
            </a>{' '}
            atau jika teman-teman mau mendukung podcast ini bisa daftar di{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ceritanyadeveloper.com/notion"
            >
              ceritanyadeveloper.com/notion
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donasi;
