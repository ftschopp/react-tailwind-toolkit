// @flow
import React, { useState, useCallback } from 'react';
import {
  useTable,
  useResizeColumns,
  useFlexLayout,
  useRowSelect,
  usePagination,
  useSortBy,
} from 'react-table';
import { Header, Body, Footer, IndeterminateCheckbox } from './internal';
import { ifElse, has, dissoc, assoc } from 'ramda';

type Props = {
  columns: any,
  data: Array<any>,
  loading: boolean,
  pageInfo: any,
  onNextPage: any,
  onPreviousPage: any,
  selectedRows: any,
  onRowSelected: any,
  onBottomTable: any,
  rowsPerPage: any,
  showedRowsPerPage: any,
  emptyDataLabel: string,
  loadingLabel: string,
};

function transform(id, selectedRowIds) {
  return ifElse(has(id), dissoc(id), assoc(id, true))(selectedRowIds);
}

function DataTable({
  columns,
  data,
  loading,
  pageInfo,
  onNextPage,
  onPreviousPage,
  onRowSelected,
  onBottomTable,
  rowsPerPage,
  showedRowsPerPage,
  emptyDataLabel,
  loadingLabel,
}: Props): React$Element<'div'> {
  const totalCount = data ? data.length : 0;
  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 50, // minWidth is only used as a limit for resizing
      width: 50, // width is used for both the flex-basis and flex-grow
      maxWidth: 150, // maxWidth is only used as a limit for resizing
    }),
    [],
  );

  const {
    getTableProps,
    headerGroups,
    page,
    rows,
    toggleAllRowsSelected,
    prepareRow,
    state: { selectedRowIds },
    gotoPage,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      useSortBy,
      initialState: {
        pageIndex: 0,
        pageSize: rowsPerPage,
      },
    },
    useSortBy,
    usePagination,
    useResizeColumns,
    useFlexLayout,
    useRowSelect,

    // hooks => {
    //   hooks.visibleColumns.push(columns => [
    //     // Let's make a column for selection
    //     {
    //       id: 'selection',
    //       // The header can use the table's getToggleAllRowsSelectedProps method
    //       // to render a checkbox
    //       // eslint-disable-next-line react/display-name
    //       Header: ({ getToggleAllPageRowsSelectedProps }) => (
    //         <div>
    //           <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
    //         </div>
    //       ),
    //       // The cell can use the individual row's getToggleRowSelectedProps method
    //       // to the render a checkbox
    //       // eslint-disable-next-line react/display-name
    //       Cell: ({ row }) => (
    //         <div>
    //           <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
    //         </div>
    //       ),
    //     },
    //     ...columns,
    //   ]);
    // },
  );

  const onPageChanged = data => {
    gotoPage(data.currentPage - 1);
  };

  // const onRowClick = useCallback(
  //   row => {
  //     const { id } = row;
  //     setSelectedRows(transform(id, selectedRows));

  //     onSelectedRow && onSelectedRow(row.values);
  //   },
  //   [onSelectedRow, selectedRows],
  // );
  // const onRowClick = row => {
  //   // eslint-disable-next-line no-console
  //   console.log('row clicked', { row, selectedRowIds });
  //   const { id } = row;

  //   // selectedRowIds = { 4: true };
  // };

  return (
    <div
      className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
      {...getTableProps()}
    >
      <Header headerGroups={headerGroups} />
      <Body
        page={page}
        prepareRow={prepareRow}
        toggleAllRowsSelected={toggleAllRowsSelected}
        selectedRowIds={selectedRowIds}
        onRowClick={e => {
          onRowSelected && onRowSelected(e);
        }}
        showedRowsPerPage={showedRowsPerPage}
        onBottomTable={onBottomTable}
        loading={loading}
        rows={rows}
        emptyDataLabel={emptyDataLabel}
      />
      <Footer
        loadingLabel={loadingLabel}
        loading={loading}
        totalCount={totalCount}
        rowsPerPage={rowsPerPage}
        onPageChanged={onPageChanged}
      />
    </div>
  );
}

DataTable.defaultProps = {
  rowsPerPage: 20,
  showedRowsPerPage: 10,
  loadingLabel: 'loading...',
  emptyDataLabel: 'no data found',
};

export default DataTable;
