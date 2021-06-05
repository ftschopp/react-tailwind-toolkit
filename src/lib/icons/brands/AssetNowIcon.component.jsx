import React from 'react';
/**
 * Component for showing details of the user.
 *
 * @component
 * @param {object} props
 * @param {string} props.className css tailwind classes
 * @param {string} props.name name of icon to render
 * @param {string} props.width width icon
 * @param {string} props.height height icon
 * @param {any} props.onClick on clicked icon event
 *
 * @example
 * return (
 *   <Icon className={"fill-current text-gray-300"} name="add" height={20} width={20} onClick={onClicked} />
 * )
 */
const AssetNowIcon = ({ className, name, width, height, onClick }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 180 110" onClick={onClick}>
    <path
      fill="#3f5567"
      d="m64.16628,3.33327c9.2,-0.117 15.668,-0.333 24,0c8.332,15 16.50134,30 24.83334,45c-3.666,6 -7.83401,13.66667 -11.50001,19.66667l-0.33333,-0.66667c-8.332,-14.332 -16.667,-29.668 -25,-44c-12,20.665 -24,42.335 -36,63l10,0c2.99934,-5.16633 7.16734,-11.167 9.83334,-16.5a2.847,2.847 0 0 0 0.16666,0.5c6.666,12 14.334,24 21,36l-76,0l59,-103z"
    />
    <path
      transform="rotate(180 118.25 55.0778)"
      fill="#1c8379"
      d="m123.33294,3.6666c9.2,-0.117 15.668,-0.333 24,0c8.332,15 16.50134,30 24.83334,45c-3.666,6 -7.83401,13.66667 -11.50001,19.66667l-0.33333,-0.66667c-8.332,-14.332 -16.667,-29.668 -25,-44c-12,20.665 -24,42.335 -36,63l10,0c2.99934,-5.16633 7.16734,-11.167 9.83334,-16.5a2.847,2.847 0 0 0 0.16666,0.5c6.666,12 14.334,24 21,36l-76,0l59,-103z"
    />
  </svg>
);

AssetNowIcon.defaultProps = {
  className: '',
  name: '',
  width: '50px',
  height: '50px',
};

export default AssetNowIcon;
