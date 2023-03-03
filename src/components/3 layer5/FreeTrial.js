import React from 'react';
import priceWindowBg from '../../images/5-price-window-bg.svg';
import freeTrialText from '../../images/free-trial-text.svg';
import '../../styles/3 layer5/FreeTrial.css';

const FreeTrial = () => {
    return (
      <div>
        <img src={priceWindowBg} className="price-window-bg-1" alt="price-window-bg-1" />
        <img src={priceWindowBg} className="price-window-bg-2" alt="price-window-bg-2" />
        <img src={freeTrialText} className="free-trial-text" alt="free-trial-text" />
      </div>
    );
  };

  export default FreeTrial;
  