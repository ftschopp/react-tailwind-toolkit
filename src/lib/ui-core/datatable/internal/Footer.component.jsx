// @flow
import React from 'react';
import Pagination from './Pagination.component';

type Props = {
  loadingLabel: string,
  loading: boolean,
  totalCount: number,
  rowsPerPage: number,
  onPageChanged: any,
};
function Footer({
  loadingLabel,
  loading,
  totalCount,
  rowsPerPage,
  onPageChanged,
}: Props): React$Element<'div'> {
  return (
    <div className="border-t-2 bg-gray-50 px-4 py-3 hidden sm:flex-1 sm:flex sm:items-center sm:justify-between h-16">
      <div className="px-2">
        {loading && <p className="text-sm leading-5 text-gray-700">{loadingLabel}</p>}
      </div>

      <div className="px-2 flex flex-col">
        <Pagination
          totalRecords={totalCount}
          pageLimit={rowsPerPage}
          pageNeighbours={1}
          onPageChanged={onPageChanged}
          enabled={!loading}
        />
        <p className="text-xs leading-5 text-gray-700 flex justify-end">
          <span className="font-medium">{`${totalCount} registros encontrados`}</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
