import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css'

const Button = ({ image, width, height, left, top, onClick }) => {
  const handleClick = () => {
    window.open('https://t.me/telegptAI_bot', '_blank');
  };

  return (
    <img className="button"
      src={image}
      alt="button"
      style={{ position: 'absolute', width, height, left, top, cursor: 'pointer' }}
      onClick={onClick || handleClick}
    />
  );
};

Button.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
