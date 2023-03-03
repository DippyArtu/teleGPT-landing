import React from 'react';
import '../../styles/1 layer3/Tagline3.css';

function Tagline3({ text, width, height, left, top }) {
    return (
      <div
        className="tagline3"
        style={{ width, height, left, top }}
      >
        <span>{text}</span>
      </div>
    );
  }
  
export default Tagline3;