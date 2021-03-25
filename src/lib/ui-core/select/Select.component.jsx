import React, { useRef, useState, useCallback } from 'react';
import { filter, propSatisfies, includes } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';
import SelectInput from './SelectInput.component';
import SelectItems from './SelectItems.component';
import useOnClickOutside from '../../hooks/click-outside';

const Select = ({
  label,
  error,
  value,
  options,
  touched,
  onChange,
  onBlur,
  ...props
}) => {
  const hasError = touched && !isNilOrEmpty(error);

  const [open, setOpen] = useState(false);
  const defaultOption = { id: '', description: 'Seleccione una opción' };
  const selectedOption = options?.find((x) => x.id === value);
  const selected = selectedOption ? selectedOption : defaultOption;
  const [filtered, setFiltered] = useState(null);

  const ref = useRef();
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, (aaa) => {
    setOpen(false);
  });

  const optionsFiltered = (value, options = []) =>
    isNilOrEmpty(value)
      ? options
      : filter(propSatisfies(includes(value), 'description'), options);

  const onSelectedItem = useCallback(
    (e) => {
      setFiltered(null);
      setOpen(false);
      onChange && onChange(e);
    },
    [onChange]
  );

  return (
    <div ref={ref} className="relative flex flex-col flex-wrap items-stretch">
      <label className="text-sm text-gray-600">{label}</label>
      <SelectInput
        label={label}
        hasError={!open && hasError}
        selected={selected}
        onChange={(e) => {
          setOpen(true);
          setFiltered(e.target.value);
        }}
        onClearSelection={() => {
          setFiltered(null);
          onChange && onChange(defaultOption);
        }}
        onClick={() => {
          onBlur && onBlur();
          setOpen(!open);
        }}
      />
      {open && (
        <div>
          <SelectItems
            options={optionsFiltered(filtered, options)}
            onClick={onSelectedItem}
          />
        </div>
      )}
      {!open && hasError && 
        <p className="text-xs text-red-600 h-5">
        {error}
      </p>
      }
    
    </div>
  );
};

export default Select;
