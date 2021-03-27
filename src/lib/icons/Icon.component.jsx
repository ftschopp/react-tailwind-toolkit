import React from 'react';
import { icons } from './blueprint/all-icons';

// type Props = {
//   className: string,
//   name: string,
//   width: number,
//   height: number,
//   onClick: SyntheticEvent<HTMLElement>,
// };

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
const Icon = ({ className, name, width, height, onClick }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 20 20" onClick={onClick}>
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
