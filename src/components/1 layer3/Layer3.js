import React from 'react';
import '../../styles/Layer3.css';
import gradientImage3 from '../../images/3-gradient.png';
import noiseImage3 from '../../images/3-noise.png';

function Layer3() {
    return (
      <>
        <img src={gradientImage3} alt="gradient-image3" className="gradient-image3" />
        <img src={noiseImage3} alt="noise-image3" className="noise-image3" />
        <div className='tagline-container'>
          <p className='tagline3'>SPEAK<br/>CODE<br/>CREATE<br/>LEARN</p>
        </div>
      </>
    );
  }

  export default Layer3;