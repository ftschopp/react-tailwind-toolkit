import React from 'react';
import DayWeekHeader from './DayWeekHeader.component';
import TitleHeader from './TitleHeader.component';
import SelectorPicker from './SelectorPicker.component';
import { splitEvery } from 'ramda';
import { getYear, getMonth } from 'date-fns';
import { getMonthDetails } from '../util';

function CalendarBody({
  currentDate,
  selectedDate,
  onClickDate,
  onNextClick,
  onBackClick,
}) {
  const monthDetail = splitEvery(
    7,
    getMonthDetails(getYear(currentDate), getMonth(currentDate))
  );

  const renderBeforeMonth = ({ date }) => (
    <div className="w-1/6 flex justify-center my-2px cursor-not-allowed bg-gray-100">
      <div className="h-8 w-8 flex justify-center items-center">
        <div className="text-xs opacity-75 text-red-400">{date}</div>
      </div>
    </div>
  );

  const renderCurrentMonth = ({ timestamp, date }) => {
    const isSelected = timestamp === selectedDate;
    const selectedClass = isSelected
      ? 'bg-red-500 shadow-xs text-blue-600'
      : '';
    const numberSelectedClass = isSelected ? 'z-10 text-white' : '';
    return (
      <div
        className="w-1/6 group flex justify-center items-center my-2px"
        onClick={() => onClickDate({ timestamp })}
      >
        <div className="relative overflow-hidden rounded-full">
          <div className="relative h-8 w-8 flex justify-center items-center overflow-hidden rounded-full cursor-pointer">
            <div
              className={`absolute inset-0 transition duration-150 ease-in-out border border-8 border-transparent rounded-full hover:border-red-500 ${selectedClass}`}
            ></div>
            <div className="flex justify-center items-center">
              <div className={numberSelectedClass}>
                <span>{date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderNextMonth = ({ date }) => (
    <div className="w-1/6 flex justify-center my-2px cursor-not-allowed bg-gray-100">
      <div className="h-8 w-8 flex justify-center items-center">
        <div className="text-xs opacity-75">{date}</div>
      </div>
    </div>
  );

  const renderRow = (row) => {
    return row.map((item) => {
      if (item.month === -1) {
        return renderBeforeMonth(item);
      } else if (item.month === 0) {
        return renderCurrentMonth(item);
      } else {
        return renderNextMonth(item);
      }
    });
  };

  return (
    <div className="absolute bg-white border mt-8 rounded-b-lg shadow-md w-64 z-10">
      <div className="w-full p-2">
        <TitleHeader date={selectedDate} />
        <SelectorPicker
          date={currentDate}
          onBackClick={onBackClick}
          onNextClick={onNextClick}
          onClickDate={onClickDate}
        />
        <DayWeekHeader />

        <div className="flex flex-col justify-between">
          {monthDetail &&
            monthDetail.map((row) => (
              <div className="flex justify-center">{renderRow(row)}</div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarBody;
