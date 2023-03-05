import React from 'react';

import '../../styles/5 layer1/Transition3_4.css'
import transitionImage34 from '../../images/3-overlay-grad.png'
import transitionNoise34 from '../../images/3-overlay-noise.png'

function Transition34() {
    return (
      <div>
        <img src={transitionImage34} alt="transition-image3-4" className="transition-image3-4" />
        <img src={transitionNoise34} alt="transition-noise3-4" className="transition-noise3-4" />
        <p className="limits-text3-4">without limits</p>
        <h2 className="chatting-text3-4">Simply start chatting<br/><br/>Ask questions, engage in discussions, generate images, retrieve information from the web, create code and infinitely more</h2>
      </div>
    );
  }
  
  export default Transition34;