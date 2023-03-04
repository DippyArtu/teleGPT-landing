import React from 'react';

import featuresImage2 from '../../images/2-features-pic.png';
import featuresText2 from '../../images/2-features-text.svg';
import '../../styles/4 layer2/Features.css';

function Features() {
    return (
      <>
        <img src={featuresImage2} alt="features-pic2" className="features-pic2" />
        <img src={featuresText2} alt="features-text2" className="features-text2" />
      </>
    );
  }

  export default Features;