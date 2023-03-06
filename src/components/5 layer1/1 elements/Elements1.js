import React from 'react';
import Button from '../../Button'

import '../../../styles/5 layer1/Elements1.css';
import bgImage1 from '../../../images/1-bg-gradient.png';
import heroImage1 from '../../../images/1-hero-image.png';
import noise1 from '../../../images/1-noise.png';
import buttonImage1 from '../../../images/1-button.svg';
import logo from '../../../images/logo.svg';

function Elements1() {
    return (
      <div>
        <img src={bgImage1} alt="bg-gradient-1" className="bg-gradient-1" />
        <img src={heroImage1} alt="hero-1" className="hero-1" />
        <img src={noise1} alt="nosie-1" className="nosie-1" />
        <div className='hero-section1'>
          <h1 className='future-text1'>The future of AI<br/>at your fingertips</h1>
          <h4 className='assistant-text1'>Your perfect assistant,<br/>right inside Telegram</h4>
          <Button image={buttonImage1} width="164px" height="63px" left="124px" top="870px" />
        </div>
        <img src={logo} alt="logo" className="logo" />
      </div>
    );
  }
  
  export default Elements1;