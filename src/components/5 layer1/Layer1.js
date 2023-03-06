import React from 'react';
import Elements6 from './6 elements/Elements6'
import Transition34 from './Transition3_4'
import Phones4 from './Phones4';
import Button from '../Button'
import Elements5 from './Elements5';
import Elements1 from './1 elements/Elements1';

import '../../styles/5 layer1/Layer1.css';
import transitionImage4_5 from '../../images/4-5-transition.png';
import buttonImage4 from '../../images/4-button.svg';

function Layer1() {
    return (
      <div>
        <Elements6 />
        {/* <img src={transitionImage4_5} alt="transition4-5" className="transition4-5" /> */}
        {/* <Transition34 /> */}
        {/* <Phones4 /> */}
        {/* <Button image={buttonImage4} width="159px" height="65px" left="741px" top="3860px" /> */}
        {/* <Elements5 /> */}
        {/* <Elements1 /> */}
      </div>
    );
  }
  
  export default Layer1;