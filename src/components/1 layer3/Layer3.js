import React from 'react';
import '../../styles/1 layer3/Layer3.css';
import Tagline3 from './Tagline3';
import gradientImage3 from '../../images/3-gradient.png';
import noiseImage3 from '../../images/3-noise.png';

function Layer3() {
    return (
      <>
        <img src={gradientImage3} alt="gradient-image3" className="gradient-image3" />
        <img src={noiseImage3} alt="noise-image3" className="noise-image3" />
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
      </>
    );
  }

  export default Layer3;