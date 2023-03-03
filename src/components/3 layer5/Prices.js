import React from 'react';
import LazyLoad from 'react-lazyload';
import FreeTrial from './FreeTrial';
import AiExplorer from './AiExplorer';

const Prices = () => {
  return (
    <div>
      <LazyLoad height={200}>
        <FreeTrial />
        <AiExplorer />
      </LazyLoad>
    </div>
  );
};

export default Prices;
