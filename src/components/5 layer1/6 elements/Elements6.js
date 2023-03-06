import React from 'react';
import BotImage6 from './BotImage6';

import '../../../styles/5 layer1/Elements6.css';
import gradImage6 from '../../../images/6-grad.png';
import noiseImage6 from '../../../images/6-noise.png';
import text6 from '../../../images/6-text.svg'

function Elements6() {
    return (
    <div>
        <img src={text6} alt="text6" className="text6" />
        <img src={gradImage6} alt="gradient6" className="gradient6" />
        <img src={noiseImage6} alt="noise6" className="noise6" />
        <BotImage6 />
        <div className="powered-by">
            <span>powered by </span>
            <a href="https://defimoon.org" target="_blank" rel="noopener noreferrer"><b>defimoon</b></a>
        </div>
        <div className="welcome-container">
            <h1 className="welcome-text">Welcome</h1>
        </div>
    </div>
    );
  }
  
  export default Elements6;