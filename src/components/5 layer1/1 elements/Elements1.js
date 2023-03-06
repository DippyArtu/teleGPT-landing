import React from 'react';
import Button from '../../Button'

import '../../../styles/5 layer1/Elements1.css';
import bgImage1 from '../../../images/1-bg-gradient.png';
import heroImage1 from '../../../images/1-hero-image.png';

import buttonImage4 from '../../../images/4-button.svg';

function Elements1() {
    return (
      <div>
        <img src={bgImage1} alt="bg-gradient-1" className="bg-gradient-1" />
        <img src={heroImage1} alt="hero-1" className="hero-1" />


        {/* <Button image={buttonImage4} width="159px" height="65px" left="741px" top="3860px" /> */}
      </div>
    );
  }
  
  export default Elements1;