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
  useOnClickOutside(ref, () => setOpen(false));

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
    <div className="relative">
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
        <div ref={ref}>
          <SelectItems
            options={optionsFiltered(filtered, options)}
            onClick={onSelectedItem}
          />
        </div>
      )}
      {hasError && !open ? (
        <p className="text-xs text-red-600">{error}</p>
      ) : null}
    </div>
  );
};

export default Select;
