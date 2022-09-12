import React, { FC } from 'react'
import { useTable, useFlexLayout, Row } from 'react-table'

import '../../styles/paver.scss'
import { TableProps } from './Table.types'
import styles from './Table.module.scss'

const Table: FC<TableProps> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useFlexLayout
    )

  return (
    <div {...(getTableProps() as any)} className={styles.table}>
      <div className={[styles.thead, 'caps shadow-elevation-4'].join(' ')}>
        {headerGroups.map((headerGroup) => (
          <div
            key={headerGroup.id}
            {...(headerGroup.getHeaderGroupProps() as any)}
            className={styles.tr}
          >
            {headerGroup.headers.map((column) => (
              <div
                key={column.id}
                {...(column.getHeaderProps() as any)}
                className={styles.th}
              >
                {column.render('Header')}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div
        {...(getTableBodyProps() as any)}
        className={[styles.tbody, 'body1'].join(' ')}
      >
        {rows.map((row: Row, i: number) => {
          prepareRow(row)
          return (
            <div
              key={row.id}
              {...(row.getRowProps() as any)}
              className={styles.tr}
            >
              {row.cells.map((cell) => {
                return (
                  <div
                    key={`${i}-${cell.value}`}
                    {...(cell.getCellProps() as any)}
                    className={styles.td}
                  >
                    {cell.render('Cell')}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Table
