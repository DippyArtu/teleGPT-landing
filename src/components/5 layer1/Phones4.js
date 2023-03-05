import React from "react";

import '../../styles/5 layer1/Phones4.css'

import Phone1 from '../../images/4-iphone1.png';
import Phone2 from '../../images/4-iphone2.png';
import Phone3 from '../../images/4-iphone3.png';

function Phones4() {
    return (
      <div>
        <img src={Phone1} alt="phone1" className="phone1" />
        <img src={Phone2} alt="phone2" className="phone2" />
        <img src={Phone3} alt="phone3" className="phone3" />
      </div>
    );
  }
  
  export default Phones4;