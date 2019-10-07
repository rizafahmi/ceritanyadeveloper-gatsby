import React from 'react';

import TopHeader from '../components/Header.js';

const Newsletter = () => (
  <div className="max-w-lg container font-mono mx-auto leading-loose text-grey-darkest">
    <TopHeader image={require('../images/logo.png')} />
    <div className="bg-white">
      <div className="mx-6 mt-6">
        <h2>Newsletter</h2>
        <p>
          Dapatkan update langsung ke inbox email kamu dengan <em>subscribe</em>{' '}
          ke newsletter Ceritanya Developer Podcast.
        </p>
        <link
          rel="stylesheet"
          href="https://emailoctopus.com/bundles/emailoctopuslist/css/formEmbed.css?1527775527"
        />
        <div className="email-octopus-form-wrapper">
          <p className="email-octopus-success-message" />
          <p className="email-octopus-error-message" />
          <form
            method="post"
            action="https://emailoctopus.com/lists/ff1cb805-33c4-11e8-a3c9-06b79b628af2/members/embedded/1.1/add"
            className="email-octopus-form bound"
          >
            <div className="email-octopus-form-row">
              <label htmlFor="field_1">Nama kamu</label>
              <input
                id="field_1"
                name="embedded_form_subscription[field_1]"
                type="text"
                placeholder=""
              />
            </div>
            <div className="email-octopus-form-row">
              <label htmlFor="field_0">Email address</label>
              <input
                id="field_0"
                name="embedded_form_subscription[field_0]"
                type="email"
                placeholder=""
              />
            </div>
            <div className="email-octopus-form-row-hp" aria-hidden="true">
              <input
                type="text"
                name="hpff1cb805-33c4-11e8-a3c9-06b79b628af2"
                tabIndex="-1"
                autoComplete="nope"
              />
            </div>
            <div className="email-octopus-form-row-subscribe">
              <input
                type="hidden"
                name="successRedirectUrl"
                value="https://ceritanyadeveloper.com/subscribed"
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>
          <div className="email-octopus-rewards">
            Powered by{' '}
            <a
              href="https://emailoctopus.com/?urli=6BkkN&amp;utm_medium=user_referral&amp;utm_source=builder"
              target="_blank"
              rel="noopener noreferrer"
            >
              EmailOctopus
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Newsletter;
