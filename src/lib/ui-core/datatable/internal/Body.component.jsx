// @flow
import React from 'react';
import Icon from '../../../icons';

const cellProps = (props, { cell }) => getStyles(props, cell.column.align);

const getStyles = (props, align = 'left') => [
  props,
  {
    style: {
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      alignItems: 'items-center',
      display: 'flex',
    },
  },
];

type Props = {
  page: any,
  prepareRow: any,
  selectedRowIds: any,
  onRowClick: any,
  showedRowsPerPage: any,
  onBottomTable: any,
  loading: any,
  rows: any,
  emptyDataLabel: any,
};

function Body({
  page,
  prepareRow,
  selectedRowIds,
  onRowClick,
  showedRowsPerPage,
  onBottomTable,
  loading,
  rows,
  emptyDataLabel,
}: Props): React$Element<'div'> {
  return (
    <div
      className="relative tbody bg-white divide-y divide-gray-200 overflow-y-scroll"
      style={{ height: `${showedRowsPerPage * 36 + 10}px` }}
      onScroll={event => {
        const { scrollHeight, scrollTop, clientHeight } = event.target;
        if (scrollHeight - scrollTop === clientHeight) {
          onBottomTable && onBottomTable();
        }
      }}
    >
      {page.map((row, irow) => {
        prepareRow(row);
        const isSelected = row.id === selectedRowIds ? 'bg-blue-200' : '';
        return (
          <div
            key={irow}
            className="tr cursor-pointer  hover:bg-blue-100"
            onClick={() => onRowClick(row)}
            {...row.getRowProps()}
          >
            {row.cells.map((cell, icell) => {
              return (
                <div
                  key={icell}
                  className={`td px-6 py-2 text-sm text-gray-700 flex justify-center items-center ${isSelected}`}
                  {...cell.getCellProps(cellProps)}
                >
                  {cell.render('Cell')}
                </div>
              );
            })}
          </div>
        );
      })}
      {!loading && rows && rows.length === 0 && (
        <div className="flex flex-col h-full items-center justify-center">
          <Icon name="inbox" width="30px" height="30px" className="fill-current text-gray-500" />
          <p className="text-lg leading-4 font-medium text-gray-500">{emptyDataLabel}</p>
        </div>
      )}
      {loading && (
        <div
          className="absolute top-0 left-0 flex justify-center items-center w-full h-full"
          style={{ backgroundColor: 'rgb(255 255 255 / 63%)' }}
        >
          <Icon
            name="refresh"
            width="30px"
            height="30px"
            className="fill-current text-gray-500 animate-spin"
          />
        </div>
      )}
    </div>
  );
}

export default Body;
