import React from 'react';

import '../styles/LandingPage.css';

import Layer3 from './1 layer3/Layer3';
import Prices from './3 layer5/Prices';
import Layer2 from './4 layer2/Layer2';
import Layer1 from './5 layer1/Layer1';

import gradientImage4 from '../images/4-bg-gradient.png';
import gradientImage5 from '../images/5-bg-gradient.png';
import noiseImage5 from '../images/5-noise.png';


function LandingPage() {
  return (
    <div className="landing-page">

      {/* ############### BOTTOM LAYER ############### */}
      {/* ################## LAYER 3 ################# */}
      <Layer3 />
      

      {/* ################## LAYER 4 ################# */}
      <img src={gradientImage4} alt="4-bg-gradient" className="gradient-image4" />
      <div className="noise-image4"></div>
      

      {/* ################## LAYER 5 ################# */}
      <img src={gradientImage5} alt="5-bg-gradient" className="gradient-image5" />
      <div className="plans-image"></div>
      <img src={noiseImage5} alt="5-noise" className="noise-image5" />
      <Prices />
      

      {/* ################## LAYER 2 ################# */}
      <Layer2 />

      {/* ################## LAYER 1 ################# */}
      <Layer1 />

      {/* ################ TOP LAYER  ################ */}
      {/* ################ BACKGROUND ################ */}
      <div className="landing-page__background"></div>
    </div>
  );
}

export default LandingPage;
