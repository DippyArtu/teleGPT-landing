import React from 'react';
import '../../styles/1 layer3/Layer3.css';
import Tagline3 from './Tagline3';
import gradientImage3 from '../../images/3-gradient.png';

function Layer3() {
    return (
      <>
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
      </>
    );
  }

  export default Layer3;