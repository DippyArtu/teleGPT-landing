import React from 'react';
import LazyLoad from 'react-lazyload';

import '../styles/LandingPage.css';

import Layer3 from './1 layer3/Layer3';
import Prices from './3 layer5/Prices';

import gradientImage4 from '../images/4-bg-gradient.png';
import gradientImage5 from '../images/5-bg-gradient.png';
import noiseImage5 from '../images/5-noise.png';



function LandingPage() {
  return (
    <div className="landing-page">

      {/* ############### BOTTOM LAYER ############### */}
      {/* ################ LAYER 3 ################ */}
      <LazyLoad height={200}> 
        <Layer3 />
      </LazyLoad>

      {/* ################ LAYER 4 ################ */}
      <LazyLoad height={200}> 
        <img src={gradientImage4} alt="4-bg-gradient" className="gradient-image4" />
        <div className="noise-image4"></div>
      </LazyLoad>

      {/* ################ LAYER 5 ################ */}
      <LazyLoad height={200}>
        <img src={gradientImage5} alt="5-bg-gradient" className="gradient-image5" />
        <div className="plans-image"></div>
        <img src={noiseImage5} alt="5-noise" className="noise-image5" />
        <Prices />
      </LazyLoad>


      {/* ################ BACKGROUND ################ */}
      <div className="landing-page__background"></div>
    </div>
  );
}

export default LandingPage;
