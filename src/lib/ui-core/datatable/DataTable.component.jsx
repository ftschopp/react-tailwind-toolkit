import React from 'react';
import {
  useTable,
  useResizeColumns,
  useFlexLayout,
  useRowSelect,
  usePagination,
  useSortBy,
} from 'react-table';
import { Icon } from '../../icons';

// const IndeterminateCheckbox = React.forwardRef(
//   ({ indeterminate, ...rest }, ref) => {
//     const defaultRef = React.useRef();
//     const resolvedRef = ref || defaultRef;

//     React.useEffect(() => {
//       resolvedRef.current.indeterminate = indeterminate;
//     }, [resolvedRef, indeterminate]);

//     return (
//       <>
//         <input
//           className="form-checkbox rowCheckbox focus:outline-none focus:shadow-outline"
//           type="checkbox"
//           ref={resolvedRef}
//           {...rest}
//         />
//       </>
//     );
//   }
// );

function Table({
  columns,
  data,
  loading,
  pageInfo,
  onNextPage,
  onPreviousPage,
  selectedRows,
  onRowClicked,
  onBottomTable,
}) {
  const totalCount = data ? data.length : 0;
  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 150, // width is used for both the flex-basis and flex-grow
      maxWidth: 200, // maxWidth is only used as a limit for resizing
    }),
    []
  );

  // const headerProps = (props, { column }) => getStyles(props, column.align);

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

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      useSortBy,
      // initialState: {
      //   selectedRowIds: selectedRows,
      // },
    },
    useSortBy,
    usePagination,
    useResizeColumns,
    useFlexLayout,
    useRowSelect
    // (hooks) => {
    //   hooks.allColumns.push((columns) => [
    //     // Let's make a column for selection
    //     {
    //       id: 'selection',
    //       disableResizing: true,
    //       minWidth: 15,
    //       width: 15,
    //       maxWidth: 15,
    //       // The header can use the table's getToggleAllRowsSelectedProps method
    //       // to render a checkbox
    //       // Header: ({ getToggleAllRowsSelectedProps }) => (
    //       //   <div>
    //       //     <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
    //       //   </div>
    //       // ),
    //       // The cell can use the individual row's getToggleRowSelectedProps method
    //       // to the render a checkbox
    //       // Cell: ({ row }) => {
    //       //   return (
    //       //     <div>
    //       //       <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
    //       //     </div>
    //       //   );
    //       // },
    //     },
    //     ...columns,
    //   ]);
    //   hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
    //     // fix the parent group of the selection button to not be resizable
    //     const selectionGroupHeader = headerGroups[0].headers[0];
    //     selectionGroupHeader.canResize = false;
    //   });
    // }
  );

  return (
    <div
      {...getTableProps()}
      className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
    >
      <div className="min-w-full divide-y divide-gray-300 bg-gray-100 border-b-2">
        {headerGroups.map((headerGroup) => (
          <div {...headerGroup.getHeaderGroupProps({})} className="tr">
            {headerGroup.headers.map((column) => (
              <div
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className="th px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider "
              >
                {column.render('Header')}
                {/* Add a sort direction indicator */}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
                {/* Use column.getResizerProps to hook up the events correctly */}
                {column.canResize && (
                  <div
                    {...column.getResizerProps()}
                    className={`resizer ${
                      column.isResizing ? 'isResizing' : ''
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div
        className="tbody bg-white divide-y divide-gray-200 overflow-y-scroll"
        style={{ height: '300px' }}
        onScroll={(event) => {
          const { scrollHeight, scrollTop, clientHeight } = event.target;
          if (scrollHeight - scrollTop === clientHeight) {
            onBottomTable();
          }
        }}
      >
        {rows.map((row) => {
          prepareRow(row);
          const isSelected = row.id === selectedRowIds ? 'bg-blue-200' : '';
          return (
            <div
              {...row.getRowProps()}
              className="tr cursor-pointer  hover:bg-blue-100"
              onClick={() => onRowClicked(row)}
            >
              {row.cells.map((cell) => {
                return (
                  <div
                    {...cell.getCellProps(cellProps)}
                    className={`td px-6 py-2 text-sm text-gray-700 flex justify-center items-center ${isSelected}`}
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
            <Icon
              name="inbox"
              width="30px"
              height="30px"
              className="fill-current text-gray-500"
            />
            <p className="text-lg leading-4 font-medium text-gray-500">
              no hay datos
            </p>
          </div>
        )}
      </div>
      <div className="border-t-2 bg-gray-100 px-4 py-3 hidden sm:flex-1 sm:flex sm:items-center sm:justify-between h-16">
        <div className="px-2">
          {loading && (
            <p className="text-sm leading-5 text-gray-700">Cargando...</p>
          )}
        </div>
        <div className="px-2">
          {' '}
          <nav className="relative z-0 inline-flex shadow-sm">
            <p className="text-sm leading-5 text-gray-700">
              <span className="font-medium">{totalCount}</span>
              {' registros encontrados'}
            </p>
          </nav>
        </div>
      </div>
    </div>
  );
}

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
}) {
  return (
    <Table
      columns={columns}
      data={data}
      loading={loading}
      pageInfo={pageInfo}
      onNextPage={onNextPage}
      onPreviousPage={onPreviousPage}
      selectedRows={selectedRows}
      onRowClicked={onRowClicked}
      onBottomTable={onBottomTable}
    />
  );
}

export default DataTable;
