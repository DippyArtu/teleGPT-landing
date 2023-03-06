import React from 'react';

import '../../../styles/5 layer1/BotImage6.css';
import botImage6 from '../../../images/6-bot.svg';

const BotImage6 = () => {
    return (
        <a href="https://t.me/telegptAI_bot" target="_blank" rel="noopener noreferrer" className="bot-link">
          <div className="bot-image-container">
            <img src={botImage6} alt="bot" className="bot-image" />
          </div>
        </a>
      );
};

export default BotImage6;
