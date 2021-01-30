import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * InputIcon
 * @param {*} param0
 */
function InputIcon({ className, iconClassName, icon }) {
  if (icon) {
    return (
      <span
        className={`flex z-10 leading-snug font-normal absolute text-center absolute bg-transparent rounded text-base items-center justify-center h-8 w-8 ${className}`}
      >
        {/* <FontAwesomeIcon className={iconClassName} icon={icon} size="xs" /> */}
      </span>
    );
  } else {
    return null;
  }
}

InputIcon.defaultProps = {
  type: 'left',
  className: '',
  iconClassName: '',
};
export default InputIcon;
