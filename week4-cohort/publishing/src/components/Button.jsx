import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const Button = ({ type, onClick, text }) => {
  let className = 'btn';

  if (type === 'primary') {
    className += ' btn-primary';
  } else if (type === 'default') {
    className += ' btn-default';
  } else if (type === 'dashed') {
    className += ' btn-dashed';
  } else if (type === 'text') {
    className += ' btn-text';
  } else if (type === 'link') {
    className += ' btn-link';
  }

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
    
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'dashed', 'text', 'link']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'default',
  onClick: () => {},
};

export default Button;