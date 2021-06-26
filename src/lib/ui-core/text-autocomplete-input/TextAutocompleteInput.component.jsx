// @flow
import React, { useCallback, useEffect, useState } from 'react';
import usePrevious from '../../hooks/use-previous';
import { Icon } from '../../icons';
import { isNilOrEmpty } from 'ramda-adjunct';
import { pluck, equals, compose, propOr } from 'ramda';
type Props = {
  className: string,
  name: string,
  icon: string,
  label: string,
  showCheck: string,
  touched: string,
  name: string,
};

const Loading = () => {
  return (
    <div className="flex z-10 leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center h-8 w-8 right-0 animate-spin">
      <Icon name={'refresh'} className="fill-current text-gray-300" />
    </div>
  );
};

const SearchIcon = () => {
  return (
    <div className="flex z-10 leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center h-8 w-8 left-0">
      <Icon name="search" className={`fill-current text-gray-300`} />
    </div>
  );
};

const WithoutOptions = () => {
  return (
    <div className="flex flex-col justify-center items-center h-64">
      <Icon name="inbox" width="30px" height="30px" className="fill-current text-gray-500" />
      <p className="text-sm text-gray-500">No hay resultados</p>
    </div>
  );
};

const ListOptions = ({ options, fieldValue, fieldTitle, onOptionClick, hasError }) => {
  return (
    <div
      className={`absolute bg-white border border-gray-300
      max-h-64 mt-0 overflow-y-scroll rounded-b w-full z-20
      ${hasError ? 'bg-red-100 border-red-300' : ''}`}
    >
      <ul>
        {options?.length === 0 && <WithoutOptions />}
        {options?.length > 0 &&
          options.map((option, i) => {
            return (
              <li
                key={i}
                onClick={e => {
                  console.log('event click', e);
                  onOptionClick(option);
                }}
                className={`hover:bg-gray-100 cursor-pointer ${
                  options.length - 1 === i ? 'border-0' : 'border-dashed'
                } border-b`}
              >
                {!isNilOrEmpty(fieldTitle) && (
                  <p className="text-xs text-gray-600 p-1">{option[fieldTitle]}</p>
                )}
                <p className="text-gray-600 p-1 px-2">{option[fieldValue]}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

function TextAutocompleteInput(props: Props): React$Element<'div'> {
  const {
    className,
    name,
    icon,
    label,
    options,
    fieldValue,
    fieldTitle,
    showCheck,
    touched,
    error,
    autocomplete,
    onSearch,
    onOptionClick,
    onChange,
    onBlur,
    ...rest
  } = props;

  const getIds = compose(pluck('id'), propOr([], 'options'));
  const [searching, setSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const prevOptions = usePrevious({ options });
  useEffect(() => {
    const ids = getIds(prevOptions);

    if (equals(ids, pluck('id')(options))) {
    } else {
      setSearching(false);
      setShowSuggestions(true);
    }
  }, [getIds, options, prevOptions]);

  const hasError = touched && error;
  const errorClasses = `text-red-300 bg-red-100 border-red-300
    focus:border-red-300 placeholder-red-600`;

  const fieldClassName = `py-1 pl-2 placeholder-gray-400 relative bg-white bg-white border border-gray-300
  ${showSuggestions ? 'rounded-t' : 'rounded'}
   focus:ring-0
  text-sm shadow-sm focus:outline-none w-full pl-8 ${icon ? 'pl-10' : ''} ${
    hasError ? 'pr-10 focus:border-red-300' : 'focus:border-blue-300'
  } ${hasError ? errorClasses : ''}`;

  const [timeoutId, setTimeoutId] = useState();

  const onInputChange = useCallback(
    e => {
      clearTimeout(timeoutId);
      const id = setTimeout(() => {
        const { value } = e.target;
        setSearching(true);
        onSearch && onSearch(value);
      }, 800);
      setTimeoutId(id);
      onChange && onChange(e);
    },
    [onChange, onSearch, timeoutId],
  );

  const onInputBlur = useCallback(
    e => {
      setShowSuggestions(false);
      onBlur && onBlur(e);
    },
    [onBlur],
  );

  return (
    <div className="relative flex flex-col flex-wrap items-stretch">
      <label htmlFor={name} className="text-sm text-gray-600">
        {label}
      </label>
      <div className={`relative flex flex-wrap items-stretch ${className}`}>
        <div className="flex w-full">
          <SearchIcon />
          <input className={fieldClassName} name={name} onChange={onInputChange} {...rest} />
          {searching && <Loading />}
        </div>
      </div>
      {showSuggestions && (
        <div>
          <ListOptions
            onBlur={onInputBlur}
            options={options}
            fieldValue={fieldValue}
            fieldTitle={fieldTitle}
            onOptionClick={e => {
              console.log('OPTION');
              onOptionClick && onOptionClick(e);
              setShowSuggestions(false);
            }}
            hasError={touched && error}
          />
        </div>
      )}
      {touched && error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
TextAutocompleteInput.defaultProps = {
  className: 'w-full',
  icon: null,
  showCheck: true,
};

export default TextAutocompleteInput;
