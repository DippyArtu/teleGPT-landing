import React from 'react';
import Elements6 from './6 elements/Elements6'
import transitionImage4_5 from '../../images/4-5-transition.png';
import Transition34 from './Transition3_4'

import '../../styles/5 layer1/Layer1.css';

function Layer1() {
    return (
      <div>
        <Elements6 />
        <img src={transitionImage4_5} alt="transition4-5" className="transition4-5" />
        <Transition34 />
      </div>
    );
  }
  
  export default Layer1;