import React, { useRef, useState, useCallback, useEffect } from 'react';
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
  const hasError = !isNilOrEmpty(error);

  const [open, setOpen] = useState(false);
  const defaultOption = { id: '', description: 'Seleccione una opción' };
  const selectedOption = options?.find((x) => x.id === value);
  const [selected, setSelected] = useState(
    selectedOption ? selectedOption : defaultOption
  );
  const [filtered, setFiltered] = useState(null);

  const ref = useRef();
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, (aaa) => {
    console.log('aaa', aaa);
    setOpen(false);
  });

  const optionsFiltered = (value, options = []) =>
    isNilOrEmpty(value)
      ? options
      : filter(propSatisfies(includes(value), 'description'), options);

  const onSelectedItem = useCallback(
    (e) => {
      setSelected(e);
      setFiltered(null);
      setOpen(false);
      onChange && onChange(e);
    },
    [onChange]
  );

  return (
    <div ref={ref} className="relative flex flex-col flex-wrap items-stretch">
      <SelectInput
        hasError={!open && hasError}
        selected={selected}
        onChange={(e) => {
          setSelected(null);
          setOpen(true);
          setFiltered(e.target.value);
        }}
        onClearSelection={() => {
          setSelected(defaultOption);
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
      <p className="text-xs text-red-600 h-5">
        {!open && hasError ? error : ''}
      </p>
    </div>
  );
};

export default Select;
