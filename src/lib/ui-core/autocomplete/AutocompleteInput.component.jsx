import React, { useEffect, useRef, useState, useCallback } from 'react';
import { isNilOrEmpty } from 'ramda-adjunct';
import { Icon } from '../../icons';

const SearchIcon = () => {
  return (
    <div className="flex z-10 leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center h-8 w-8 left-0">
      <Icon name="search" className={`fill-current text-gray-300`} />
    </div>
  );
};
const Loading = () => {
  return (
    <div className="flex z-10 leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center h-8 w-8 right-0 animate-spin">
      <Icon name={'refresh'} className="fill-current text-gray-300" />
    </div>
  );
};

const Option = ({ fieldName, fieldTitle, className, option, onSelect }) => {
  return (
    <li className={className} key={option} onClick={() => onSelect(option)}>
      {!isNilOrEmpty(fieldTitle) && (
        <p className="text-xs text-gray-600 p-1">{option[fieldTitle]}</p>
      )}
      <p className="text-gray-600 p-1 px-2">{option[fieldName]}</p>
    </li>
  );
};

const OptionList = ({
  fieldName,
  fieldTitle,
  showOptions,
  options = [],
  onSelect,
  cursor,
  emptyResultLabel,
}) => {
  return (
    <ul
      className={`bg-white z-20 border absolute w-full shadow-lg
      max-h-64 mt-0 overflow-y-scroll rounded-b
      ${!showOptions && 'hidden'} select-none`}
    >
      {options.length > 0 ? (
        options.map((option, i, arr) => {
          let className = `border-dashed ${
            options.length - 1 === i ? 'border-0' : 'border-b'
          }  px-1 hover:bg-gray-100 cursor-pointer bg-white`;

          // if (i === 0) className += 'pt-2 pb-1 rounded-t-lg';
          // else if (i === arr.length) className += 'pt-1 pb-2 rounded-b-lg';
          // else if (i === 0 && arr.length === 1) className += 'py-2 rounded-lg';
          // else className += 'py-1';

          if (cursor === i) {
            className += ' bg-gray-100';
          }

          return (
            <Option
              key={i}
              className={className}
              option={option}
              fieldTitle={fieldTitle}
              fieldName={fieldName}
              onSelect={onSelect}
            />
          );
        })
      ) : (
        <NoElements emptyResultLabel={emptyResultLabel} />
      )}
    </ul>
  );
};

const NoElements = ({ emptyResultLabel }) => {
  return <li className="text-sm px-4 py-2 text-gray-500">{emptyResultLabel}</li>;
};

export default function AutocompleteInput({
  name,
  placeholder,
  type,
  icon,
  options,
  fieldTitle,
  fieldName,
  value,
  onChange,
  onSearch,
  onSelect,
  loading,
  touched,
  error,
  emptyResultLabel,
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [cursor, setCursor] = useState(-1);
  const ref = useRef();
  const [timeoutId, setTimeoutId] = useState();

  const select = option => {
    // onChange(option.name);
    onSelect(option);
    setShowOptions(false);
  };

  // const handleChange = text => {
  //   setCursor(-1);

  //   clearTimeout(timeoutId);
  //   const id = setTimeout(() => {
  //     onSearch && onSearch(text);
  //   }, 500);
  //   setTimeoutId(id);

  //   if (!showOptions) {
  //     setShowOptions(true);
  //   }
  //   onChange && onChange(text);
  // };

  const filteredOptions = options; // .filter(option => option.includes(value));

  const moveCursorDown = () => {
    if (cursor < filteredOptions.length - 1) {
      setCursor(c => c + 1);
    }
  };

  const moveCursorUp = () => {
    if (cursor > 0) {
      setCursor(c => c - 1);
    }
  };

  const handleNav = e => {
    switch (e.key) {
      case 'ArrowUp':
        moveCursorUp();
        break;
      case 'ArrowDown':
        moveCursorDown();
        break;
      case 'Enter':
        if (cursor >= 0 && cursor < filteredOptions.length) {
          select(filteredOptions[cursor]);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const listener = e => {
      if (!ref.current.contains(e.target)) {
        setShowOptions(false);
        setCursor(-1);
      }
    };

    document.addEventListener('click', listener);
    document.addEventListener('focusin', listener);
    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('focusin', listener);
    };
  });

  const hasError = touched && error;
  const errorClasses = `text-red-300 bg-red-100 border-red-300
    focus:border-red-300 placeholder-red-600`;

  const fieldClassName = `py-1 pl-2 placeholder-gray-400 relative bg-white bg-white border border-gray-300
  ${showOptions ? 'rounded-t' : 'rounded'}
   focus:ring-0
  text-sm shadow-sm focus:outline-none w-full pl-8 ${icon ? 'pl-10' : ''} ${
    hasError ? 'pr-10 focus:border-red-300' : 'focus:border-blue-300'
  } ${hasError ? errorClasses : ''}`;
  const [shouldClose, setShouldClose] = useState(false);

  const onInputChange = useCallback(
    e => {
      setCursor(-1);

      clearTimeout(timeoutId);
      const id = setTimeout(() => {
        const { value } = e.target;
        onSearch && onSearch(value);
      }, 500);
      setTimeoutId(id);

      if (!showOptions) {
        setShowOptions(true);
      }
      onChange && onChange(e);
    },
    [onChange, onSearch, showOptions, timeoutId],
  );

  return (
    <div
      className="relative"
      ref={ref}
      onMouseDown={() => {
        setShouldClose(false);
      }}
      onBlur={() => {
        if (shouldClose) {
          setShowOptions(false);
          setShouldClose(false);
        }
      }}
    >
      <div className="flex">
        <SearchIcon />
        <input
          name={name}
          touched={touched}
          placeholder={placeholder}
          type={type}
          className={fieldClassName}
          value={value}
          // onChange={e => handleChange(e.target.value)}
          onChange={onInputChange}
          onFocus={() => {
            setShowOptions(true);
            setShouldClose(true);
          }}
          onKeyDown={handleNav}
        />
        {loading && <Loading />}
      </div>
      <OptionList
        showOptions={!loading && showOptions}
        fieldTitle={fieldTitle}
        fieldName={fieldName}
        options={filteredOptions}
        cursor={cursor}
        onSelect={select}
        emptyResultLabel={emptyResultLabel}
      />
      {touched && error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

AutocompleteInput.defaultProps = {
  emptyResultLabel: 'No hay resultados',
  placeHolder: '',
  type: 'text',
};
