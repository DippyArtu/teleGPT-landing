import React from 'react';
import priceWindowBg from '../../images/5-price-window-bg.svg';
import aiExplorerText from '../../images/ai-explorer-text.svg';
import '../../styles/3 layer5/AiExplorer.css';

const AiExplorer = () => {
    return (
      <div>
        <img src={priceWindowBg} className="price-window-bg-3" alt="price-window-bg-3" />
        <img src={priceWindowBg} className="price-window-bg-4" alt="price-window-bg-4" />
        <img src={aiExplorerText} className="ai-explorer-text" alt="ai-explorer-text" />
      </div>
    );
  };

  export default AiExplorer;
  