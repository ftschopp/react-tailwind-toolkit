import React, { useState, useRef, useCallback } from 'react';
import { format, getTime, add, parseISO } from 'date-fns';
import { isNilOrEmpty } from 'ramda-adjunct';
import CalendarInput from './parts/CalendarInput.component';
import CalendarBody from './parts/CalendarBody.component';
import useOnClickOutside from '../../hooks/click-outside';

/**
 *
 * @param {*} param0
 */
const Datepicker = ({ className, name, label, value, onChange, error, touched, onBlur }) => {
  const [showBody, setShowBody] = useState(false);

  const [currentDate, setCurrentDate] = useState(
    isNilOrEmpty(value) ? getTime(new Date()) : parseISO(value),
    // isNilOrEmpty(value) ? '' : parseISO(value)
  );
  const [selectedDate, setSelectedDate] = useState(
    // isNilOrEmpty(value) ? getTime(new Date()) : parseISO(value)
    isNilOrEmpty(value) ? '' : parseISO(value),
  );

  const ref = useRef();
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, aaa => {
    setShowBody(false);
    onBlur && onBlur();
  });

  const onNextClick = useCallback(() => {
    const result = add(currentDate, {
      months: 1,
    });
    setCurrentDate(getTime(result));
    // setSelectedDate(getTime(startOfMonth(result)));
  }, [currentDate]);

  const onBackClick = useCallback(() => {
    const result = add(currentDate, {
      months: -1,
    });

    setCurrentDate(getTime(result));
    // setSelectedDate(getTime(startOfMonth(result)));
  }, [currentDate]);

  const onClickDate = useCallback(
    event => {
      const { timestamp } = event;
      setSelectedDate(timestamp);
      setShowBody(!showBody);
      onChange(format(timestamp, 'yyyy-MM-dd'));
    },
    [onChange, showBody],
  );

  const hasError = error && touched;

  return (
    <div ref={ref} className={`relative flex flex-wrap items-stretch ${className}`}>
      <label htmlFor={name} className="text-sm text-gray-600">
        {label}
      </label>

      <CalendarInput
        name={name}
        hasError={hasError}
        onClick={e => {
          setShowBody(!showBody);
        }}
        value={isNilOrEmpty(selectedDate) ? '' : format(selectedDate, 'yyyy-MM-dd')}
        // value={format(selectedDate, 'yyyy-MM-dd')}
      />
      {hasError && <p className="text-xs text-red-600">{error}</p>}
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
