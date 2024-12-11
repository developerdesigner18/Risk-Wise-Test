import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  className,
  onClick,
  children,
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'left',
}) => {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && <i className={`${icon} icon-left`} />} {/* Icon before text */}
      {children}
      {icon && iconPosition === 'right' && <i className={`${icon} icon-right`} />} {/* Icon after text */}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string, // CSS classes for styling
  onClick: PropTypes.func, // Click event handler
  children: PropTypes.node, // Button text or content
  type: PropTypes.string, // Button type (e.g., "button", "submit")
  disabled: PropTypes.bool, // Disabled state
  icon: PropTypes.string, // Icon class (e.g., from a library like FontAwesome or Remix Icons)
  iconPosition: PropTypes.oneOf(['left', 'right']), // Icon position relative to text
};

Button.defaultProps = {
  className: '',
  onClick: null,
  children: null,
  type: 'button',
  disabled: false,
  icon: null, // No icon by default
  iconPosition: 'left', // Icon on the left by default
};

export default Button;
