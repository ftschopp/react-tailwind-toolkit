import React from 'react';
import { icons } from './blueprint/all-icons';

const Icon = ({ className, name, width, height, onClick }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    onClick={onClick}
  >
    <path d={icons[name]}></path>
  </svg>
);

Icon.defaultProps = {
  className: '',
  name: '',
  width: '20px',
  height: '20px',
};

export default Icon;
