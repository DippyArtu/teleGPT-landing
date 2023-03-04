import React, { useState } from 'react';
import '../../styles/4 layer2/Info.css';

import botBtn from '../../images/2-bot-btn.svg';
import howBtn from '../../images/2-how-btn.svg';
import capsBtn from '../../images/2-caps-btn.svg';
import botContent from '../../images/2-bot.svg';
import howContent from '../../images/2-how.svg';
import capsContent from '../../images/2-caps.svg';


const Info = () => {
  const [content, setContent] = useState(botContent);
  const handleBotClick = () => setContent(botContent);
  const handleHowClick = () => setContent(howContent);
  const handleCapsClick = () => setContent(capsContent);

  return (
    <div className="info">
      <div className="button-container">
        <img src={botBtn} alt="bot-btn" className="menu-button" onClick={handleBotClick} />
        <img src={howBtn} alt="how-btn" className="menu-button" onClick={handleHowClick} />
        <img src={capsBtn} alt="caps-btn" className="menu-button" onClick={handleCapsClick} />
      </div>
      <div className="content-container">
        <img src={content} alt="content" className="content-image" />
      </div>
    </div>
  );
};

export default Info;
