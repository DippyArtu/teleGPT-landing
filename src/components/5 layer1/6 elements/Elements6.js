import React from 'react';

import gradImage6 from '../../../images/6-grad.png';
import noiseImage6 from '../../../images/6-noise.png';

import '../../../styles/5 layer1/Elements6.css';

function Elements6() {
    return (
    <div>
        <div className="neural-networks">
            <p className="neural-networks-text">
                Neural networks are complex systems that are modeled after the human brain, capable of learning from data and making predictions. They work by passing information through multiple layers of interconnected nodes, where each node performs a simple mathematical operation. By iteratively adjusting the strength of connections between nodes, neural networks can discover and capture patterns in the data, allowing them to make accurate predictions and decisions.
            </p>
        </div>
        <img src={gradImage6} alt="gradient6" className="gradient6" />
        <img src={noiseImage6} alt="noise6" className="noise6" />
    </div>
    );
  }
  
  export default Elements6;