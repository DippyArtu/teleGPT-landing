import React, { useState } from 'react';
import '../../styles/4 layer2/Info.css';

import botImg from '../../images/2-bot.svg';
import howImg from '../../images/2-how.svg';
import capsImg from '../../images/2-caps.svg';
import botBtnImg from '../../images/2-bot-btn.svg';
import howBtnImg from '../../images/2-how-btn.svg';
import capsBtnImg from '../../images/2-caps-btn.svg';


const Info = () => {
  const [activeTab, setActiveTab] = useState('bot');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="info-container">
      <div className="button-container">
        <img src={botBtnImg} alt="bot button" className={`menu-button ${activeTab === 'bot' ? 'active' : ''}`} onClick={() => handleTabClick('bot')} />
        <img src={howBtnImg} alt="how button" className={`menu-button ${activeTab === 'how' ? 'active' : ''}`} onClick={() => handleTabClick('how')} />
        <img src={capsBtnImg} alt="caps button" className={`menu-button ${activeTab === 'caps' ? 'active' : ''}`} onClick={() => handleTabClick('caps')} />
      </div>
      <div className="content-container">
        {activeTab === 'bot' && <img src={botImg} alt="bot content" className="content-image" />}
        {activeTab === 'how' && <img src={howImg} alt="how content" className="content-image" />}
        {activeTab === 'caps' && <img src={capsImg} alt="caps content" className="content-image" />}
      </div>
    </div>
  );
};

export default Info;
