import React from 'react';

// eslint-disable-next-line react/display-name
const IndeterminateCheckbox = React.forwardRef(({ indeterminate, isSelected, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input
        className="form-checkbox rowCheckbox focus:ring-0 focus:shadow-outline text-blue-300"
        type="checkbox"
        ref={resolvedRef}
        {...rest}
      />
    </>
  );
});

export default IndeterminateCheckbox;
