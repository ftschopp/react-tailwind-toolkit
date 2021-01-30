import React from 'react';
import { Icon } from '../../icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

const PopConfirm = ({
  className,
  icon,
  iconClassName,
  type,
  title,
  message,
  acceptTextButton,
  cancelTextButton,
  onConfirm,
  onCancel,
  ...props
}) => {
  const color =
    type === 'critical' ? 'red' : type === 'warning' ? 'yellow' : 'green';

  return (
    <>
      <div
        className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full border shadow-sm ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div
              className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-${color}-100 sm:mx-0 sm:h-10 sm:w-10`}
            >
              <Icon name={icon} className={iconClassName} />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >
                {title}
              </h3>
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">{message}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
            <button
              type="button"
              className={`inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-${color}-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-${color}-500 focus:outline-none focus:border-${color}-700 focus:shadow-outline-${color} transition ease-in-out duration-150 sm:text-sm sm:leading-5`}
              onClick={onConfirm}
            >
              {acceptTextButton}
            </button>
          </span>
          <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              onClick={onCancel}
            >
              {cancelTextButton}
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

PopConfirm.defaultProps = {
  type: 'success',
  title: 'Titulo',
  message: 'Mensaje',
  acceptTextButton: 'Aceptar',
  cancelTextButton: 'Cancelar',
};

export default PopConfirm;
