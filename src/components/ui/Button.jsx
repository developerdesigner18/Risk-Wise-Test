import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, onClick, children, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
      
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string, 
  onClick: PropTypes.func, 
  children: PropTypes.node, 
  type: PropTypes.string, 
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  onClick: null,
  children: null,
  type: 'button',
  disabled: false,
};

export default Button;
