import React from 'react';
import Button from '../Button'
import Info from './Info';

import '../../styles/4 layer2/Layer2.css';

import bgGradient2 from '../../images/2-bg-gradient.png';
import noiseImage2 from '../../images/2-noise.png';
import featuresImage2 from '../../images/3-features-pic.png';
import introImage2 from '../../images/2-introduction-pic.png';
import buttonImage from '../../images/2-button.svg';


function Layer2() {
    return (
      <>
        <img src={bgGradient2} alt="bg-gradient2" className="bg-gradient2" />
        <img src={noiseImage2} alt="noise-image5" className="noise-image5" />
        <img src={featuresImage2} alt="features-image2" className="features-image2" />
        <img src={introImage2} alt="intro-image2" className="intro-image2" />
        <Button image={buttonImage} width="289px" height="63px" left="1138px" top="1990px" />
        <Info />
      </>
    );
  }

  export default Layer2;