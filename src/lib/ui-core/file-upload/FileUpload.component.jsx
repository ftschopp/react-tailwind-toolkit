// @flow
import React, { useState, useCallback } from 'react';
import Icon from '../../icons';

type Props = {
  className: string,
};

const FileItem = ({ name }) => {
  return (
    <article className="flex justify-between items-center">
      <div className="flex items-center">
        <Icon name="paperclip" width="14px" height="14px" className="mr-2" />
        <p className="text-sm">{name}</p>
      </div>
      <Icon name="trash" width="14px" height="14px" className="" />
    </article>
  );
};

const FileItem2 = ({ name }) => {
  return (
    <article className="flex justify-between items-center border-red-100 border-b-2">
      <div className="flex items-center">
        <Icon name="paperclip" width="14px" height="14px" className="mr-2" />
        <p className="text-sm">{name}</p>
      </div>
      <Icon name="trash" width="14px" height="14px" className="" />
    </article>
  );
};

function FileUpload({ className }: Props): React$Element<'div'> {
  return (
    <div className="max-w-md py-4 px-4 bg-white shadow-lg rounded-lg my-20">
      <header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
        <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
          <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
        </p>
        <input id="hidden-input" type="file" multiple className="hidden" />
        <button
          id="button"
          className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
        >
          Upload a file
        </button>
      </header>
      <FileItem name="aa.xls" />
      <FileItem name="otro archivo con nombre largo.pdf" />
      <FileItem2 name="aa.xls" />
    </div>
  );
}

FileUpload.defaultProps = {};

export default FileUpload;
