// @flow
import React, { useCallback } from 'react';
import { Icon } from '../../icons';
import { isNilOrEmpty } from 'ramda-adjunct';

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
    // <div className="relative flex flex-wrap items-stretch flex-col border rounded-b border-t-0 max-h-40 overflow-y-scroll">
    <div
      className={`absolute bg-white border border-gray-300 max-h-64 mt-0 overflow-y-scroll rounded-b w-full z-20 ${
        hasError ? 'bg-red-100 border-red-300' : ''
      }`}
    >
      <ul>
        {options?.length === 0 && <WithoutOptions />}
        {options?.length > 0 &&
          options.map((option, i) => {
            return (
              <li
                key={i}
                onClick={() => onOptionClick(option)}
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
    showSuggestions,
    loading,
    fieldValue,
    fieldTitle,
    showCheck,
    touched,
    error,
    autocomplete,
    onOptionClick,
    onSearch,
    ...rest
  } = props;

  const hasError = touched && error;
  const errorClasses = `text-red-300 bg-red-100 border-red-300
    focus:border-red-300 placeholder-red-600`;

  const rightIconName = hasError ? 'cross' : showCheck ? 'tick' : null;

  const fieldClassName = `py-1 pl-2 placeholder-gray-400 relative bg-white bg-white border border-gray-300
  ${showSuggestions ? 'rounded-t' : 'rounded'}
   focus:ring-0
  text-sm shadow-sm focus:outline-none w-full pl-8 ${icon ? 'pl-10' : ''} ${
    hasError ? 'pr-10 focus:border-red-300' : 'focus:border-blue-300'
  } ${hasError ? errorClasses : ''}`;

  const onChange = event => {
    const { value } = event.target;

    if (value.length >= 3) {
      onSearch(value);
    }
  };
  return (
    <div className="relative flex flex-col flex-wrap items-stretch">
      <label htmlFor={name} className="text-sm text-gray-600">
        {label}
      </label>
      <div className={`relative flex flex-wrap items-stretch ${className}`}>
        <div className="flex w-full">
          <SearchIcon />
          <input className={fieldClassName} name={name} {...rest} onChange={onChange} />
          {loading && <Loading />}
        </div>
      </div>
      {showSuggestions && (
        <div>
          <ListOptions
            options={options}
            fieldValue={fieldValue}
            fieldTitle={fieldTitle}
            onOptionClick={onOptionClick}
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
