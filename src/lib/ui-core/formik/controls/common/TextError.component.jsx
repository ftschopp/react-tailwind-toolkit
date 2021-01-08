import React from 'react';

function TextError({ errorMessage }) {
  const error = errorMessage ? errorMessage : '';
  return <div className="text-xs text-red-600 h-5">{error}</div>;
}

export default TextError;
