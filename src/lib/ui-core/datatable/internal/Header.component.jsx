// @flow
import React from 'react';
import Icon from '../../../icons';
type Props = {
  headerGroups: any,
};

function Header({ headerGroups }: Props): React$Element<'div'> {
  return (
    <div className="min-w-full divide-y divide-gray-300 bg-gray-50 border-b-2">
      {headerGroups.map((headerGroup, index) => {
        return (
          <div key={index} {...headerGroup.getHeaderGroupProps({})} className="tr">
            {headerGroup.headers.map((column, columnIndex) => (
              <div
                key={columnIndex}
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className="th px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider flex"
              >
                {column.render('Header')}
                {/* Add a sort direction indicator */}
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <Icon
                        className="fill-current text-gray-500"
                        name="symbol-triangle-down"
                        width={14}
                        height={14}
                      />
                    ) : (
                      <Icon
                        className="fill-current text-gray-500"
                        name="symbol-triangle-up"
                        width={14}
                        height={14}
                      />
                    )
                  ) : (
                    ''
                  )}
                </span>

                {/* Use column.getResizerProps to hook up the events correctly */}
                {column.canResize && (
                  <div
                    {...column.getResizerProps()}
                    className={`resizer ${column.isResizing ? 'isResizing' : ''}`}
                  />
                )}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Header;
