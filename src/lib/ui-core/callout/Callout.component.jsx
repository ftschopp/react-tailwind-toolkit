import React from 'react';
import { cond, equals, always } from 'ramda';
import { Icon } from '../../icons';

const getTypeInfo = cond([
  [equals('warning'), always({ icon: 'warning-sign', color: 'yellow' })],
  [equals('success'), always({ icon: 'tick', color: 'green' })],
  [equals('error'), always({ icon: 'delete', color: 'red' })],
  [equals('info'), always({ icon: 'info-sign', color: 'blue' })],
]);

const Callout = ({ className, title, message, type, borderType, onClose }) => {
  // const classes = getClasses(type);
  const { icon, color } = getTypeInfo(type);
  const classes = `bg-${color}-200 border-${color}-400 text-${color}-800`;

  const onCloseClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      <div
        className={`flex justify-between border-${borderType}-4 p-2 ${classes} ${className}`}
        role="alert"
      >
        <div className="flex flex-col justify-center ">
          <Icon
            name={icon}
            className={`fill-current text-${color} mr-4`}
            width="24px"
            height="24px"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-xs">{title}</p>
          <p className="text-xs">{message}</p>
        </div>
        <div className="flex flex-col">
          <Icon
            name="cross"
            className={`cursor-pointer fill-current text-${color}-500`}
            onClick={onCloseClick}
          />
        </div>
      </div>
    </>
  );
};

Callout.defaultProps = {
  type: 'info',
  borderType: 'l',
};

export default Callout;
