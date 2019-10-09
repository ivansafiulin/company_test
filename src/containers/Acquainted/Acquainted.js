import React from 'react';
import './Acquainted.scss';
import Button from '../../companents/Button/Button.js';

const Acquainted = () => {
  return (
    <div className="acquainted container">
      <h2 className="acquainted__primary-header">
        Let's get acquainted
      </h2>
      <img src="./imgs/man-mobile.svg"
        alt="programmist_photo"
        className="acquainted__img-man"
      />
      <h2 className="acquainted__secondary-header">
        I am cool frontend <br/>
        developer
      </h2>
      <p className="acquainted__text">
        When real users have a slow experience on mobile,
        they're much less likely to find what they are
        looking for or purchase from you in the future.
        For many sites this equates to a huge missed opportunity,
        especially when more than half of visits are abandoned
        if a mobile page takes over 3 seconds to load.
      </p>
      <p className="acquainted__text">
        Last week, Google Search and Ads teams announced
        two new speed initiatives to help improve
        user-experience on the web.
      </p>
      <Button className="btn btn__secondary bg--white" />

    </div>
  )
};

export default Acquainted;
