import React, { useMemo } from "react";
import { useTable } from "react-table";
import COMPANY_DATA from './DataTable/COMPANY_DATA.json'
import { COLUMNS } from "./DataTable/columns";
import './DataTable/table.css'

export const Table = () => {

  // Creamos las constantes 'columns' y 'data' donde almacenaremos las constantes
  // COLUMNS y COMPANY_DATA que provienen de sus respectivos .js files.
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => COMPANY_DATA, [])

  // Usamos las propiedades y funciones (revisar si así se les llama) que brinda
  // react-table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data
  })

  return (
    <table {...getTableProps()}>
      <thead>
        {
          headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {
                  row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}


