import React from 'react';
import { cond, equals, always } from 'ramda';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faCheck,
  faInfoCircle,
  faExclamationTriangle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

const getClasses = cond([
  [
    equals('warning'),
    always('bg-orange-200 border-orange-400 text-orange-800'),
  ],
  [equals('success'), always('bg-green-200 border-green-400 text-green-800')],
  [equals('error'), always('bg-red-200 border-red-400 text-red-800')],
  [equals('info'), always('bg-blue-200 border-blue-400 text-blue-800')],
]);

const getIcon = cond([
  [equals('warning'), always(faExclamationTriangle)],
  [equals('success'), always(faCheck)],
  [equals('error'), always(faTimesCircle)],
  [equals('info'), always(faInfoCircle)],
]);

const AlertMessage = ({
  className,
  title,
  message,
  type,
  borderType,
  onClose,
}) => {
  const classes = getClasses(type);
  const icon = getIcon(type);

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
          <FontAwesomeIcon size="lg" icon={icon} />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-sm">{title}</p>
          <p className="text-xs">{message}</p>
        </div>
        <div className="flex flex-col">
          <FontAwesomeIcon
            icon={faTimes}
            className="cursor-pointer"
            onClick={onCloseClick}
          />
        </div>
      </div>
    </>
  );
};

AlertMessage.defaultProps = {
  type: 'info',
  borderType: 'l',
};

export default AlertMessage;
