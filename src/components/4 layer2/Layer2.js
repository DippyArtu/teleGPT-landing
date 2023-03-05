import React from 'react';
import Button from '../Button'
import Info from './Info';
import Features from './Features';

import '../../styles/4 layer2/Layer2.css';
import '../../styles/4 layer2/Features.css';

import bgGradient2 from '../../images/2-bg-gradient.png';
import noiseImage2 from '../../images/2-noise.png';
import featuresImage3 from '../../images/3-features-pic.png';
import buttonImage from '../../images/2-button.svg';


function Layer2() {
    return (
      <>
        <img src={bgGradient2} alt="bg-gradient2" className="bg-gradient2" />
        <img src={noiseImage2} alt="noise-image2" className="noise-image2" />
        <img src={featuresImage3} alt="features-image3" className="features-image3" />
        <Features />
        <Button image={buttonImage} width="289px" height="63px" left="1138px" top="1990px" />
        <Info />
      </>
    );
  }

  export default Layer2;
