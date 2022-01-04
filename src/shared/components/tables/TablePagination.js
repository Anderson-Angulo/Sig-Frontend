import { Button } from 'primereact/button';
import React from 'react';

const TablePagination = ({
  currentPage = 0,
  pageCount,
  nextPage,
  previousPage,
  pageSize,
  changeRow,
}) => {
  return (
    <div className="table-pagination flex items-center justify-end gap-4 p-5">
      <div className="pagination-pages">
        <span
          style={{
            color: '#607D8B',
            fontWeight: 'bold',
          }}
        >
          Pág. 1 de {currentPage}
        </span>
      </div>
      <div className="pagination-rows">
        <select onChange={changeRow} defaultValue={pageSize}>
          <option value="2">Mostrar 2 filas</option>
          <option value="4">Mostrar 4 filas</option>
          <option value="6">Mostrar 6 filas</option>
          <option value="8">Mostrar 8 filas</option>
          <option value="10">Mostrar 10 filas</option>
        </select>
      </div>
      <div className="pagination-actions flex justify-end gap-2">
        {currentPage !== 0 && currentPage !== 1 && (
          <Button
            onClick={previousPage}
            label="<<"
            className="p-button-secondary p-button-outlined"
          />
        )}
        {currentPage !== pageCount && (
          <Button
            onClick={nextPage}
            label=">>"
            className="p-button-secondary p-button-outlined"
          />
        )}
      </div>
    </div>
  );
};

export default TablePagination;
