// @flow
import React from 'react';
import {
  useTable,
  useResizeColumns,
  useFlexLayout,
  useRowSelect,
  usePagination,
  useSortBy,
} from 'react-table';
import { Header, Body, Footer } from './internal';

type Props = {
  columns: any,
  data: Array<any>,
  loading: boolean,
  pageInfo: any,
  onNextPage: any,
  onPreviousPage: any,
  selectedRows: any,
  onRowClicked: any,
  onBottomTable: any,
  rowsPerPage: any,
  showedRowsPerPage: any,
  emptyDataLabel: string,
  loadingLabel: string,
};

function DataTable({
  columns,
  data,
  loading,
  pageInfo,
  onNextPage,
  onPreviousPage,
  selectedRows,
  onRowClicked,
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
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 150, // width is used for both the flex-basis and flex-grow
      maxWidth: 200, // maxWidth is only used as a limit for resizing
    }),
    [],
  );

  const {
    getTableProps,
    headerGroups,
    page,
    rows,
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
        // selectedRowIds: selectedRows,
        pageIndex: 0,
        pageSize: rowsPerPage,
      },
    },
    useSortBy,
    usePagination,
    useResizeColumns,
    useFlexLayout,
    useRowSelect,
  );

  const onPageChanged = data => {
    gotoPage(data.currentPage - 1);
  };

  const onRowClick = row => {
    // eslint-disable-next-line no-console
    console.log('row clicked', row);
  };
  return (
    <div
      className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
      {...getTableProps()}
    >
      <Header headerGroups={headerGroups} />
      <Body
        page={page}
        prepareRow={prepareRow}
        selectedRowIds={selectedRowIds}
        onRowClick={onRowClick}
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
