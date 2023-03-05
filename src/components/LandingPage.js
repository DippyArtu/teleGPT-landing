import React from 'react';
import Layer3 from './1 layer3/Layer3';
import Prices from './3 layer5/Prices';
import Layer2 from './4 layer2/Layer2';
import Layer1 from './5 layer1/Layer1';

import '../styles/LandingPage.css';
import gradientImage4 from '../images/4-bg-gradient.png';
import noiseImage4 from '../images/4-noise.png'
import gradientImage5 from '../images/5-bg-gradient.png';
import noiseImage5 from '../images/5-noise.png';
import plansImage5 from '../images/5-plans.png';


function LandingPage() {
  return (
    <div className="landing-page">

      {/* ############### BOTTOM LAYER ############### */}
      {/* ################## LAYER 3 ################# */}
      <Layer3 />
      

      {/* ################## LAYER 4 ################# */}
      <img src={gradientImage4} alt="4-bg-gradient" className="gradient-image4" />
      <img src={noiseImage4} alt="noise-image4" className="noise-image4" />
      

      {/* ################## LAYER 5 ################# */}
      <img src={gradientImage5} alt="bg-gradient5" className="gradient-image5" />
      <img src={plansImage5} alt="plans-image5" className="plans-image5" />
      <img src={noiseImage5} alt="noise5" className="noise-image5" />
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
