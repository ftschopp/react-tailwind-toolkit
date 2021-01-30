import React from 'react';
import { format } from 'date-fns';
import esLocale from 'date-fns/locale/es';

function TitleHeader({ date }) {
  const day = format(date, 'dd', { locale: esLocale });
  const dayString = format(date, 'EEEE', { locale: esLocale });
  const monthString = format(date, 'MMMM', { locale: esLocale });

  return (
    <div className="flex flex-row justify-center items-center px-2 py-1">
      <div className="flex items-center text-2xl xl:text-3xl capitalize">
        {day}
      </div>
      <div className="mx-1">
        <div className="leading-none text-xs capitalize">{dayString}</div>
        <div className="leading-none text-xs capitalize">{monthString}</div>
      </div>
    </div>
  );
}

export default TitleHeader;
