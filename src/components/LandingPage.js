import React from 'react';
import LazyLoad from 'react-lazyload';

import '../styles/LandingPage.css';
import gradientImage3 from '../images/3-gradient.png';
import Tagline3 from './Tagline3';


function LandingPage() {
  return (
    <div className="landing-page">

      {/* ################ LAYER 3 ################ */}
      <LazyLoad>
        <img src={gradientImage3} alt="3-gradient" className="gradient-image3" />
        <div className="noise-image3"></div>
        <Tagline3
          text="SPEAK"
          width="867px"
          height="207px"
          left="40px"
          top="2342px"
        />
        <Tagline3
          text="CODE"
          width="867px"
          height="207px"
          left="40px"
          top="2499px"
        />
        <Tagline3
          text="CREATE"
          width="951px"
          height="207px"
          left="40px"
          top="2668px"
        />
        <Tagline3
          text="LEARN"
          width="867px"
          height="207px"
          left="40px"
          top="2825px"
        />
      </LazyLoad>

      {/* ################ BACKGROUND ################ */}
      <div className="landing-page__background"></div>
    </div>
  );
}

export default LandingPage;
