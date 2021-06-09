// @flow
import React from 'react';
import { Icon } from '../../icons';

type Props = {
  className: string,
  title: string,
  message: string,
  iconName: string,
  iconClass: string,
  iconBackgroundColor: string,
  acceptButtonClass: string,
  acceptButtonText: string,
  cancelButtonClass: string,
  cancelButtonText: string,
  onAcceptClick: any,
  onCancelClick: any,
};

const PopConfirm = ({
  className,
  title,
  message,
  iconName,
  iconClass,
  iconBackgroundColor,
  acceptButtonClass,
  acceptButtonText,
  cancelButtonClass,
  cancelButtonText,
  onAcceptClick,
  onCancelClick,
  ...props
}: Props): React$Element<React$FragmentType> => {
  return (
    <>
      <div
        className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full border ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div
              className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ${iconBackgroundColor} sm:mx-0 sm:h-10 sm:w-10`}
            >
              <Icon name={iconName} className={iconClass} />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                {title}
              </h3>
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">{message}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          {onAcceptClick && (
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                type="button"
                className={`inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2
                text-base leading-6 font-medium text-white shadow-sm ${acceptButtonClass} transition ease-in-out duration-150 sm:text-sm sm:leading-5`}
                onClick={onAcceptClick}
              >
                {acceptButtonText}
              </button>
            </span>
          )}
          {onCancelClick && (
            <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                onClick={onCancelClick}
              >
                {cancelButtonText}
              </button>
            </span>
          )}
        </div>
      </div>
    </>
  );
};

PopConfirm.defaultProps = {
  title: 'Titulo',
  message: 'Mensaje',
  iconName: 'issue',
  iconClass: 'fill-current text-gray-600',
  iconBackgroundColor: '',
  acceptButtonClass:
    'bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray',
  acceptButtonText: 'Aceptar',
  cancelButtonText: 'Cancelar',
};

export default PopConfirm;
