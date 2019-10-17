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
      <div className="bg-white">
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
          <h3>Donasi via KaryaKarsa</h3>
          <p>
            Teman-teman bisa melakukan donasi melalui{' '}
            <a
              href="https://karyakarsa.com/rizafahmi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Karya Karsa
            </a>
            . Karya Karsa adalah platform apresiasi untuk kreator di Indonesia
            agar dapat terus berkarya. Untuk melakukan donasi, teman-teman bisa
            menggunakan GoPay dan prosesnya sangat mudah! Teman-teman bisa
            memilih tiga tingkatan donasi:
            <ul>
              <li>
                <a
                  href="https://karyakarsa.com/checkout/206"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dukungan Rp. 10.000
                </a>
                . Sebagai imbalannya, saya mengucapkan terimakasih.
              </li>
              <li>
                <a
                  href="https://karyakarsa.com/checkout/207"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dukungan Rp. 50.000
                </a>
                . Sebagai imbalannya, nama teman-teman akan saya sebutkan di
                episode-episode ceritanyadeveloper.
              </li>
              <li>
                <a
                  href="https://karyakarsa.com/checkout/208"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dukungan Rp. 2.000.000
                </a>
                . Mendapat slot sponsor untuk <em>brand</em> di tiga episode.
              </li>
            </ul>
          </p>
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
