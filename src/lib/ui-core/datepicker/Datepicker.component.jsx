import React, { useState, useCallback } from 'react';
import { format, getTime, add, startOfMonth, parseISO } from 'date-fns';
import { isNilOrEmpty } from 'ramda-adjunct';
import CalendarInput from './parts/CalendarInput.component';
import CalendarBody from './parts/CalendarBody.component';

const Datepicker = ({ className, value }) => {
  const [showBody, setShowBody] = useState(false);

  const [currentDate, setCurrentDate] = useState(
    isNilOrEmpty(value) ? getTime(new Date()) : parseISO(value)
  );
  const [selectedDate, setSelectedDate] = useState(
    isNilOrEmpty(value) ? getTime(new Date()) : parseISO(value)
  );

  const onNextClick = useCallback(() => {
    const result = add(currentDate, {
      months: 1,
    });
    setCurrentDate(getTime(result));
    setSelectedDate(getTime(startOfMonth(result)));
  }, [currentDate]);

  const onBackClick = useCallback(() => {
    const result = add(currentDate, {
      months: -1,
    });

    setCurrentDate(getTime(result));
    setSelectedDate(getTime(startOfMonth(result)));
  }, [currentDate]);

  const onClickDate = useCallback(
    (event) => {
      const { timestamp } = event;
      setSelectedDate(timestamp);
      setShowBody(!showBody);
    },
    [showBody]
  );

  return (
    <div className={`relative flex flex-wrap items-stretch ${className}`}>
      <CalendarInput
        onClick={() => setShowBody(!showBody)}
        value={format(selectedDate, 'yyyy-MM-dd')}
      />
      {showBody && (
        <CalendarBody
          currentDate={currentDate}
          selectedDate={selectedDate}
          onBackClick={onBackClick}
          onNextClick={onNextClick}
          onClickDate={onClickDate}
        />
      )}
    </div>
  );
};

Datepicker.defaultProps = {
  className: '',
  value: '',
};

export default Datepicker;
