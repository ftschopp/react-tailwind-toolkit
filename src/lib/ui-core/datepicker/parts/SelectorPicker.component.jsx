import React from 'react';
import esLocale from 'date-fns/locale/es';
import { format } from 'date-fns';

function SelectorPicker({ date, onNextClick, onBackClick }) {
  const monthString = format(date, 'MMMM', { locale: esLocale });
  const year = format(date, 'yyyy', { locale: esLocale });

  return (
    <div className="relative p-1">
      <div className="absolute inset-0 bg-gray-100"></div>{' '}
      <div className="flex justify-between items-center relative">
        <div className="flex-shrink-0 w-8" onClick={onBackClick}>
          <div className="rounded-full overflow-hidden">
            <div className="transition duration-150 ease-out p-2 cursor-pointer hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 511.641 511.641"
                fill="currentColor"
                className="h-4 w-auto"
              >
                <path d="M148.32 255.76L386.08 18c4.053-4.267 3.947-10.987-.213-15.04a10.763 10.763 0 00-14.827 0L125.707 248.293a10.623 10.623 0 000 15.04L371.04 508.667c4.267 4.053 10.987 3.947 15.04-.213a10.763 10.763 0 000-14.827L148.32 255.76z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex-1 rounded overflow-hidden py-1 ml-2 mr-1 text-center cursor-pointer transition duration-150 ease-out hover:bg-gray-200 capitalize">
            {monthString}
          </div>
          <div className="flex-1 rounded overflow-hidden py-1 mr-2 ml-1 text-center cursor-pointer transition duration-150 ease-out hover:bg-gray-200">
            {year}
          </div>
        </div>
        <div className="flex-shrink-0 w-8" onClick={onNextClick}>
          <div className="rounded-full overflow-hidden">
            <div className="transition duration-150 ease-out p-2 cursor-pointer hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 511.949 511.949"
                fill="currentColor"
                className="h-4 w-auto"
              >
                <path d="M386.235 248.308L140.902 2.975c-4.267-4.053-10.987-3.947-15.04.213a10.763 10.763 0 000 14.827l237.76 237.76-237.76 237.867c-4.267 4.053-4.373 10.88-.213 15.04 4.053 4.267 10.88 4.373 15.04.213l.213-.213 245.333-245.333a10.624 10.624 0 000-15.041z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectorPicker;
